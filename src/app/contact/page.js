import styles from './page.module.css';

const ContactPage = () => (

    <div className={styles.contactPage}>
        <h2>Contact Me</h2>
        <div className={styles.formRow}>
            <label htmlFor="contactName">
                Name
            </label>
            <input name="contactName" type="text" />
        </div>
        <div className={styles.formRow}>
            <label htmlFor="mail">
                Mail Add
            </label>
            <input name="mail" type="text" />
        </div>
        <div className={styles.formRow}>
            <label htmlFor="message">
                Message
            </label>
            <input name="message" type="textarea" />
        </div>
        <button type="submit" className={styles.submit}>Submit</button>
    </div>
);

export default ContactPage;