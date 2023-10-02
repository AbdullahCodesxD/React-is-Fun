export default function App() {
  return (
    <>
      <MainHeading />
      <Cards />
      <About />
    </>
  );
}
function MainHeading() {
  return (
    <div className="container">
      <div className="bg-anim">
        <a href="#">
          <h1>
            black and white <br /> Website
          </h1>
        </a>
        <div className="line"></div>
      </div>
    </div>
  );
}
function Cards() {
  return (
    <section>
      <div className="container">
        <div className="cards">
          <Card
            src="https://images.unsplash.com/photo-1695918431822-871c78fac437?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            content="A person on a shore"
          />
          <Card
            src="https://images.unsplash.com/photo-1695572019304-f7d5e4699ba9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
            content="A person reading Book"
          />
          <Card
            src="https://images.unsplash.com/photo-1680010110973-bdb46bc66e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1364&q=80"
            content="A night sky"
          />

          <Card
            src="https://images.unsplash.com/photo-1694789309218-47c53005401f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            content="Person with a bike"
          />
          <Card
            src="https://images.unsplash.com/photo-1692317799958-fc7c8320a257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
            content="Person on a dirtbike"
          />
          <Card
            src="https://images.unsplash.com/photo-1695137301054-2ab66674c8a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1288&q=80"
            content="Black and white Paint"
          />
        </div>
      </div>
    </section>
  );
}
function Card({ src, content }) {
  return (
    <div className="card">
      <img src={src} alt="" />
      <h2>{content}</h2>
    </div>
  );
}
function About() {
  return (
    <section id="about">
      <div className="container">
        <div className="page">
          <h2>Why are we black and white</h2>
          <p>Scroll to find out</p>
        </div>
        <div className="page">
          <h2>We are black and white because it looks good and....</h2>
        </div>
        <div className="page">
          <h2>It feels Retro ....</h2>
        </div>
        <div className="page">
          <h2>It is the best color palete to exist</h2>
        </div>
        <div className="page">
          <h2>Byeeeeeeeeeeeeeeeeeeeeeeeee</h2>
        </div>
      </div>
    </section>
  );
}
