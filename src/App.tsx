import { Books } from "./components/books";

export default function App() {
  return (
    <div className="flex flex-col space-y-6 items-center p-2">
      <section>Search, Filter & Sort</section>
      <section className="w-11/12 flex flex-col items-center">
        <Books />
      </section>
    </div>
  );
}
