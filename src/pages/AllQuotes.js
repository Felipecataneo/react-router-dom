import QuoteList from "../components/quotes/QuoteList";
const DUMMY_QUOTES = [
  { id: "q1", author: "Max", text: "Learning React is fun!" },
  { id: "q2", author: "Teste", text: "React is lazy!" },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES}></QuoteList>;
}

export default AllQuotes;
