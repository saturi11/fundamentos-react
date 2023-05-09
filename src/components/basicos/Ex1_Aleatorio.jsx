export default function Aleatorio(props) {
  const random = Math.floor(Math.random() * (props.num2 - props.num1));
  return (
    <div>
      <h3><strong> valor maximo </strong> {props.num2}</h3>
      <h3><strong>valor minimo </strong> {props.num1}</h3>
      <h2><strong>valor escolhido </strong> {random}</h2>
    </div>
  );
}
