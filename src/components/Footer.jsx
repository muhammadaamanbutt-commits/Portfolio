function Footer() {
    return (
        <footer className="site-footer">
            <p className="footer-text footer-text-spacing">
                Designed and developed by{" "}
                <span className="footer-highlight"><strong>M. Aaman Butt</strong></span>.
            </p>

            <p className="footer-text">
                Built with <span className="footer-highlight">React</span>,{" "}
                <span className="footer-highlight">JavaScript</span>, and{" "}
                <span className="footer-highlight">Bootstrap CSS</span>. Deployed on{" "}
                <span className="footer-highlight">Vercel</span>.
            </p>

            <div className="footer-bottom">
                <span className="footer-copy">
                    © {new Date().getFullYear()} All Rights Reserved.
                </span>

                <div className="footer-links">
                    <a href="#about" className="footer-link">Top</a>
                </div>
            </div>
        </footer>

    )
}

export default Footer