import React, { useState, useEffect } from "react";
import style from "../styles/Home.module.css";
import Imgae from "next/image";
import person from "../img/person.png";
import slide from "../img/textSlide.png";
import java from "../img/javabigscreen.png";
import pp from "../img/ppbigscreen.png";
import hw from "../img/hwbgsc.png";

const BigScreen = ({ category }) => {
  const [img1, setImg1] = useState();
  const [img2, setImg2] = useState();

  useEffect(() => {
    if (category == "html") {
      setImg1(slide);
      setImg2(person);
    } else if (category == "java") {
      setImg1(java);
      setImg2(person);
    } else if (category == "pp") {
      setImg1(pp);
      setImg2(person);
    } else if (category == "hw") {
      setImg1(hw);
      setImg2(person);
    }
  }, []);
  return (
    <div className={style.homeScreen}>
      <img className="animate__animated animate__fadeInLeft" src={img1} />
      <img className="animate__animated animate__fadeInRight" src={img2} />
    </div>
  );
};

export default BigScreen;
