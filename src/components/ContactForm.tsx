function ContactForm() {
    const accessKey = '225e16e0-d373-4864-ba56-ec20d4af8983';

    return (
        <form action="https://api.web3forms.com/submit" method="POST">

            <h3 className="text-center">Contact Me</h3>


            <input type="hidden" name="access_key" value={accessKey} />
            <input type="hidden" name="subject" value="New Submission from Portfolio" />

            <input name="full_name" type="text" placeholder="Enter your full name" required />
            <input name="email" type="email" placeholder="Enter your email address" required />
            <textarea name="message" placeholder="Tell me something" required></textarea>
            <button>Send</button>
        </form>
    )
}

export default ContactForm;