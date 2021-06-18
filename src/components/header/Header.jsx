import Logo from "../logo/Logo"
import style from './Header.module.scss';
const Header = () =>{
    return(
        <header className={style.header}>
            <div className="container">
            <Logo width={125} alt="Liva Logo" />
            </div>
        </header>
    )
}

export default Header