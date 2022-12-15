import React, { useState} from "react";
import "../assets/Styles.css"

const initialStar = {
    code: "",
    title: "",
    classification: ""
}

const CreateStarComponent = ({starAdd}) => {
    //STATE
    const [star, setStar] = useState(initialStar);

    const { code, title, classification } = star;

    const handleInputChange = (e) => {
        const changedForValue = {
            ...star,
            [e.target.name]: e.target.value
        }
        setStar(changedForValue);
    }


    return (

        <form>

            <div class="row mb-3">
                <label for="inputCode" class="col-sm-2 col-form-label">Star code</label>
                <div class="col-sm-10">
                    <input type="number" class="form-control" id="inputCode" name="code" value={code} onChange={handleInputChange}></input>
                </div>
            </div>
            <div class="row mb-3">
                <label for="inputTitle" class="col-sm-2 col-form-label">Title</label>
                <div class="col-sm-10">
                    <input type="text" class="form-control" id="inputTitle" name="title" value={title} onChange={handleInputChange}></input>
                </div>
            </div>
            <fieldset class="row mb-3">
                <legend class="col-form-label col-sm-2 pt-0">Classification</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="gridRadios1" name="classification" value={"O"} onChange={handleInputChange}></input>
                        <label class="form-check-label" for="gridRadios1">
                            O
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="gridRadios2" name="classification" value={"B"} onChange={handleInputChange}></input>
                        <label class="form-check-label" for="gridRadios2">
                            B
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="gridRadios3" name="classification" value={"A"} onChange={handleInputChange}></input>
                        <label class="form-check-label" for="gridRadios3">
                            A
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="gridRadios4" name="classification" value={"F"} onChange={handleInputChange}></input>
                        <label class="form-check-label" for="gridRadios4">
                            F
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="gridRadios5" name="classification" value={"G"} onChange={handleInputChange}></input>
                        <label class="form-check-label" for="gridRadios5">
                            G
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="gridRadios6" name="classification" value={"K"} onChange={handleInputChange}></input> {/*checked */}
                        <label class="form-check-label" for="gridRadios6">
                            K
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" id="gridRadios7" name="classification" value={"M"} onChange={handleInputChange}></input>
                        <label class="form-check-label" for="gridRadios7">
                            M
                        </label>
                    </div>

                    <br></br>

                    <button
                        type="button"
                        class="btn btn-success"
                        onClick={() => starAdd(star)}>
                        Create star
                    </button>

                </div>

            </fieldset>

            {/*<ButtonComponent infoButtom={'Create star'}/> 
            stars, starDelete, setStarEditada

            
        */}

        </form>



    );
};
export default CreateStarComponent;
/*
<br></br>

            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src="holder.js/100px180" />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                    <Button variant="primary">Go somewhere</Button>
                </Card.Body>
            </Card>

<br></br>
<div class="card" style="width: 18rem;">
    <img src="..." class="card-img-top" alt="..." />
    <div class="card-body">
        <h5 class="card-title">Card title</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
</div>




<div class="mb-3">
<label for="formGroupExampleInput2" class="form-label">Another label</label>
<input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input placeholder"/>
</div>
*/