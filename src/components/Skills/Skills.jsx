import "./Skills.css";

function Skills() {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React"
    ];

    return (
        <section id="skills" className="skills-section">
            <h2>My Skills</h2>

            <div className="skills-grid">
                {skills.map((skill) => (
                    <div
                        className="skill-item"
                        key={skill}
                    >
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;
