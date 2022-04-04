import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import SearchBox from "../search-box/search-box";
import CardList from "../card-list/card-list";

import "./items.css";

// let musiques = [
//     {
//         id: "1",
//         auteur: "Daft Punk",
//         annee: 2013,
//         titre: "Get lucky",
//         imageUrl: "https://images-na.ssl-images-amazon.com/images/I/61cjEm5meDL._SL1500_.jpg"
//     },
//     {
//         id : "2",
//         auteur: "David Guetta ft Sia",
//         annee: 2011,
//         titre: "Titanium",
//         imageUrl: "https://images-eu.ssl-images-amazon.com/images/I/51cQ8TfyqJL._SX342_QL70_ML2_.jpg"
//     },
//     {
//         id : "3",
//         auteur: "Shaka Ponk",
//         annee: 2019,
//         titre: "Smells like teen spirits",
//         imageUrl: "https://i.ytimg.com/vi/MEecsZXQjCs/maxresdefault.jpg"
//     },
//     {
//         id : "4",
//         auteur: "Imagine Dragon",
//         annee: 2018,
//         titre: "Natural",
//         imageUrl: "https://i.pinimg.com/originals/9f/1e/58/9f1e58187a71ef80a06be9da1261ccfd.jpg"
//     }
// ]

const Musiques = () => {
  //Déclaration de la variable searchField en tant que STATE
  const [searchField, setSearchField] = useState("");
  const [searchFieldAuteur, setSearchFieldAuteur] = useState("");
  const [musiques, setMusiques] = useState([]);
  //autre exemple
  //const [maRecherche, setMaRecherche] = useState("ma valeur par défaut")

  useEffect(() => {
    fetch(`${process.env.REACT_APP_BACKEND}/musiques`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.status !== 200 && res.status !== 201) {
          throw new Error("Erreur de statut");
        }
        console.log({ res });
        return res.json();
      })
      .then((res) => {
        setMusiques(res.musiques);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSearchChange = (event) => {
    //Mise à jour de searchField
    setSearchField(event.target.value);
  };

  const onSearchAuteurChange = (event) => {
    //Mise à jour de searchField
    setSearchFieldAuteur(event.target.value);
  };

  //Filtre les éléments selon ce qui est saisie dans searchField
  const filteredMusiques = musiques.filter((musique) =>
    musique.titre.toLowerCase().includes(searchField.toLowerCase())
  );

  const filteredMusiquesBis = filteredMusiques.filter((musique) =>
    musique.auteur.toLowerCase().includes(searchFieldAuteur.toLowerCase())
  );

  const itemDeleteHandler = (deleteItemId) => {
    setMusiques((prevMusiques) =>
      prevMusiques.filter((musique) => musique.id !== deleteItemId)
    );
  };

  return (
    <div className="root-item">
      {/* Affichage de la SearchBox et passage de fonction de recherche onSearchChange à l'enfant */}
      <SearchBox onSearch={onSearchChange} message="Rechercher un titre" />
      <SearchBox
        onSearch={onSearchAuteurChange}
        message="Rechercher un auteur"
      />
      <button className="root-item__button">
        <Link to="/musique/new">Ajouter</Link>
      </button>

      {/* Affichage du CardList et passage de la liste filtrée des éléments */}
      <CardList
        oeuvres={filteredMusiquesBis}
        onDeleteItem={itemDeleteHandler}
        route="musiques"
      />
    </div>
  );
};

export default Musiques;
