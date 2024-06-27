import React from "react";
import { ClipLoader } from "react-spinners";

const override = {
    display: "flex",
    margin: "0 auto",
    textAlign: "center",
};

const Spinner = ({ loading }) => {
    return (
        <ClipLoader
            color="#303DDD"
            loading={loading}
            cssOverride={override}
            size={60}
        />
    );
};

export default Spinner;