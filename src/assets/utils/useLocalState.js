import React from "react";

function useLocalState(defaultValue, key) {
    const [value, setValue] = React.useState(() => {
        const localStorageValue = window.localStorage.getItem(key);
        
        if(localStorageValue != null){
            return JSON.parse(localStorageValue)
        }
        else{
            return defaultValue;
        }
    });

    React.useEffect(()=> {
        window.localStorage.setItem(key, JSON.stringify(value));
     }, [key, value]);

     console.log("value", value)
     return [value,setValue];
    }

export {useLocalState};