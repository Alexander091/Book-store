package my.webservice.books.booksstore.services;

import my.webservice.books.booksstore.models.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface BookService {

    List<Book> findAll(Pageable request);

    Book save(Book book);

    Optional<Book> getOne(String bookId);

    Page<Book> findByTitle(@Param("title") String title, Pageable pageable);

    void delete(String id);
}
