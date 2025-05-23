export default function CardGenerator({ title, description }) {
  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            {title || "Nessun linguaggio selezionato"}
          </h5>
          <p className="card-text">{description || ""}</p>
        </div>
      </div>
    </>
  );
}
