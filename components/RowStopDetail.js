/*
    RowStopDetail.js
    Autore: Lara Simonetti
    Utilità: questa componente è stata sviluppata per ...
    Utilizzo: per utilizzare questa componente è necessario includerla ...., 
passarle in argomento (props, ...) n dati nel formato yyyy
*/

const RowStopDetail = (props) => {
    return (
        <div>
            <h1>{props.stopData.name}</h1>
            <p>{props.stopData.description}</p>
        </div>
    )
}

export default RowStopDetail;