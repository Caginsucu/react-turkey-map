import { useState } from "react";
import TurkeyMap from "turkey-map-react";
import coal from "./images/coal.png";
import antimony from "./images/antimony.png";
import iron from "./images/iron.png";
function App() {
  const [city, setCity] = useState("");
  const [img, setImg] = useState("");
  const [mine, setMine] = useState("");

  return (
    <div className="App">
      <div className="header-wrapper">
        <p className="city-p">{city}</p>
        <div>
          {img !== "" && (
            <div className="mine-wrapper">
              <img className="komur-png" src={img} alt={"komur"} />
              <span>{mine}</span>
            </div>
          )}
        </div>
      </div>
      <TurkeyMap
        customStyle={{ idleColor: "#444", hoverColor: "#dc3522" }}
        hoverable={true}
        onHover={({ name }) => {
          setCity(name);
          if (name === "Erzurum" || name === "Manisa") {
            setImg(coal);
            setMine("Kömür");
          } else if (name === "Kütahya") {
            setImg(antimony);
            setMine("Antimon");
          } else if (name === "Yozgat") {
            setImg(iron);
            setMine("Demir");
          } else {
            setImg("");
            setMine("");
          }
        }}
      />
    </div>
  );
}

export default App;
