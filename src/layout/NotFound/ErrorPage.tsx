import "./ErrorPage.css";

type ErrorPageProps = {
  code?: string;
  title?: string;
  message?: string;
};

export default function ErrorPage({
  code = "404",
  title = "Al parecer te has perdido.",
  message = "Esta página nunca existió o la han cambiado de lugar.",
}: ErrorPageProps) {
  return (
    <main className="error-container">
      <div className="error-card">
        <span className="badge">
          Error {code}
        </span>

        <h1>{title}</h1>

        <p>{message}</p>

        <a href="/" className="btn">
          Volver al inicio
        </a>
      </div>
    </main>
  );
}