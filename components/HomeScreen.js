import HomeStyle from "../styles/Home.module.css";
import makima from "../img/wallpaper2.png";

const HomeScreen = () => {
  return (
    <div className={HomeStyle.homeScreen}>
      <img src={makima} />
    </div>
  );
};

export default HomeScreen;
