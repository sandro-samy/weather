import "./bootstrap.min.css";
import "./App.css";
import Search from "./components/Search";
import { useState } from "react";
import Caption from "./components/Caption";

function App() {
  const [weather, setWeather] = useState({});
  const api = {
    key: "bfe445ea5e343503f962f03f6fad115d",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  return (
    <main className="main-container container">
      <div className="container p-5">
        <div className="row d-flex justify-content-center">
          <div className="col-12">
            <h1 className="text-center mb-4">Weather</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-center">
          <div className="col-12 d-flex flex-column  text-center justify-content-center">
            <Search api={api} setWeather={setWeather} />
            <Caption weather={weather} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
