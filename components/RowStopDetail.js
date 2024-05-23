/*
    RowStopDetail.js
    Autore: Lara Simonetti
    Utilità: questa componente è stata sviluppata per ...
    Utilizzo: per utilizzare questa componente è necessario includerla ...., 
passarle in argomento (props, ...) n dati nel formato yyyy
*/

import { View, Text } from "react-native";
import { stylesStops } from "../styles/globalStyles";

const RowStopDetail = (props) => {
    return (
        <View>
        {props.detail.stationboard && (
            <View>
                {props.detail.stationboard?.map((linee, index) => (
                    <View key={index} style={stylesStops.cardDetail}>
                        <Text style={stylesStops.lineeName}>Linea {linee.number}</Text>
                        <Text>Direzione: {linee.to}</Text>
                        <Text>Partenza: {linee.stop.departure}</Text>
                        {(!(linee.stop.delay == 0) && !(linee.stop.delay == null)) &&
                            <Text style={stylesStops.late}>Ritardo: {linee.stop.delay}</Text>
                        }
                    </View>
                ))}
            </View>
        )}
        </View>
    )
}

export default RowStopDetail;