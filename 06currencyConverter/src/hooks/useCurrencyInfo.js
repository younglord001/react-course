import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [currencyData, setCurrencyData] = useState({});
   useEffect(() => {
     fetch(`https://open.er-api.com/v6/latest/${currency}`)
       .then((response) => response.json())
       .then((data) => setCurrencyData(data['rates']));
   }, [currency])
   return currencyData;
}

export default useCurrencyInfo;