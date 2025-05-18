import { FaGithub } from 'react-icons/fa';
import { LinkIcon, ArrowUpRightIcon } from '@heroicons/react/24/outline';

function ScrollableContent() {
    return (
        <div className="scrollable-content main-scroll-animation" id='main'>
            <section id="about" className="section section-scroll-animation about">
                <h2 className="section-title about">About</h2>
                <p className="about-section-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, laboriosam molestias? Modi dignissimos minus, amet ratione distinctio quasi recusandae maiores perspiciatis quo natus tenetur et ex commodi laboriosam voluptates aspernatur?
                    <br />
                    <br />
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias cumque aut architecto optio fuga molestias nisi doloribus placeat deserunt libero voluptatum debitis labore, nesciunt, deleniti odit! Doloribus quam nisi nobis.
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
                            <a href="https://starward-budgets.vercel.app/" target='_blank' rel="noopener noreferrer" className='project-link'>Starward Budgets</a> <ArrowUpRightIcon className='project-arrow-icon' />
                        </div>

                        <img src="/starward-budgets.png" className="project-demo" alt="Starward budgets project demo" />

                        <div className="project-description">
                            Omnis laboriosam quod quasi inventore nobis quas itaque quidem a, animi sed saepe, officia aspernatur rem fuga molestiae blanditiis necessitatibus quisquam odit minima soluta qui? Placeat perspiciatis facere sit dignissimos?
                            Ab animi vitae corrupti culpa soluta velit ratione ad voluptas, esse placeat aliquam tempora? Modi dolorem eos quia cupiditate dolores at animi, alias quod corrupti nulla eaque quas rerum enim!
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
                            Omnis laboriosam quod quasi inventore nobis quas itaque quidem a, animi sed saepe, officia aspernatur rem fuga molestiae blanditiis necessitatibus quisquam odit minima soluta qui? Placeat perspiciatis facere sit dignissimos?
                            Ab animi vitae corrupti culpa soluta velit ratione ad voluptas, esse placeat aliquam tempora? Modi dolorem eos quia cupiditate dolores at animi, alias quod corrupti nulla eaque quas rerum enim!
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