import React from "react";
import proImg from "../assets/img/proImg.jpg";

const Card = () => {
  return (
    <>
      <div className="card">
        <img src={proImg} alt="Profile Img" className="card__img" />

        <div className="card__details">
          <p className="card__name">Arunav Singh</p>
          <p className="card__occupation">Web Developer</p>
          <ul className="card__icons">
            <li className="icon--1">Icon--1</li>
            <li className="icon--2">Icon--2</li>
            <li className="icon--3">Icon--3</li>
            <li className="icon--4">Icon--4</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Card;
