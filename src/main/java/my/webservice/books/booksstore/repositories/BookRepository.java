package my.webservice.books.booksstore.repositories;

import my.webservice.books.booksstore.models.Book;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


@Repository
public interface BookRepository  extends JpaRepository<Book, String> {

    @Query(value = "select b from Book b where lower(b.title) like LOWER(concat('%', concat(?1, '%') ))",
            countQuery ="select count(b) from Book b where lower(b.title) like LOWER(concat('%', concat(?1, '%') ))"
    )
    Page<Book> findByTitle(@Param("title") String title, Pageable pageable);
}
