import React from "react";

const ButtonComponent = ({infoButtom, handleOnClick}) => {
    return (
        <div class=" container-fluid">

                <button  type="submit"
                class="btn btn-light"
                    onClick = {() => {
                        handleOnClick();
                    }}>
                {infoButtom}
                </button>

        </div>
    );
};
export default ButtonComponent;