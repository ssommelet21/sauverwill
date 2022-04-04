import React from "react";

import "./card-list.css";
import Card from "../card/card";

const CardList = (props) => (
  <div className="card-list">
    {props.oeuvres.map((o, i) => (
      <Card
        key={o.i}
        oeuvre={o}
        onDelete={props.onDeleteItem}
        route={props.route}
      />
    ))}
  </div>
);

export default CardList;
