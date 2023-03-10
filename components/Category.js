import React, { useState, useEffect } from "react";
import CategoryStyle from "../styles/category.module.css";
import articleStyles from "../styles/Article.module.css";
import Item from "./Item";
import html from "../img/htmllogo.png";
import java from "../img/javalogo.png";
import pp from "../img/pplogo.png";
import ct from "../img/ctlogo.png";

const Category = () => {
  const [category, setCategory] = useState([
    {
      name: " HTML projects , you can do with your homies",
      img: html,
      title: "html",
    },
    {
      name: "JAVA projects , you can do with your depression",
      img: java,
      title: "java",
    },
    { name: "Tips for your power point presentation", img: pp, title: "pp" },
    {
      name: "Hardware Projects to do with your girlfriend",
      img: ct,
      title: "hw",
    },
  ]);

  return (
    <div className={articleStyles.category}>
      <h1 className="wow animate__animated animate__fadeInUp">
        What is your Project ?
      </h1>
      <div className={CategoryStyle.cards}>
        {category.map((item) => (
          <Item item={item} key={item.name} />
        ))}
      </div>
    </div>
  );
};

export default Category;
