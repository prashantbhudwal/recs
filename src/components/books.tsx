import { Book as BookType } from "@/data/book-schema";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { books } from "@/data/books-data";
import { Badge } from "./ui/badge";

export function Books() {
  return (
    <section className="flex flex-col space-y-2 max-w-prose">
      {books.map((book) => (
        <Book book={book} />
      ))}
    </section>
  );
}

const Book = function ({ book }: { book: BookType }) {
  const strengthLabels = {
    must_read: "Must Read",
    can_read: "Can Read",
    should_read: "Should Read",
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>{book.title}</CardTitle>
        <CardDescription>{book.author}</CardDescription>
        <CardDescription>{book.yearRange}</CardDescription>
      </CardHeader>
      <CardContent>
        <div>{book.why}</div>
      </CardContent>
      <CardFooter className="flex flex-row space-x-3">
        <Badge variant={"outline"}>
          {strengthLabels[book.strength] || "Should Read"}
        </Badge>
        <div className="flex flex-row space-x-2">
          {book.tags.map((tag) => (
            <Badge className="italic">{`#` + tag}</Badge>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
};
