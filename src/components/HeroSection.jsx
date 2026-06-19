import photo from "../objects/CoverPhoto.png";

function HeroSection() {
  return (
    <main className="heroMid">
      <div className="heroText">
        <section className="heroMid-left">
          <h2 className="heroMid-Intro">Hi! I'm Lourd Allen Amante</h2>
          <span className="highlight">
            <button className="btn-subPrimary">JavaScript</button>
            <button className="btn-sub">Node.js</button>
            <button className="btn-sub">Express.js</button>
            <button className="btn-sub">MySql</button>
            <button className="btn-sub">Java</button>
          </span>
          <p className="heroMid-desc">
            IT student from New Era University, who has experience building web
            applications. Currently focused on building REST APIs,
            database-driven applications, and modern web solutions.
          </p>
          <div className="btnRow">
            <button className="btn-primary"> View my projects </button>
            <button className="btn-secondary"> Contact me </button>
          </div>
        </section>
        <div className="heroMid-right">
          <img src={photo} />
        </div>
      </div>
    </main>
  );
}

export default HeroSection;
