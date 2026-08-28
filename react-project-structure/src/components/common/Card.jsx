export function Card({ title, description, image, children }) {
  return (
    <div className="card shadow-sm mb-4" style={{ width: "18rem" }}>
      {image && (
        <img
          src={image}
          className="card-img-top p-3"
          alt={title}
          style={{ height: "150px", objectFit: "contain" }}
        />
      )}
      <div className="card-body">
        {title && <h5 className="card-title font-weight-bold">{title}</h5>}
        {description && <p className="card-text text-muted">{description}</p>}
        {children}
      </div>
    </div>
  );
}
