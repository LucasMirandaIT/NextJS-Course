export default function Quarto() {
  const subtitle = "Estou no Javascript!";

  return (
    <div>
      <h1>Integração JS e JSX</h1>
      <h2>{subtitle}</h2>
      <h3>{3 * 3}</h3>
      <h4>{between(10, 1, 20) ? "Sim" : "Não"}</h4>
    </div>
  );
}

function between(value: number, min: number, max: number) {
  const isBetween = value >= min && value <= max;
  return isBetween;
}
