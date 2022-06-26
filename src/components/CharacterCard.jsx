import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCharacterFav, removeCharacterFav } from '../redux/slices/Character.slice'; 
import { setFilmFav, removeFilmFav } from '../redux/slices/Film.slice';
import { setPlanetFav, removePlanetFav } from '../redux/slices/Planet.slice';
import { setVehicleFav, removeVehicleFav } from '../redux/slices/Vehicle.slice';
import { setStarshipFav, removeStarshipFav } from '../redux/slices/Starship.slice';

const CharacterCard = () => {
    return (
        <div>CharacterCard</div>
    )
}

export default CharacterCard;