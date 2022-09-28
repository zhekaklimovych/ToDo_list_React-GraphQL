import {useState, useEffect} from "react";
import {gql, useSubscription, useMutation, useQuery} from "@apollo/client";

const initialState = {name: "", description: ""};

const App = () => {
    return(
        <h1>Apollo</h1>
    )
};

export default App;