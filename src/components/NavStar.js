import React, { useCallback } from "react";
import "../assets/Styles.css";
import ButtonComponent from "./ButtonStar";
import { useNavigate } from "react-router-dom";

const NavStarComponent = () => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/stars", {}, [navigate]));

    return (

        <nav>
            <div class="navbar container-fluid">
                <a class="navbar-brand" href="#">
                    <img src="./sstar.png" alt="" class="starpng d-inline-block align-text-center"/>
                    Star Space Dashboard
                </a>

                <a>
                    <ButtonComponent infoButtom={'Look at your star'} handleOnClick={handleOnClick}/>
                </a>

            </div>
            
        </nav>


    );
};
export default NavStarComponent;

/*
navbar-light bg-light
*/