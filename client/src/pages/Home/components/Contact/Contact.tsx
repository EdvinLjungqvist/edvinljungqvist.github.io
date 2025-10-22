import React, { FunctionComponent, ReactElement, useState } from "react";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/animations/RevealUp";

const Contact: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation(["home"]);
    const [form, setForm] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    return (
        <section id="contact" className="container normal-spacing compact-width">
            <RevealUp className="container small-spacing">
                <h2>
                    {t("page./home.contact.title", "Let's collaborate")}
                    </h2>
                <p>
                    {t("page./home.contact.description", "Feel free to reach out")}
                    </p>
            </RevealUp>
            <RevealUp>
                <form>
                    <input
                        type="text"
                        name="name"
                        placeholder={t("page./home.contact.form.name", "Name")}
                        value={form.name}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder={t("page./home.contact.form.email", "Email")}
                        value={form.email}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="message"
                        placeholder={t("page./home.contact.form.message", "Message")}
                        value={form.message}
                        onChange={handleChange}
                        required
                        rows={5}
                    />
                    <span className="animated">
                        <input
                            type="submit"
                            value={t("page./home.contact.form.send", "Send")}
                        />
                    </span>
                </form>
            </RevealUp>
        </section>
    );
};

export default Contact;
