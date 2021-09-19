import { useContext, createContext, useState } from "react";
import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import vapeImage from "./images/vape.png";
import liquidImage from "./images/liquid.png";

const styles = makeStyles((theme) => ({
  menu: {
    display: "flex",
  },
  vape: {
    margin: "auto",
    marginBottom: "20px",
    textAlign: "center",
  },
  container:{
    marginTop:"0px"
  }
}));
const themes = {
  light: {
    background: "#d46a6a",
    color: "#330852",
  },
  dark: {
    background: "#575256",
    color: "white",
  },
};
const ThemeContext = createContext();

export default function Header() {
  const classes = styles();
  const [valueInput, setValueInput] = useState({
    name: "",
  });

  const handleIdPembelian = (event, type) => {
    if (type === "name") {
      setValueInput((prevState) => {
        return { ...prevState, name: event.target.value };
      });
    }
  };
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background }}>
        <div className="container">
            <Button
                style={{ color: valueTheme.color, fontWeight: "bold" }}
                className="Button"
                onClick={() =>
                  setValueTheme(
                    valueTheme === themes.light ? themes.dark : themes.light
                  )
                }
              >
                GANTI LATAR
              </Button>
            <h3  style={{ color: valueTheme.color, fontWeight: "bold" }}>
            <center><h1> VAPE STORE {valueInput.name}</h1> </center>
            </h3>
          </div>
          <div className={classes.menu}>
            <div className={classes.vape}>
              <h3  style={{ color: valueTheme.color, fontWeight: "bold" }}>VAPE</h3>
              <Link to="/vapor" className={classes.link}>
                <img src={vapeImage} style={{ height: "300px" }} />
              </Link>
            </div>
            <div className={classes.vape}>
              <h3  style={{ color: valueTheme.color, fontWeight: "bold" }}>LIQUID</h3>
              <Link to="/minuman" className={classes.link}>
                <img src={liquidImage} style={{ height: "300px" }} />
              </Link>
            </div>
          </div>
          <h3>
            <center style={{ marginBottom: "90px", marginTop: "50px",  color: valueTheme.color }}>
              TOKO KELOMPOK 4
            </center>
          </h3>
      </div>
    </ThemeContext.Provider>
  );
}
