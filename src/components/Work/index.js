import { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import image1 from "../../assets/images/analitico.png";
import image2 from "../../assets/images/first.png";
export const Work = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={[
                "M",
                "y",
                " ",
                "W",
                "o",
                "r",
                "k",
                " ",
                "E",
                "x",
                "p",
                "e",
                "r",
                "i",
                "e",
                "n",
                "c",
                "e",
              ]}
              idx={15}
            />
          </h1>
          <p>Aqui Algunos de los trabajos que he realizado:</p>
        </div>
        <div className="work-wrap">
          <div className="text-zone1">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["Analitico", "  ", "Vegetales"]}
                idx={15}
              />
            </h1>
            <div>
            <a href=" https://github.com/AnaliticoVegetales/Frontend" target = "_blank" rel="noreferrer">
              <img
                className="igual-relacion"
                src={image1}
                alt="Analitico"
              ></img>
              </a>
              
            </div>
            <br/>
            
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={["First", "  ", "Solution"]}
                idx={15}
              />
            </h1>
            <div>
              <a href="https://dry-sierra-51774.herokuapp.com" target = "_blank" rel="noreferrer">
              <img
                className="relacion"
                src={image2}
                alt="Analitico"
              ></img>
              </a>
            </div>
          </div>
          
        </div>
      </div>
      <Loader type="pacman" />
    </>
  );
};
