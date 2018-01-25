package my.webservice.books.booksstore.services.impl;

import my.webservice.books.booksstore.models.Book;
import my.webservice.books.booksstore.repositories.BookRepository;
import my.webservice.books.booksstore.services.BookService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class BookServiceImpl implements BookService {

    private final BookRepository bookRepository;

    @Autowired
    public BookServiceImpl(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    @Override
    public List<Book> findAll(Pageable request) {
        Page<Book> bookPage = bookRepository.findAll(request);
        return bookPage.getContent();
    }

    @Override
    public Book save(Book book) {
        return bookRepository.save(book);
    }

    @Override
    public Optional<Book> getOne(String bookId) {
        return bookRepository.findById(bookId);
    }

    @Override
    public Page<Book> findByTitle(String title, Pageable pageable) {
        return bookRepository.findByTitle(title, pageable);
    }

    @Override
    public void delete(String id) {
        bookRepository.deleteById(id);
    }

}
