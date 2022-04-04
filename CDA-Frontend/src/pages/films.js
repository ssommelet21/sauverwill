import React, { useState } from 'react'

import SearchBox from '../search-box/search-box'
import CardList from '../card-list/card-list'

import './items.css'

let films = [
    {
                id : 1,
                auteur: "Walt Disney",
                annee: 2019,
                titre: "Le roi lion",
                imageUrl: "https://static.lpnt.fr/images/2019/07/16/19108136lpw-19124527-embed-libre-jpg_6361494.jpg"
            },
            {
                id : 2,
                auteur: "JM Poiré",
                annee: 1993,
                titre: "Les Visiteurs",
                imageUrl: "https://img-4.linternaute.com/A6LpT1yY1z0TbLKubTGdv71SlGw=/820x546/smart/b088f1722e354d779ce7fe0fc0aab349/ccmcms-linternaute/11399217.jpg"
            },
            {
                id : 3,
                auteur: "Alain Chabat",
                annee: 2002,
                titre: "Astérix et Obélix : mission Cléopâtre",
                imageUrl: "https://i.ytimg.com/vi/7Nd1ZCwB5PI/maxresdefault.jpg"
            },
            {
                id : 5,
                auteur: "James Cameron",
                annee: 2009,
                titre: "Avatar",
                imageUrl: "https://m.media-amazon.com/images/M/MV5BMTcxOTk4NzkwOV5BMl5BanBnXkFtZTcwMDE3MTUzNA@@._V1_.jpg"
            },
            {
                id : 6,
                auteur: "C Colombus",
                annee: 2001,
                titre: "Harry Potter à l’école des sorciers",
                imageUrl: "https://vignette.wikia.nocookie.net/harrypotter/images/f/f1/Affichefilm_HP1.jpg/revision/latest?cb=20120819063135&path-prefix=fr"
            }
]

const Films = () => {
    const [searchField, setSearchField] = useState('')

const onSearchChange = event => {
    setSearchField(event.target.value)
}

const filteredFilms = films.filter(film => 
    film.titre.toLowerCase().includes(searchField.toLowerCase())  
    )
return(
    <div className="root-item" >
    <SearchBox onSearch={onSearchChange} message="Rechercher un titre" />
    <CardList oeuvres={filteredFilms} route="films" />
    </div>

)

}

export default Films;