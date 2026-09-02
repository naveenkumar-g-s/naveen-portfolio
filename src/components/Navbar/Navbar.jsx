import { useEffect, useState } from "react";
import "./Navbar.css";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") || "light"
    );

    useEffect(() => {
        document.body.dataset.theme = theme;
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
        );
    };

    const toggleMenu = () => {
        setMenuOpen((current) => !current);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <header className="site-header">
            <nav className="navbar">
                <div className="logo">GG</div>

                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li>
                        <a href="#about" onClick={closeMenu}>About</a>
                    </li>
                    <li>
                        <a href="#skills" onClick={closeMenu}>Skills</a>
                    </li>
                    <li>
                        <a href="#projects" onClick={closeMenu}>Projects</a>
                    </li>
                    <li>
                        <a href="#contact" onClick={closeMenu}>Contact</a>
                    </li>
                </ul>

                <div className="navbar-spacer"></div>

                <button
                    className="theme-toggle"
                    onClick={toggleTheme}
                    title={
                        theme === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                    aria-label={
                        theme === "dark"
                            ? "Switch to light mode"
                            : "Switch to dark mode"
                    }
                >
                    {theme === "dark" ? "☀️" : "🌙"}
                </button>

                <button
                    className="menu-toggle"
                    onClick={toggleMenu}
                    aria-label="Toggle navigation"
                    aria-expanded={menuOpen}
                >
                    ☰
                </button>
            </nav>
        </header>
    );
}

export default Navbar;
