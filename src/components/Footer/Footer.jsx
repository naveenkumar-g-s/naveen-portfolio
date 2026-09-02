import "./Footer.css";

function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="site-footer">
            <p>
                Email :{" "}
                <a href="mailto:naveen200703@gmail.com">
                    naveen200703@gmail.com
                </a>
            </p>

            <nav aria-label="Social links">
                <a
                    href="https://github.com/naveen200703-gs"
                    target="_blank"
                    rel="noreferrer"
                >
                    Github
                </a>

                <a href="#">
                    LinkedIn
                </a>

                <a href="mailto:naveen200703@gmail.com">
                    Gmail
                </a>
            </nav>

            <p id="copyright">
                &copy; {year} NAVEEN KUMAR G S | All rights reserved.
            </p>
        </footer>
    );
}

export default Footer;
