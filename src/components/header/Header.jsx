import { Link } from "react-router-dom";
import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import style from "./Header.module.scss";
import { Avatar, Badge } from "@material-ui/core";
import { ShoppingCart, History } from "@material-ui/icons/";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../redux/features/sidebar/sidebarSlice";
import { selectUserPhoto } from "../../redux/features/user/userSlice";
import { selectCartItems } from "../../redux/features/cart/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const userPhoto = useSelector(selectUserPhoto);
  const showSidebar = () => {
    dispatch(openSidebar({ sidebar: true }));
  };

  console.log(cartItems);

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
              <Link to="/cart">
                <button className={`btn ${style.header__btn}`}>
                  <Badge
                    badgeContent={cartItems && cartItems.length}
                    color="secondary"
                  >
                    <ShoppingCart />
                  </Badge>
                </button>
              </Link>
              <Link to="/orders">
                <button className={`btn ${style.header__btn}`}>
                  <History />
                </button>
              </Link>
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
