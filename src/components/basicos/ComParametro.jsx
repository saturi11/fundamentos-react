export default function ComParametro(props) {
  const sit = props.nota >= 7 ? "aprovado" : "reprovado";
  return (
    <div>
      <h2>{props.titulo}</h2>
      <h3>O aluno {props.aluno} tem nota</h3>
      <h3>{props.nota}</h3>
      <h2>e foi {sit} </h2>
    </div>
  );
}
