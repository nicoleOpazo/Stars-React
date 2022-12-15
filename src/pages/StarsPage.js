import {ButtonComponent, CreateStarComponent, ShowStarComponent }from "../components";
import "../assets/Styles.css";
import { useNavigate } from "react-router-dom";
import React, {useCallback, useState} from "react";

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


const StarsPage = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/#inicio", {}, [navigate]));

    //STATE PARA ESTRELLA
    const [state, setState] = useState(star1);

    //BORRAR ESTRELLA
    const starDelete = (codeStar) => {
        const changeStar = state.filter(star => star.code != codeStar);
        setState(changeStar);
    }


    //STATE PARA EDITAR UNA ESTRELLA
    const [starEditada, setStarEditada] = useState(null);
    
    //EDITAR UNA ESTRELLA
    const starEdit = (starEditada) => {
        const editStar = state.map(star => (star.code === starEditada.code ? starEditada : star));
        setState(editStar);
    }

    return (
        <div>

            <div>
                <ShowStarComponent stars={state} starDelete={starDelete} setStarEditada={setStarEditada}/>
                
            </div>
            
        </div>
    );
};
export default StarsPage;
