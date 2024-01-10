import "./style.scss"
import { Link } from 'react-router-dom'

// 1. Create a burger
// 2. Put the input checkbox onto the burger and make it invisible
// 3. Open the Nav-width div when the checkbox is checked

function Navigation(props) {

    return (
        <div className="nav-wrapper">
            <div className="logo">
                <h2>
                    <Link to={"/"}>
                        <img src="../../assets/src/brands.png" alt="" width={70} height={70} />
                    </Link>
                </h2>
            </div>

            <div className="menu">
                <div className="nav-links">
                    <Link to={"/about"}>О нас</Link>
                    <button onClick={"/teams"}>Команда</button>
                    <Link to={"/blog"}>Блог</Link>
                </div>

                <div className="auth">
                    <button className="warning-btn">
                        Войти
                    </button>
                    <a href="/#Рус">Рус</a>
                </div>
            </div>
        </div>
    );
}

export default Navigation;