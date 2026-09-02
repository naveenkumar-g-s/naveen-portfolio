import "./About.css";

function About() {
    return (
        <section id="about" className="about-section">
            <h2>About Me</h2>

            <div className="about-content">
                <figure className="profile-picture">
                    <img
                        src="/images/profile.jpg"
                        alt="Profile picture"
                        width="200"
                    />

                    <figcaption>Naveen Kumar G S</figcaption>
                </figure>

                <div className="about-text">
                    <p>I am a student currently learning web development and exploring technologies like HTML, CSS, JavaScript, and React. I enjoy creating simple and interactive websites and improving my skills by working on different projects.</p>
                </div>
            </div>
        </section>
    );
}

export default About;
