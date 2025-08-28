import { useState, useEffect } from "react";
import { MdOutlineEmail, MdOutlineContentCopy, MdCheckCircle, MdCheck } from "react-icons/md"

export default function ContactButton() {
    const [hovered, setHovered] = useState(false);
    const [isTouch, setIsTouch] = useState(false);
    const [copied, setCopied] = useState(false);

    // Detect touch devices
    useEffect(() => {
        const handleTouch = () => setIsTouch(true);
        window.addEventListener("touchstart", handleTouch, { once: true });
        return () => window.removeEventListener("touchstart", handleTouch);
    }, []);

    const user = "namanjhacs";
    const domain = "gmail.com";
    const email = `${user}@${domain}`;

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => {
            setCopied(false);
        }, 1500);
    };

    return (
        <div
            className="flex items-center justify-center w-48 text-base text-[var(--btn-text-dark)] font-medium rounded-4xl cursor-pointer overflow-hidden bg-[var(--accent-transparent)] group"
            onMouseEnter={() => !isTouch && setHovered(true)}
            onMouseLeave={() => !isTouch && setHovered(false)}
        >
            {(!isTouch && !hovered) && <div className="p-4 text-xl cursor-pointer group-hover:bg-[var(--accent)]     transition-all duration-300 ease-in-out [animation-range:entry_0%_cover_20%]">Get in touch</div>}

            {(isTouch || hovered) && (
                <div className="flex w-full justify-evenly cursor-pointer group-hover:bg-[var(--accent)]     transition-all duration-300 ease-in-out [animation-range:entry_0%_cover_20%]">
                    <button
                        onClick={() => (window.location.href = `mailto:${email}`)}
                        className="py-4.5 flex w-full justify-center border-r-2 cursor-pointer outline-none"
                        title={!isTouch ? "Email" : ""}
                    >
                        <MdOutlineEmail className="h-6 w-6" />
                        {isTouch && <span>Email</span>}
                    </button>
                    <button
                        onClick={copyToClipboard}
                        className={`py-4.5 flex w-full justify-center cursor-pointer outline-none ${copied && "bg-green-600"}`}
                        title={!isTouch ? "Copy" : ""}
                    >
                        {copied ? <MdCheck className={`${isTouch ? "h-5.5" : "h-6"} w-6 pt-0.5`} /> : <MdOutlineContentCopy className={`${isTouch ? "h-5.5" : "h-6"} w-6 pt-0.5`} />}
                        {isTouch && <span>{copied ? "Copied" : "Copy"}</span>}
                    </button>
                </div>
            )}
        </div>
    )
}
