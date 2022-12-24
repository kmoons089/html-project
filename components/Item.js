import articleStyles from "../styles/Article.module.css";
import Link from "next/link";
import style from "../styles/category.module.css";
import router from "next/router";

const Item = ({ item }) => {
  return (
    <a
      className={style.card}
      onClick={() => {
        router.push(`/${item.title}`, null, { shallow: false });
        console.log("click");
      }}
    >
      <img src={item.img}></img>
      <p>{item.name}</p>
    </a>
  );
};

export default Item;
