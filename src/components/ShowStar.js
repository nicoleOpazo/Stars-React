import React, { useCallback } from "react";
import "../assets/Styles.css";
import { CreateStarComponent, ButtonComponent, NavStarComponent } from "../components";
import { useNavigate } from "react-router-dom";
import { textAlign } from "@mui/system";


const ShowStarComponent = ({ stars, starDelete, setStarEditada }) => {
    const navigate = useNavigate();
    const handleOnClick = useCallback(() => navigate("/#inicio", {}, [navigate]));

    return (

        <div>

            {/*<div>
                <NavStarComponent />
            </div>

            */}

            <br></br>
            <h1 style={{color: 'white', textAlign: 'center'}} >Stars Info</h1>
            <br></br>


            <div class="card container-fluid" style={{ width: '30rem' }} >
                {/*<img src="..." class="card-img-top" alt="..." />*/}
                <div class="card-body">
                    <h5 class="card-title">Your Stars</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>

                    <table class="table table-success table-striped table-responsive">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Title</th>
                                <th scope="col">Classification</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                stars.map(star => (
                                    <tr>
                                        <td>{star.code}</td>
                                        <td>{star.title}</td>
                                        <td>{star.classification}</td>
                                        <td>
                                            
                                            <button
                                                type="button" class="btn btn-warning"
                                                onClick={() =>
                                                    setStarEditada(star)}>
                                                Edit
                                            </button>

                                            <button
                                                type="button" class="btn btn-danger"
                                                onClick={() =>
                                                    starDelete(star.code)}>
                                                Delete
                                            </button>

                                            
                                        </td>
                                    </tr>
                                ))

                            }
                        </tbody>
                    </table>
                </div>
            </div>

            <ButtonComponent infoButtom={'Go back to add another star'} handleOnClick={handleOnClick} />


        </div>
    );
};
export default ShowStarComponent;