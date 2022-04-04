import React from "react";
import { NavLink } from "react-router-dom";

import "./card.css";

const Card = (props) => {
  const confirmDeleteHandler = async () => {
    // alert("élément suprrimé")
    // console.log("élément suprrimé")
    try {
      const response = await fetch(
        `${process.env.REACT_APP_BACKEND}/${props.route}/${props.oeuvre.id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if(response.ok){
        props.onDelete(props.oeuvre.id);
      }
      
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-container">
      <img alt="Oeuvre" className="image" src={props.oeuvre.imageUrl} />
      <h2>{props.oeuvre.titre}</h2>
      <p>
        {props.oeuvre.auteur} - {props.oeuvre.annee}
      </p>
      <div className="card-item__actions">
        <ul>
          <li>
            <button>
              <NavLink to={`/${props.route}/${props.oeuvre.id}`}>
                Editer
              </NavLink>
            </button>
          </li>
          <li>
            <button onClick={confirmDeleteHandler}>Supprimer</button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Card;
