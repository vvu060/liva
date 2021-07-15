import { Link, useHistory } from "react-router-dom";
import Logo from "../logo/Logo";
import SearchBar from "../searchbar/SearchBar";
import style from "./Header.module.scss";
import { Avatar, Badge, Button } from "@material-ui/core";
import { ShoppingCart, History, Search } from "@material-ui/icons/";
import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../redux/features/sidebar/sidebarSlice";
import { selectUserPhoto } from "../../redux/features/user/userSlice";
import { selectCartItems } from "../../redux/features/cart/cartSlice";

const Header = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const cartItems = useSelector(selectCartItems);
  const userPhoto = useSelector(selectUserPhoto);
  const cartId = localStorage.getItem("cartId");

  const showSidebar = () => {
    dispatch(openSidebar({ sidebar: true }));
  };

  return (
    <header data-test="component-header" className={style.header}>
      <div className="container">
        <div className={`row ${style.header__row}`}>
          <Link to="/">
            <Logo width={125} alt="Liva Logo" className={style.header__logo} />
          </Link>

          <div className={`col-xs-3 ${style.header__search}`}>
            <SearchBar />
          </div>

          <div>
            <div data-test="header-icons" className={style.header__right}>
              <Button>
                <Badge
                  badgeContent={cartItems && cartItems.length}
                  color="secondary"
                >
                  <ShoppingCart
                    data-test="cart-icon"
                    className={style.header__icon}
                    onClick={() => history.push("/cart")}
                  />
                </Badge>
              </Button>

              <Button>
                <History
                  data-test="history-icon"
                  className={style.header__icon}
                  onClick={() => history.push("/orders")}
                />
              </Button>

              <Avatar
                data-test="avatar"
                src={userPhoto}
                className={style.header__icon}
                onClick={showSidebar}
              />
            </div>
          </div>
        </div>

        <div className={style.header__searchMob}>
          <SearchBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
