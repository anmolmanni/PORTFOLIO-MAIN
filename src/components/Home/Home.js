import React from 'react'

const Home = () => {
  return (
    <div>
         <section id="about" className="about-section">
        <h2>About Me</h2>
        <p>Welcome to my portfolio! I am a web developer with a passion for creating beautiful and functional websites.</p>
      </section>
      
      <section id="projects" className="projects-section">
        <h2>My Projects</h2>
        <div className="project">
          <h3>Project Title 1</h3>
          <p>Description of project 1.</p>
        </div>
        <div className="project">
          <h3>Project Title 2</h3>
          <p>Description of project 2.</p>
        </div>
        <div className="project">
          <h3>Project Title 3</h3>
          <p>Description of project 3.</p>
        </div>
      </section>
      
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <form>
          <label>Name:</label>
          <input type="text" name="name" required />
          <label>Email:</label>
          <input type="email" name="email" required />
          <label>Message:</label>
          <textarea name="message" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </div>
  )
}

export default Home