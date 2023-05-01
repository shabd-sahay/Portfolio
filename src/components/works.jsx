import React from "react";
import "./Works.css";

const workscard = [
  {
    id: 1,
    title: "Javascript Shooting Game",
    description:
      "A game made with pure javascript DOM manipulation in which we have different levels, difficulty increases on each level including sound effects and intermediate class animation",
    link: "https://github.com/shabd-sahay/project-game-terror",
    backgroundImage: "url('../assets/cardback.jpg')",
  },
  {
    id: 2,
    title: "Weather Widget",
    description:
      "A weather widget created with vite and react in which we get the weather of the live location",
    link: "https://github.com/shabd-sahay/weather-react",
    backgroundImage: "url('../assets/cardback.jpg')",
  },
  {
    id: 3,
    title: "Login-signup Using Flask",
    description:
      "A login and Sign-up page was created using flask and MySQL. It can check the repeated data, valid or invalid data. Tools used were VScode, MySQL Workbench and CMD as Admin",
    link: "https://github.com/shabd-sahay/flask_registration_page",
    backgroundImage: "url('../assets/cardback.jpg')",
  },
  {
    id: 4,
    title: "Todo List Using Flask",
    description:
      "A Todo list web application created using flask and MySQL. It can create, delete and show the todo items in or from the database. Tools used were VScode. MySQL Workbench and CMD as Admin",
    link: "https://github.com/shabd-sahay/todos_flask_mysql",
    backgroundImage: "url('../assets/cardback.jpg')",
  },
];

const Works = () => {
  return (
    <div className="Apps">
      <div className="card-container row">
        {workscard.map((card) => (
          <div key={card.id} className="col-lg-3 col-md-6 col-sm-12">
            <div
              className="card card-body wocard p-3 m-3"
              style={{ height: "250px" }}
            >
              <h3 className="fa">{card.title}</h3>
              <p>{card.description}</p>
              <a href={card.link} target="_blank" rel="noreferrer">
                Visit project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Works;

