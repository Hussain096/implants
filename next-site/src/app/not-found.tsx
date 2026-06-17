import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="container">
        <span className="section-label">404</span>
        <h1>This page is not in the patient library.</h1>
        <p>
          The URL may have changed, or the planned guide may not be published
          yet.
        </p>
        <Link className="button button--primary" href="/">
          Return to the homepage
        </Link>
      </div>
    </section>
  );
}
