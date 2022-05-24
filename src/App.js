import Counter from "./components/Counter";
import { useState } from "react";
import WeatherWidget from "./components/WeatherWidget";

function App() {
  const [theme, setTheme] = useState("light");
  const [unit, setUnit] = useState("C");

  const weather = [
    {
      city: "Barcelona",
      icon: "🟡",
      celsius: 29,
    },
    {
      city: "Miami",
      icon: "🟡",
      celsius: 40,
    },
    {
      city: "Oslo",
      icon: "🟡",
      celsius: 23,
    }
  ]
  

  const handleSelect = (event) => {
    setTheme(event.target.value);
  };

  const handleSelectTemp = (event) => {
    setUnit(event.target.value);
  };
  return (
    <div className={"App " + theme}>
      <h1>React - state and events</h1>
     {/* {/*  <Counter />   */}


      <select onChange={handleSelect}>
        <option value="light"> Light </option>
        <option value="dark"> Dark </option>
      </select>

      <select onChange={handleSelectTemp}>
        <option value="C"> °C </option>
        <option value="F"> °F </option>
      </select>

      <div>
        {weather.map(place => (
        <WeatherWidget  
        unit={unit}
        city={place.city}
        icon={place.icon}
        celsius={place.celsius}
         />))}

      </div>
    </div>
  );
}

export default App;
