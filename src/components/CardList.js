import Button from "./Button";
function Card(props) {
  return (
    <article>
      <h2>{props.name}</h2>
      <p>{props.price}</p>
      <Button text="Click Me">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-bar-chart-steps"
          viewBox="0 0 16 16"
        >
          <path d="M.5 0a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-1 0V.5A.5.5 0 0 1 .5 0zM2 1.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-4a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h6a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-6a.5.5 0 0 1-.5-.5v-1zm2 4a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-7a.5.5 0 0 1-.5-.5v-1z" />
        </svg>
      </Button>
    </article>
  );
}

export default function CardList(props) {
  //props.cards = []
  const mapped = props.cards.map((card) => (
    <Card name={card.name} price={card.price} key={card.id}></Card>
  ));
  return (
    <ul>
      <li>{mapped}</li>
    </ul>
  );
}
