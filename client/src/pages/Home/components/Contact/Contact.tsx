import React, { FunctionComponent, ReactElement } from "react";
import { useTranslation } from "react-i18next";
import RevealUp from "../../../../components/animations/RevealUp";
import me from "../../../../data/me";

const Contact: FunctionComponent = (): ReactElement => {
    const { t } = useTranslation(["home"]);

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
                <form action={`mailto:${me.mail}`} method="post" encType="text/plain">
                    <input type="text" name="name" placeholder={t("page./home.contact.form.name", "Name")} />
                    <textarea name="message" placeholder={t("page./home.contact.form.message", "Message")} />
                    <span className="animated">
                        <input type="submit" value={t("page./home.contact.form.send", "Send")} className="animated" />
                    </span>
                </form>
            </RevealUp> 
        </section>
    );
};

export default Contact;
