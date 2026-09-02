import "./Hero.css";

function Hero() {
    const hour = new Date().getHours();

    let greeting;

    if (hour < 12) {
        greeting = "Good Morning";
    } else if (hour < 17) {
        greeting = "Good Afternoon";
    } else {
        greeting = "Good Evening";
    }

    return (
        <section className="hero" id="hero">
            <h1>{greeting}, NAVEEN KUMAR G S 👋</h1>

            <p>
                I'm a passionate web developer creating amazing web
                experiences.
            </p>

            <div className="hero-button">
                <a href="#contact" className="btn btn-primary">
                    Hire Me
                </a>

                <a href="#contact" className="btn btn-secondary">
                    Contact Me
                </a>
            </div>
        </section>
    );
}

export default Hero;
