import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchRandomGreeting} from "../redux/greetings";

function Greeting(){
    const random_greetings = useSelector((state) => state.message);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchRandomGreeting());
    },[dispatch]);

    return(
        <div>
            <h1>Greetings</h1>
            <h3>{random_greetings}</h3>
        </div>
    );
}
export default Greeting;