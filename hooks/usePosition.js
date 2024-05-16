/*
usePosition.js
Autore: Joël Jon Moix
Utilità: Questo è l'hook che serve per ottenere la posizione dell'utente
Utilizzo: Importare l'hook nelle componenti che necessitano di ottenere la posizione dell'utente, ritorna un oggetto in cui si può navigare latitudine e longitudine
*/
import React, { useState, useEffect } from 'react';

import * as Location from 'expo-location';

const usePosition = () => {
    const [location, setLocation] = useState(null);
    const [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        (async () => {
            
            //chiedo il permesso di utilizzare la posizione del dispositivo
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMessage('Permesso per accedere alla posizione negato, ricontrollare i permessi');
                return;
            }
            const currentLocation = await Location.getCurrentPositionAsync();
            setLocation(currentLocation);
        })();
    }, []);
    
    //ritorno posizione e eventuale errore
    return { location, errorMessage };
};

export default usePosition;