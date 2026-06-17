import photo from "../objects/CoverPhoto.png";

function HeroSection() {
  return (
    <main className="heroMid">
      <div className="heroText">
        <section className="heroMid-left">
          <h2 className="heroMid-Intro">Hi! I'm Lourd Allen Amante</h2>
          <span className="highlight">
            Incoming 3rd Year IT student & Aspiring Back-end Developer
          </span>
          <p className="heroMid-desc">
            IT student from New Era University who have experience building web
            applications. Currently exploring both frontend and backend
            development.
          </p>
        </section>
        <div className="heroMid-right">
          <img src={photo} />
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
