import { Navigate } from "react-router-dom";

const Redirect = ({ newPath }) => {
    return (
        <>
            <Navigate to={newPath} replace={true} />
        </>
    );
};

export default Redirect;
