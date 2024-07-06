import "./index.css";
const Interface = () => {
    return(
        <div>
            <h1>KNOW YOUR WEATHER PATTERN </h1>
            <br/> <br/> <br/> <br/>
            <div className="navbar">
                <hi>Rayn</hi>
                <input type='search' placeholder="Enter your city name" />
                <button>Search</button>
            </div>
            <div>
                <img src="public/images/weather.jpg" alt="clouds"/>
            </div>
        </div>
    )
}
export default Interface;