import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
 <div id="__next">
  <div className="nav-container">
    <div className="logo">
      <a href="/">Hardik's Portfolio</a>
      </div>
      <a href="" className="cta-btn">Resume</a>
      </div>
      <main>
        <div>
          <div className="hero-container">
            <img  srcSet="C:\Users\hardi\OneDrive\Desktop\'SAVE_20201020_010533.jpeg'   &amp;w=384&amp;q=75 1x, C:\Users\hardi\OneDrive\Desktop\'SAVE_20201020_010533.jpeg' &amp;w=640&amp;q=75 2x" src="C:\Users\hardi\OneDrive\Desktop\'SAVE_20201020_010533.jpeg' &amp;w=640&amp;q=75" width="300" height="300" decoding="async" data-nimg="1" className="profile-img" loading="lazy"></img>
              <div className="hero-text">
                <h1>Hey, I'm Hardik 👋</h1>
                <p>Student at Indian Institute of Technology,Kanpur. Pursuing Bachelor of Technology focused in Electrical Engineering</p><div className="social-icons">
                  <a href="https://twitter.com/Hads1408" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-twitter"></i></a>
                  <a href="https://github.com/hardik1408" aria-label="GitHub" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                  <a href="" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                  </div>
                  </div>
                  </div>
                  <div className="about-container">
                    <h2>About Me</h2>
                    <div className="flex-about">
                      <div className="about-text">
                        <p>As a developer, I have always been passionate about creating elegant and effective solutions to complex problems. I have a strong foundation in software development. I enjoy working on both the front-end and back-end of applications, and I am always looking for ways to optimize performance, improve user experience, and ensure the highest level of code quality.</p>
                        <p>Throughout my career, I have worked on a wide range of projects, from simple static websites to complex enterprise-level applications. I am experienced in working with a variety of development tools and frameworks, including React, Angular, Vue.js, Node.js, and Laravel. I am always eager to learn and explore new technologies, and I am constantly seeking out opportunities to improve my skills and knowledge.</p>
                        </div>
                        <div className="about-img">
                          <img srcSet="E8DGl2pXoAItDWT.jpg&amp;w=384&amp;q=75 1x, E8DGl2pXoAItDWT.jpg&amp;w=640&amp;q=75 2x" src="E8DGl2pXoAItDWT.jpg&amp;w=640&amp;q=75" width="300" height="500" decoding="async" data-nimg="1" className="profile-img" loading="lazy" ></img>
                            </div>
                            </div>
                            </div>
                            <div className="skills-container">
                              <h2>Skills</h2>
                              <div className="grid-skills">
                                <div className="skill-card html">
                                  <i className="fa-brands fa-html5 html-icon"></i>
                                  <p>HTML</p>
                                  </div>
                                  <div className="skill-card css">
                                    <i className="fa-brands fa-css3-alt css-icon"></i>
                                    <p>CSS</p>
                                    </div>
                                    <div className="skill-card js">
                                      <i className="fa-brands fa-js-square js-icon"></i>
                                      <p>JavaScript</p>
                                      </div>
                                      <div className="skill-card react">
                                        <i className="fa-brands fa-react react-icon"></i>
                                        <p>React</p>
                                        </div>
                                        <div className="skill-card node">
                                          <i className="fa-brands fa-node-js node-icon"></i>
                                          <p>Node</p>
                                          </div>
                                          <div className="skill-card python">
                                            <i className="fa-brands fa-python python-icon"></i>
                                            <p>Python</p>
                                            </div>
                                            </div>
                                            </div>
                                            <div className="projects-container">
                                              <h2>Achievements</h2>
                                              <div className="projects-grid">
                                                <div className="project-card">
                                                  <div className="project-header">
                                                      </div>
                                                      <h3>achievement #1</h3>
                                                      <p>blah blah blah blah blah</p>
                                                      </div>
                                                      <div className="project-card">
                                                        <div className="project-header">
                                                            </div>
                                                            <h3>achievement #2</h3>
                                                            <p>blah blah blah blah blah</p>
                                                            </div>
                                                            <div className="project-card">
                                                              <div className="project-header">
                                                                  </div>
                                                                  <h3>achievement #3</h3>
                                                                  <p>blah blah blah blah blah</p>
                                                                  </div>
                                                                  <div className="project-card">
                                                                    <div className="project-header">
                                                                          </div>
                                                                          <h3>achievement #4</h3>
                                                                          <p>blah blah blah blah blah</p>
                                                                          </div>
                                                                          <div className="project-card">
                                                                            <div className="project-header">
                                                                                  </div>
                                                                                  <h3>achievement #5</h3>
                                                                                  <p>blah blah blah blah blah</p>
                                                                                  </div>
                                                                                  </div>
                                                                                  </div>
                                                                                  <div className="contact-container">
                                                                                    <h2>Get In Touch</h2>
                                                                                    <p>If you want us to work together, have any question or want me to speak at your event, my inbox is always open. Whether just want to say hi, I'll try my best to get back to you! Cheers!</p>
                                                                                    <a href="mailto:hardikj22@iitk.ac.in" className="cta-btn">Say Hello</a>
                                                                                    </div>
                                                                                    </div>
                                                                                    </main>
                                                                                    <hr></hr>
                                                                                    <div className="footer-container">
                                                                                      <p>© Hardik's Portfolio</p>
                                                                                      <div className="social_icons"><a href="https://twitter.com/Hads1408" aria-label="Twitter" target="_blank" rel="noopener noreferrer">
                                                                                        <i className="fa-brands fa-twitter"></i></a>
                                                                                        <a href="https://github.com/hardik1408" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                                                                                          <i className="fa-brands fa-github"></i></a>
                                                                                          <a href="https://www.linkedin.com/in/olawanlejoel/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                                                                                            <i className="fa-brands fa-linkedin"></i></a>
                                                                                            </div>
                                                                                            </div>
                                                                                            </div>
 
  )
}
