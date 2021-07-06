import { Link, useHistory } from "react-router-dom";
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
  const history = useHistory();
  const cartItems = useSelector(selectCartItems);
  const userPhoto = useSelector(selectUserPhoto);

  const showSidebar = () => {
    dispatch(openSidebar({ sidebar: true }));
  };

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
            <div className={style.header__right}>
              <Badge
                badgeContent={cartItems && cartItems.length}
                color="secondary"
              >
                <ShoppingCart
                  className={style.header__icon}
                  onClick={() => history.push("/cart")}
                />
              </Badge>

              <History
                className={style.header__icon}
                onClick={() => history.push("/orders")}
              />

              <Avatar
                src={userPhoto}
                className={style.header__icon}
                onClick={showSidebar}
              />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
