package my.webservice.books.booksstore.resources;

import my.webservice.books.booksstore.controllers.BookController;
import my.webservice.books.booksstore.models.Book;
import org.springframework.hateoas.Link;
import org.springframework.hateoas.ResourceSupport;

import static org.springframework.hateoas.mvc.ControllerLinkBuilder.linkTo;
import static org.springframework.hateoas.mvc.ControllerLinkBuilder.methodOn;

public class BookResources extends ResourceSupport {

    private final Book book;

    public BookResources(Book book) {
        this.book = book;
        this.add(linkTo(BookController.class).withRel("books"));
        this.add(linkTo(methodOn(BookController.class).getBook(book.getId())).withSelfRel());
    }

    public Book getBook() {
        return book;
    }
}
