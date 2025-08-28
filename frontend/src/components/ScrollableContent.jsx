import { FaGithub } from 'react-icons/fa';
import { ArrowUpRightIcon } from '@heroicons/react/24/outline';

function ScrollableContent() {
    return (
        <div className="lg:mr-6 gap-12 content-center flex flex-col main-scroll-animation" id='main'> {/* mr, min-width for other screens */}
            <section id="about" className="section-scroll-animation">
                <h2 className="text-3xl">About</h2>
                <p className="text-xl">
                    I'm a full-stack web developer with a strong focus on building modern, and user-focused applications. I specialize in the PERN stack (PostgreSQL, Express.js, React, Node.js), and I'm constantly learning new tools and technologies to improve my craft. I enjoy solving real-world problems through clean code and a thoughtful design.
                    <br />
                    <br />
                    Outside of coding, I like listening to music, reading non-fiction books, and staying curious about how things work. I'm currently looking for opportunities where I can grow, contribute to impactful projects, and work with a passionate team.
                </p>
            </section>

            <section>
                <h2 className="text-3xl my-7">Skills</h2>
                <div className="flex justify-between mb-8">
                    <div>
                        <div className="text-xl uppercase font-bold mb-3.5">
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
                        <div>
                            <div className="text-xl uppercase font-bold mb-3.5">
                                Frameworks
                            </div>
                            <ul>
                                <li className="skill-name">React</li>
                                <li className="skill-name">Node</li>
                                <li className="skill-name">Express</li>
                            </ul>
                        </div>
                        <div>
                            <div className="text-xl uppercase font-bold mt-8 mb-1">
                                Database
                            </div>
                            <ul>
                                <li className="skill-name">PostgreSQL</li>
                            </ul>
                        </div>
                    </div>
                    <div>
                        <div className="text-xl uppercase font-bold mb-3.5">
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

            <section id="projects" className="mb-20 section-scroll-animation">
                <h2 className="text-3xl my-7">Projects</h2>
                <div className="flex flex-col gap-24">
                    <div className="section-scroll-animation">
                        <div className="text-2xl text-[var(--accent)] font-semibold flex items-center gap-1 cursor-pointer hover:text-[var(--text)] transition-colors duration-400 ease-in-out group">
                            <a href="https://starward-budgets.vercel.app/" target='_blank' rel="noopener noreferrer" className='project-link'>Starward Budgets</a>
                            <ArrowUpRightIcon className='h-6 stroke-3 transition-all duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--text)]' />
                        </div>

                        <img src="/starward-budgets.png" className="my-6" alt="Starward budgets project demo" />

                        <div className="text-xl project-description">
                            <ul className='flex flex-col gap-1.5'>
                                <li>Developed a budgeting app that lets users create budgets, log expenses, assign colors to label them, and track total, spent, and remaining balances with live progress bars (React, Express, Node).</li>
                                <li>Designed relational tables for budgets & expenses using PostgreSQL and wrote optimized SQL queries for real-time aggregates.</li>
                                <li>Implemented JWT-based signup/login to secure personal finance data and deployed the app on Vercel.</li>
                            </ul>
                        </div>

                        <a className="link flex gap-1.5 mt-6" href="https://github.com/virtuallynaman/starward-budgets" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='react-icon' /> GITHUB
                        </a>
                    </div>

                    <div className="section-scroll-animation">
                        <div className="text-2xl text-[var(--accent)] font-semibold flex items-center gap-1 cursor-pointer hover:text-[var(--text)] transition-colors duration-400 ease-in-out group">
                            <a href="https://starward-notes.vercel.app/" target='_blank' rel="noopener noreferrer" className='project-link'>Starward Notes</a> <ArrowUpRightIcon className='h-6 stroke-3 transition-all duration-200 ease-in-out group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--text)]' />
                        </div>

                        <img src="/starward-notes.png" className="my-6 mx-auto" alt="Starward notes project demo" />

                        <div className="text-xl project-description">
                            <ul className='flex flex-col gap-1.5'>
                                <li>Created a web app for taking and organizing notes with autosave, pin/archive/trash, background‑color labels, and quick text search (React, Express, Node).</li>
                                <li>Designed a PostgreSQL schema to persist user notes and user accounts efficiently.</li>
                                <li>Implemented JWT‑based user authentication for signup, login security.</li>
                                <li>Wrote vanilla CSS for desktop UI; mobile layout in progress.</li>
                            </ul>
                        </div>

                        <a className="link flex gap-1.5 mt-6" href="https://github.com/virtuallynaman/starward-notes" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='react-icon' /> GITHUB
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ScrollableContent