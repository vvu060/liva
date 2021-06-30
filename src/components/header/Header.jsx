import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import style from "./Header.module.scss";
import { Avatar } from "@material-ui/core";
import { ShoppingCart, Notifications, Person } from "@material-ui/icons/";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../redux/features/sidebar/sidebarSlice";
import { selectUserPhoto } from "../../redux/features/user/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const userPhoto = useSelector(selectUserPhoto);
  const showSidebar = () => {
    dispatch(openSidebar({ sidebar: true }));
  };

  console.log(userPhoto && userPhoto);

  return (
    <header className={style.header}>
      <div className="container">
        <div className={`row ${style.header__row}`}>
          <Link to="/">
            <Logo width={125} alt="Liva Logo" className={style.header__logo} />
          </Link>
          <div className="col-5">
            <SearchBar />
          </div>
          <div>
            <div className="list-inline">
              <button
                onClick={showSidebar}
                className={`btn ${style.header__btn}`}
              >
                <ShoppingCart />
              </button>
              <button className={`btn ${style.header__btn}`}>
                <Notifications />
              </button>
              <button
                onClick={showSidebar}
                className={`btn ${style.header__btn}`}
              >
                <Avatar src={userPhoto} />
              </button>

              <li></li>
              <li></li>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
