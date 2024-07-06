const apikey = process.env.REACT_APP_API_KEY;
export const getweather =  async () => {
    try{
        const response = await fetch( `${baseurl}v1/forecast.json?key=${apikey}`);
        return response.json();
    }
    catch(error){
        throw new Error(error.message)
    }
};