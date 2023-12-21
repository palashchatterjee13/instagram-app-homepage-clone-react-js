const Footer = ({ active }) => {
    return (
        <footer className="footer fixed-bottom">
            <div className="nav-item"><i className={(active === "home") ? "bi bi-house-fill" : "bi bi-house"}></i></div>
            <div className="nav-item"><i className="bi bi-search"></i></div>
            <div className="nav-item"><i className={(active === "reels") ? "bi bi-camera-reels-fill" : "bi bi-camera-reels"}></i></div>
            <div className="nav-item"><i className={(active === "chat") ? "bi bi-chat-quote-fill" : "bi bi-chat-quote"}></i></div>
            <div className="nav-item"><i className={(active === "profile") ? "bi bi-person-fill" : "bi bi-person"}></i></div>
        </footer>
    );
};

export default Footer;