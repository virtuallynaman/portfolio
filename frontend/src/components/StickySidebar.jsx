import { FaGithub, FaLinkedin, FaArrowRight } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function StickySidebar() {
    return (
        <div className="lg:sticky top-0 flex flex-col h-dvh gap-18 lg:mx-14 section-scroll-animation">
            <div>
                <h1 className="mt-52 text-5xl font-semibold">Naman Jha</h1>
                <h3 className="my-3 font-semibold text-xl">Web Developer</h3>
                <p className="w-72">I turn ideas into web applications using the PERN stack and beyond.</p>
            </div>

            <div className="flex items-center w-fit group">
                <a href="https://flowcv.com/resume/ti457sanpo" className="resume-link section-scroll-animation" target="_blank" rel="noopener noreferrer">
                    View my Résumé <FaArrowRight className='h-6 transition-transform duration-200 ease-in-out group-hover:translate-x-1.5' />
                </a>
            </div>

            <ul className="flex lg:flex-col gap-2">
                <li>
                    <a className="link flex gap-1.5" href="https://github.com/virtuallynaman" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="react-icon" />GITHUB
                    </a>
                </li>
                <li>
                    <a className="link flex gap-1.5" href="https://www.linkedin.com/in/namanjha/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="react-icon" />LINKEDIN
                    </a>
                </li>
                <li>
                    <a className="link flex gap-1.5" href="mailto:namanjhacs@gmail.com" target="_blank" rel="noopener noreferrer">
                        <MdEmail className="react-icon" />EMAIL
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default StickySidebar