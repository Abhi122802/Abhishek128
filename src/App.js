import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './Horror.css';

function App() {
  return (
    <div className="App">
      {/* Navigation Bar */}
      <nav className="navbar">
        <h1 className="logo">☠ My Portfolio ☠</h1>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Home Section */}
      <section id="home" className="home">
        <div className="hero">
          <h1 className="hero-title glitch blood-drip">Welcome to the Darkness</h1>
          <p className="hero-tagline">Abhishek Bubane</p>
          <button className="cta">Enter... If You Dare</button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about blood-border">
        <h2>About Me</h2>
        <p>
          I’m Abhishek Balasaheb Bubane, a passionate Full-Stack Developer with expertise in the MERN stack and Android app development using Kotlin. With a strong foundation in UI/UX design and cloud technologies, I specialize in building user-friendly and efficient digital solutions.

          Currently pursuing B.Tech in Electronics and Computer Engineering at Walchand Institute of Technology, Solapur, I have worked on diverse projects, including e-commerce platforms, AI-based applications, and real-time chat apps. My problem-solving skills and adaptability enable me to craft scalable and high-performing applications.

          Let’s connect and build something amazing together!
        </p>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="portfolio blood-border">
        <h2>My Cursed Creations</h2>
        <div className="projects">
          <a href="https://github.com/yourusername/phantom-code" target="_blank" rel="noopener noreferrer" className="project">
            <img src="https://cdn.pixabay.com/photo/2020/04/05/15/53/horror-5005581_960_720.jpg" alt="Phantom Code" />
            <h3>Phantom Code</h3>
            <p>A cursed script that haunts its creators...</p>
          </a>
          <a href="https://github.com/yourusername/dark-web-portal" target="_blank" rel="noopener noreferrer" className="project">
            <img src="https://cdn.pixabay.com/photo/2017/09/24/23/49/horror-2784081_960_720.jpg" alt="Dark Web Portal" />
            <h3>Dark Web Portal</h3>
            <p>An ominous gateway to digital terror...</p>
          </a>
          <a href="https://github.com/yourusername/glitch-realm" target="_blank" rel="noopener noreferrer" className="project">
            <img src="https://cdn.pixabay.com/photo/2018/05/22/08/40/skull-3420719_960_720.jpg" alt="Glitch Realm" />
            <h3>Glitch Realm</h3>
            <p>A distorted reality, full of unpredictable horror...</p>
          </a>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact blood-border">
        <h2>Summon Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send a Whisper</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="footer blood-border">
        <p>&copy; 2025 Abhishek - Beware of the Shadows</p>
      </footer>
    </div>
  );
}

export default App;

// React DOM Render
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
