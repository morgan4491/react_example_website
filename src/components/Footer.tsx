function Footer() {
    const date = new Date();

    return (
        <footer>
            <p>&copy; Copyright {date.getFullYear()}</p>
            <p>Designed & Developed By Matt Morgan</p>
        </footer>
    )
}

export default Footer;