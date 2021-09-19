import { useContext, createContext, useState } from "react";

import Button from "@material-ui/core/Button";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Toolbar } from "@material-ui/core";

const styles = makeStyles((theme) => ({
  bar: {
    marginTop: "0px",
  },
  line: {
    height: "5px",
    backgroundColor: "	#C0C0C0",
  },
  link: {
    textDecoration: "none",
  },
}));

const themes = {
  light: {
    background: "#ffecbf",
    color: "#330852",
  },
  dark: {
    background: "#4a3131",
    color: "white",
  },
};

const ThemeContext = createContext();

export default function Footer() {
  const classes = styles();
  const [valueTheme, setValueTheme] = useState(themes.dark);
  const theme = useContext(ThemeContext);
  return (
    <ThemeContext.Provider value={valueTheme}>
      <div style={{ backgroundColor: valueTheme.background }}>
        <Toolbar position="sticky" className={classes.bar}>
          <div>
            <Button className={classes.btn}>
              <Link
                to="/"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                HOME
              </Link>
            </Button>

            <Button>
              <Link
                to="/vapor"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                VAPE
              </Link>
            </Button>

            <Button>
              <Link
                to="/liquid"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold" }}
              >
                LIQUID
              </Link>
            </Button>
            <Button
              style={{ color: valueTheme.color, fontWeight: "bold" }}
              className="Button"
              onClick={() =>
                setValueTheme(
                  valueTheme === themes.light ? themes.dark : themes.light
                )
              }
            >
              GANTI WARNA
            </Button>
            <Button>
              <Link
                to="/bayar"
                className={classes.link}
                style={{ color: valueTheme.color, fontWeight: "bold", marginLeft: "1000px" }}
              >
                BAYAR
              </Link>
            </Button>
          </div>
        </Toolbar>
        <div className={classes.line}></div>
      </div>
    </ThemeContext.Provider>
  );
}
