import style from "./BreadCrumb.module.scss";
import { Link, useLocation } from "react-router-dom";
const Breadcrumb = () => {
  const Location = useLocation();
  const URL = Location.pathname;
  const urlSplit = URL.split("/");
  return (
    <nav aria-level={"Breadcrumb"}>
      <ol className={style.breadcrumb}>
        {urlSplit.map((item, index, array) => (
          <li
            key={index}
            className={`${style.breadcrumb_item} ${
              index == array.length - 1 ? style.breadcrumb_active : ""
            }`}
          >
            {index == array.length - 1 ? (
              <Link to={`/${item}`} exact>
                {" "}
                {item == "" ? "home" : item}
              </Link>
            ) : (
              <Link to={`/${item}`} exact>
                {" "}
                {item == "" ? "home" : item}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
