import { MdOutlineEmail } from "react-icons/md"

function Header() {
    return (
        <header className="intro">
            <h1 className="intro-hello">
                Hello! <span className="emoji wave-hand"></span>
            </h1>
            <h2 className="intro-tagline">
                I'm <span className="name">Naman Jha</span>, a full-stack developer who loves building clean, efficient, and user-friendly web apps. <span className="emoji technologist"></span>
            </h2>
            <a href="mailto:jhanaman786@gmail.com" target="_blank" className="email-button">Get in touch <MdOutlineEmail className="email-icon" /></a>
        </header>
    )
}

export default Header