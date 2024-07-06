import { getweather } from "../utils";
import { useState, useEffect } from "react";
export const useGetWeather = () =>{
    const [forecast, setForecast] = useState([]);
    const [errors, setErrors] = useState("");
    const [loading, setLoading] = useState(false);
    useEffect(() =>{
        const fetchData = async() => {
            try{
                setLoading(true)
                const response = await getweather();
                setForecast(response.forecast);
                setLoading(false)
            }
            catch(error){
                setErrors(`Error: ${error.message}`)
                setLoading(false)
            }
        }
        fetchData();
    }, [])
    return {forecast, loading, errors}
}