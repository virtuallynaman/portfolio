import { FaGithub } from 'react-icons/fa';
import { LinkIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

function ScrollableContent() {
    return (
        <div className="scrollable-content main-scroll-animation" id='main'>
            <section id="about" className="section section-scroll-animation about">
                <h2 className="section-title about">About</h2>
                <p className="about-section-content">
                    I'm a full-stack web developer with a strong focus on building modern, and user-focused applications. I specialize in the PERN stack (PostgreSQL, Express.js, React, Node.js), and I'm constantly learning new tools and technologies to improve my craft. I enjoy solving real-world problems through clean code and a thoughtful design.
                    <br />
                    <br />
                    Outside of coding, I like listening to music, reading non-fiction books, and staying curious about how things work. I'm currently looking for opportunities where I can grow, contribute to impactful projects, and work with a passionate team.
                </p>
            </section>

            <section id="skills" className="section">
                <h2 className="section-title">Skills</h2>
                <div className="skill-section-container">
                    <div className="skill-category">
                        <div className="skill-category-title">
                            Languages
                        </div>
                        <ul>
                            <li className="skill-name">Java</li>
                            <li className="skill-name">JavaScript (ES6)</li>
                            <li className="skill-name">C</li>
                            <li className="skill-name">SQL</li>
                            <li className="skill-name">HTML</li>
                            <li className="skill-name">CSS</li>
                        </ul>
                    </div>
                    <div>
                        <div className="skill-category">
                            <div className="skill-category-title">
                                Frameworks
                            </div>
                            <ul>
                                <li className="skill-name">React</li>
                                <li className="skill-name">Node</li>
                                <li className="skill-name">Express</li>
                            </ul>
                        </div>
                        <div className="skill-category">
                            <div className="skill-category-title database-title">
                                Database
                            </div>
                            <ul>
                                <li className="skill-name">PostgreSQL</li>
                            </ul>
                        </div>
                    </div>
                    <div className="skill-category">
                        <div className="skill-category-title">
                            Tools
                        </div>
                        <ul>
                            <li className="skill-name">Git</li>
                            <li className="skill-name">Github</li>
                            <li className="skill-name">Postman</li>
                            <li className="skill-name">Chrome DevTools</li>
                            <li className="skill-name">Bash</li>
                            <li className="skill-name">Linux</li>
                        </ul>
                    </div>
                </div>
            </section>

            <section id="projects" className="section section-scroll-animation project-section">
                <h2 className="section-title">Projects</h2>
                <div className="project-section-content">
                    <div className="project section-scroll-animation">
                        <div className="project-title">
                            <a href="https://starward-budgets.vercel.app/" target='_blank' rel="noopener noreferrer" className='project-link'>Starward Budgets</a>
                            <ArrowUpRightIcon className='project-arrow-icon' />
                        </div>

                        <img src="/starward-budgets.png" className="project-demo" alt="Starward budgets project demo" />

                        <div className="project-description">
                            <ul>
                                <li>Developed a PERN-stack budgeting app that lets users create color-coded budgets, log expenses, and track total/spent/remaining amounts with live progress bars (React, Express, Node).</li>
                                <li>Designed relational tables for budgets & expenses using PostgreSQL and wrote optimized SQL queries for real-time aggregates.</li>
                                <li>Implemented JWT-based signup/login to secure personal finance data and deployed the app on Vercel.</li>
                            </ul>
                        </div>

                        <a className="link project-github-link" href="https://github.com/virtuallynaman/starward-budgets" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='react-icon' /> GITHUB <LinkIcon className='github-link-icon' />
                        </a>
                    </div>

                    <div className="project section-scroll-animation">
                        <div className="project-title">
                            <a href="https://starward-notes.vercel.app/" target='_blank' rel="noopener noreferrer" className='project-link'>Starward Notes</a> <ArrowUpRightIcon className='project-arrow-icon' />
                        </div>

                        <img src="/starward-notes.png" className="project-demo" alt="Starward notes project demo" />

                        <div className="project-description">
                            <ul>
                                <li>Created a web app for taking and organizing notes with autosave, pin/archive/trash, background‑color labels, and quick text search (React, Express, Node).</li>
                                <li>Designed a PostgreSQL schema to persist user notes and user accounts efficiently.</li>
                                <li>Implemented JWT‑based user authentication for signup/login security.</li>
                                <li>Wrote vanilla CSS for desktop UI (mobile layout in progress).</li>
                            </ul>
                        </div>

                        <a className="link project-github-link" href="https://github.com/virtuallynaman/starward-notes" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='react-icon' /> GITHUB <LinkIcon className='github-link-icon' />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ScrollableContent