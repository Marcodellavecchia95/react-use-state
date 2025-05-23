export default function Button({ title, onClick, className }) {
  return (
    <li onClick={onClick}>
      <div className={className}>{title}</div>
    </li>
  );
}
