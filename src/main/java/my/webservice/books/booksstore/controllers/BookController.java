package my.webservice.books.booksstore.controllers;

import my.webservice.books.booksstore.exceptions.ResourceNotFoundException;
import my.webservice.books.booksstore.models.Book;
import my.webservice.books.booksstore.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping(path="api/books")
public class BookController{

    private final BookService bookService;

    @Autowired
    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping
    public List<Book> getBooks (@RequestParam(required = false, defaultValue = "") String filter,
                                @RequestParam(required = false) Sort.Direction sortOrder,
                                @RequestParam(required = false, defaultValue = "0") int pageNumber,
                                @RequestParam(required = false, defaultValue = "10") int pageSize) {
        Pageable pageable = PageRequest.of(pageNumber, pageSize);
//        return bookService.findAll(request);
        return bookService.findByTitle(filter, pageable).getContent();
    }

    @PostMapping
    public ResponseEntity<?> add(@RequestBody Book book) {

        Book result = bookService.save(book);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setLocation(ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}")
                .buildAndExpand(result.getId())
                .toUri());
        return new ResponseEntity<>(null, httpHeaders, HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public Book getBook(@PathVariable String id) {
        Optional<Book> book = bookService.getOne(id);
        if(book.isPresent()) {
            return book.get();
        } else {
            throw new ResourceNotFoundException(id);
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> delete(@PathVariable String id)  {
        bookService.delete(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
