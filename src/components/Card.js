export default function Card({ heading, paragraph }) {
  return (
    <article>
      <h2>{heading}</h2>
      <p>{paragraph}</p>
      <button>{1 + 1}</button>
    </article>
  );
}
