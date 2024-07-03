import React, { useState, useEffect } from "react";
import { ClipLoader } from "react-spinners";

const override = {
    display: "flex",
    margin: "0 auto",
    textAlign: "center",
};

const Spinner = ({ loading }) => {
    const [size, setSize] = useState(Math.max(30, window.innerWidth * 0.05));

    useEffect(() => {
        const handleResize = () => {
            setSize(Math.max(30, window.innerWidth * 0.05));
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <ClipLoader
            color="#303DDD"
            loading={loading}
            cssOverride={override}
            size={size}
        />
    );
};

export default Spinner;