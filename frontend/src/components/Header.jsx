import ContactButton from "./ContactButton"

function Header() {
    return (
        <header className="h-dvh flex flex-col justify-center p-10 md:ml-5 lg:ml-46 xl:ml-56 2xl:ml-72">
            <h1 className="text-4xl lg:mb-6">
                Hello! <span className="emoji wave-hand"></span>
            </h1>
            <p className="text-4xl leading-normal max-w-[700px] min-w-xs my-20">
                I'm <span className="font-semibold">Naman Jha</span>, a full-stack developer who loves building clean, efficient, and user-friendly web apps. <span className="emoji technologist"></span>
            </p>
            <ContactButton />
        </header>
    )
}

export default Header