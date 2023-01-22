import React from "react";
import "./Header.css"

const Header = () => {

    /*==================== Change Background Header ====================*/
    window.addEventListener("scroll", function () {
        const scrollUp = document.querySelector(".header");
        if (this.scrollY >= 80) scrollUp.classList.add("scroll-header");
        else scrollUp.classList.remove("scroll-header");
    });



    /*==================== Toggle Menu ====================*/
    const[Toggle, showMenu] = React.useState(false);
    const[activeNav, setActiveNav] = React.useState("");


    return (
        <header className="header">
            <nav className="nav container">
                <a href="#analysis" className="nav__logo"><b>G</b>Soft</a>

                <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
                    <ul className="nav__list grid">
                        <li className="nav__item">
                            <a href="#analysis" onClick={ () => setActiveNav('#analysis')} className={activeNav === "#analysis" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-estate nav__icon"></i> Analysis
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#interns" onClick={ () => setActiveNav('#interns')} className={activeNav === "#interns" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-user nav__icon"></i> Interns
                            </a>
                        </li>

                        <li className="nav__item">
                            <a href="#forms" onClick={ () => setActiveNav('#forms')} className={activeNav === "#forms" ? "nav__link active-link" : "nav__link"}>
                                <i className="uil uil-file-alt nav__icon"></i> Survey
                            </a>
                        </li>
                    </ul>

                    <i className="uil uil-times nav__close" onClick={() => showMenu(!Toggle)}></i>
                </div>

                <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
                    <i className="uil uil-apps"></i>
                </div>
            </nav>
        </header>
    )
}

export default Header;