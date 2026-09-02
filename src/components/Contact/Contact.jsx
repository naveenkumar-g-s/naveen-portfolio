import { useState } from "react";
import "./Contact.css";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState("idle");

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((previous) => ({
            ...previous,
            [name]: value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        if (formData.message.trim().length < 10) {
            newErrors.message =
                "Message must be at least 10 characters";
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) {
            return;
        }

        setStatus("sending");

        await new Promise((resolve) =>
            setTimeout(resolve, 1500)
        );

        setStatus("sent");

        setFormData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

        setTimeout(() => {
            setStatus("idle");
        }, 3000);
    };

    return (
        <section id="contact" className="contact">
            <h2>Contact Me</h2>

            <form
                id="contact-form"
                onSubmit={handleSubmit}
            >
                <div className="form-group">
                    <label htmlFor="name">Your Name</label>

                    <input
                        type="text"
                        id="name"
                        name="name"
                        placeholder="FULL NAME"
                        value={formData.name}
                        onChange={handleChange}
                    />

                    {errors.name && (
                        <span className="error-msg">
                            {errors.name}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email</label>

                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="Email ID"
                        value={formData.email}
                        onChange={handleChange}
                    />

                    {errors.email && (
                        <span className="error-msg">
                            {errors.email}
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject</label>

                    <select
                        name="subject"
                        id="subject"
                        value={formData.subject}
                        onChange={handleChange}
                    >
                        <option value="">
                            Select an option
                        </option>
                        <option value="hire">HIRE</option>
                        <option value="collab">
                            Want to Collaborate
                        </option>
                        <option value="others">Others</option>
                    </select>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message</label>

                    <textarea
                        name="message"
                        id="message"
                        placeholder="Write your message"
                        value={formData.message}
                        onChange={handleChange}
                    ></textarea>

                    {errors.message && (
                        <span className="error-msg">
                            {errors.message}
                        </span>
                    )}
                </div>

                <button
                    type="submit"
                    id="submit"
                    disabled={status === "sending"}
                >
                    {status === "sending"
                        ? "Sending..."
                        : status === "sent"
                        ? "✅ Message sent"
                        : "SEND MESSAGE"}
                </button>
            </form>
        </section>
    );
}

export default Contact;
