import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate, Link } from 'react-router-dom';


import Spinner from "react-bootstrap/Spinner";

const Person = (props) => {
    const { id } = useParams();
    const [personData, setPersonData] = useState(null);
    const [homePlanet, setHomePlanet] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setIsLoading(true);
        axios
            .get(`https://swapi.dev/api/people/${id}`)
            .then((response) => {
                setPersonData(response.data);
                axios.get(response.data.homeworld).then((planetResponse) => {
                    setHomePlanet(planetResponse.data);
                    console.log(planetResponse.data);
                    console.log(planetResponse.data.url.slice(21));
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }, [id, navigate]);
    //SpinnerForLoadig
    if (personData === null || homePlanet === null || isLoading) {
        return <Spinner animation="border" />;
    }

    return (
        <div>
            <h1>{personData.name}</h1>
            <p>
                <span style={{ fontWeight: 700 }}>Height: </span>
                {personData.height} cm
            </p>
            <p>
                <span style={{ fontWeight: 700 }}>Weight: </span>
                {personData.mass} kg
            </p>
            <p>
                <span style={{ fontWeight: 700 }}>Hair Color: </span>
                {personData.hair_color}
            </p>

            <p>
                <span style={{ fontWeight: 700 }}>Skin Color: </span>
                {personData.skin_color}
            </p>
            <p>

            </p>
        </div>
    );
};

export default Person;