import React from "react";
import "./Works.css";

const workscard = [
  {
    id: 1,
    title: "Quiz Application",
    description:
      "Designed and developed a user-friendly quiz application with features for creating, deleting, and accessing quizzes live. Also includes an archive for quizzes and answers. Built using Flask, MySQL, and Jinja Templating.",
    link: "https://github.com/shabd-sahay/quizz_flask",
    backgroundImage: "url('../assets/cardback.jpg')",
  },
  {
    id: 2,
    title: "Covid Vaccine Project",
    description:
      "Created a dynamic website facilitating real-time updates on vaccination center availability, daily appointment records, and streamlined user-admin portals. The project is made using Flask, MySQL, and Jinja Templating.",
    link: "https://github.com/shabd-sahay/covid_vaccine_project",
    backgroundImage: "url('../assets/cardback.jpg')",
  },
  {
    id: 3,
    title: "Employee Management System",
    description:
      "Created an admin portal for overseeing organizations and employees. Added features for adding, removing, and updating records, ensuring smooth data management. Built with Django, MySQL, and Jinja Templating.",
    link: "https://github.com/shabd-sahay/employee_management_system",
    backgroundImage: "url('../assets/cardback.jpg')",
  },
  {
    id: 4,
    title: "Javascript Shooting Game",
    description:
      "A game made with pure javascript DOM manipulation in which we have different levels, difficulty increases on each level including sound effects and intermediate class animation",
    link: "https://github.com/shabd-sahay/project-game-terror",
    backgroundImage: "url('../assets/cardback.jpg')",
  },
  {
    id: 5,
    title: "Weather Widget",
    description:
      "A weather widget created with vite and react in which we get the weather of the live location",
    link: "https://github.com/shabd-sahay/weather-react",
    backgroundImage: "url('../assets/cardback.jpg')",
  },
  {
    id: 6,
    title: "Login-signup Using Flask",
    description:
      "A login and Sign-up page was created using flask and MySQL. It can check the repeated data, valid or invalid data. Tools used were VScode, MySQL Workbench and CMD as Admin",
    link: "https://github.com/shabd-sahay/flask_registration_page",
    backgroundImage: "url('../assets/cardback.jpg')",
  },
  {
    id: 7,
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
      <h1 className="fa workh1" style={{ textAlign: 'center' }}>PROJECTS</h1>
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

