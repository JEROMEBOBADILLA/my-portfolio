
import './stlye.css'

function App() {
  return (
    <div>
      <nav>
        <h2>MY PORTFOLIO</h2>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
      </nav>

      <section id="home" className="home">
        <h1>Jerome Bobadilla</h1>
        <h2>Future Web Developer</h2>
        <p>Welcome to my personal portfolio.</p>
        <a href="#about" className="btn">About Me</a>
      </section>

      <section id="about">
        <h2>About Me</h2>
        <p>
          I am a student who enjoys learning programming
          and creating websites. JUST A KID WITH A BIG DREAM
        </p>
      </section>

      <section id="skills">
        <h2>My Skills</h2>
        <p>HTML | CSS | JavaScript | React | Trying other language</p>
      </section>

      <section id="projects">
        <h2>My Projects</h2>
        <p>Student Directory</p>
        <p>Music Album</p>
        <p>Laundry Service System</p>
      </section>

      <footer>
        <p>My Portfolio | © 2026 Jerome</p>
      </footer>
    </div>
  );
}



export default App;
