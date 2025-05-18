import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function StickySidebar() {
    return (
        <div className="sticky-sidebar section-scroll-animation">
            <div>
                <h1 className="name sidebar-name">Naman Jha</h1>
                <h3 className="sidebar-title">Web Developer</h3>
                <p className="sidebar-tagline">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>

            <div className="resume-container">
                <a href="" className="resume-link section-scroll-animation" target="_blank" rel="noopener noreferrer">
                    View my Résumé <FaArrowRight className='resume-arrow-icon' />
                </a>
            </div>

            <ul className="socials-container">
                <li><a className="link social-links" href="https://github.com/virtuallynaman/starward-budgets" target="_blank" rel="noopener noreferrer"><FaGithub className="react-icon" />GITHUB</a></li>
                <li><a className="link social-links" href="https://www.linkedin.com/in/namanjha/" target="_blank" rel="noopener noreferrer"><FaLinkedin className="react-icon" />LINKEDIN</a></li>
                <li><a className="link social-links" href="mailto:jhanaman786@gmail.com" target="_blank" rel="noopener noreferrer"><MdEmail className="react-icon" />EMAIL</a></li>
            </ul>
        </div>
    )
}

export default StickySidebar