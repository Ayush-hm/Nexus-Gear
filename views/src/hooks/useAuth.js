import { useContext } from "react";
import AuthContext from "../context/AuthProvider";

const useAuth = () => {
    //const { auth } = useContext(AuthContext);
    //useDebugValue(auth, (auth) => (auth?.authenticated ? true : false));
    return useContext(AuthContext);
};

export default useAuth;
