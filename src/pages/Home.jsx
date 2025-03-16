import { Nav } from "../components/Nav";

export function Home() {
  return (
    <>
      <header role="banner">
        <Nav />
      </header>
      <main id="main-content" role="main">
        <section className="content-section">
          <h2 className="section-title"></h2>
          <p>내용을 변경해주세요</p>
        </section>
        <article className="content-aricle">
          <h2 className="aricle-title"></h2>
        </article>
      </main>
      <footer role="contentinfo"></footer>
    </>
  );
}
