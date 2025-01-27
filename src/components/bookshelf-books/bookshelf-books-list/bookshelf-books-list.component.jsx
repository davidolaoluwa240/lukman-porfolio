// Components
import { BookshelfBooksCard } from "../bookshelf-books-card/bookshelf-books-card.component";

// Styles
import { BookshelfBooksListWrapper } from "./bookshelf-books-list.styles";

export const BookshelfBooksList = ({ items }) => {
  // Rendered Book Shelf Books Card Items
  const renderedBookshelfBooksCardItems = items.map(({ id, ...restItem }) => (
    <BookshelfBooksCard key={id} {...restItem} />
  ));

  return (
    <BookshelfBooksListWrapper>
      {renderedBookshelfBooksCardItems}
    </BookshelfBooksListWrapper>
  );
};
