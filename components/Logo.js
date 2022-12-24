import logo from "../img/logo.png";
import style from "../styles/logo.module.css";

const Logo = () => {
  return (
    <div className={style.logo}>
      <img src={logo} />
      <h1>WEDONTWANNATHINK</h1>
    </div>
  );
};

export default Logo;
