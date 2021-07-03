import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { Suspense, lazy, useEffect } from "react";
const Home = lazy(() => import("./pages/home/Home"));
const ProductListing = lazy(() =>
  import("./pages/product_listing/ProductListing")
);
const ProductDetail = lazy(() =>
  import("./pages/product_detail/ProductDetail")
);
const Login = lazy(() => import("./pages/login/Login"));
const Cart = lazy(() => import("./pages/cart/Cart"));
const Orders = lazy(() => import("./pages/orders/Orders"));
const Payment = lazy(() => import("./pages/payment/Payment"));
import { auth } from "./firebase";
import { useDispatch } from "react-redux";
import { login, logout } from "./redux/features/user/userSlice";

const Routes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log(authUser);
        const fullName = authUser.displayName.split(" ");
        const userData = {
          email: authUser.email,
          phone: authUser.phoneNumber,
          firstname: fullName[0],
          lastname: fullName.pop(),
          external_id: authUser.id,
          photoUrl: authUser.photoURL,
          userId: authUser.uid,
        };

        dispatch(login(userData));
      } else {
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, []);

  return (
    <Suspense fallback={<div>Loading</div>}>
      <Switch>
        <Route exact path="/orders" component={Orders} />
        <Route exact path="/payment" component={Payment} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/products/:id" component={ProductDetail} />
        <Route exact path="/products" component={ProductListing} />
        <Route exact path="/" component={Home} />
      </Switch>
    </Suspense>
  );
};
export default Routes;
