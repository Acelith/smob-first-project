/*
    StopDetail.js
    Autore: Lara Simonetti
    Utilità: questa componente è stata sviluppata per ...
    Utilizzo: per utilizzare questa componente è necessario includerla ...., 
passarle in argomento (props, ...) n dati nel formato yyyy
*/

import { useEffect } from "react";

const API_DETAIL = "http://transport.opendata.ch/v1/stationboard";



const StopDetail = (props) => {
    const [stopData, setStopData] = useState();

    useEffect(() => {
        const fetchStopDetailData = async () => {
            const response = await fetch(`${API_DETAIL}?id=${props.station.id}`);
            const data = await response.json();
            setStopData(data);
        };
        fetchStopDetailData();
    }, []);

    return (
        <div>
            <h1>{props.stopData.name}</h1>
            <p>{props.stopData.description}</p>
        </div>
    )
}

export default StopDetail;