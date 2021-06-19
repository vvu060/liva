import { Link } from "react-router-dom";
import Logo from "../logo/Logo"
import style from './Header.module.scss';
const Header = () =>{
    return(
        <header className={style.header}>
            <div className="container">
                <Link to="/">
                    <Logo width={125} alt="Liva Logo" />
                </Link>
            </div>
        </header>
    )
}

export default Header