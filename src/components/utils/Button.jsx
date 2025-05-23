export default function Button({ title, onClick }) {
  return (
    <li onClick={onClick}>
      <div className="btn btn-primary">{title}</div>
    </li>
  );
}
