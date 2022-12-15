import React, { useCallback, useState } from "react";
import "../assets/Styles.css";
import { CreateStarComponent, ButtonComponent, NavStarComponent, ShowStarComponent } from "../components";
import { useNavigate } from "react-router-dom";

const star1 = [
    {
        code: '1234',
        title:'Sirius',
        classification:'A'
    },
    {
        code: '5678',
        title:'Vega',
        classification:'K'
    },
    {
        code: '9101',
        title:'Alpha Gruis',
        classification:'K'
    }
    
]

const HomePage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/stars", {}, [navigate]));

    //STATE ESTRELLA
    const [state, setState] = useState(star1);

    //BORRAR ESTRELLA
    const starDelete = (codeStar) => {
        const changeStar = state.filter(star => star.code != codeStar);
        setState(changeStar);
    }

    //AGREGAR
    const starAdd = (star) => {
        const addStar = [
            ...state, star
        ];
        setState(addStar);
    }

    
    //STATE PARA EDITAR UNA ESTRELLA
    const [starEditada, setStarEditada] = useState(null);
    
    //EDITAR UNA ESTRELLA
    const starEdit = (starEditada) => {
        const editStar = state.map(star => (star.code === starEditada.code ? starEditada : star));
        setState(editStar);
    }
    


    return (
        <div id="inicio">
            <div>
                <NavStarComponent/>
            </div>

            <div class="starform">
                <CreateStarComponent starAdd={starAdd}/>
            </div>

            <div>

                <br></br>
                <ShowStarComponent stars={state} starDelete={starDelete} setStarEditada={setStarEditada}/>
                
                
            </div>


        </div>
    );
};
export default HomePage;