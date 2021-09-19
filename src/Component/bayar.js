import React, { Fragment } from "react";

class Bayar extends React.Component {

  constructor(props) {
    super(props);
    this.handleChangeStuff = this.handleChangeStuff.bind(this);
    this.state = {
      vape: [
        ["Mod R233", 490],
        ["Drag 3 Mod", 450],
        ["Vaporesso XROS Pod Kit 800mAh", 175],
        ["HQD Cuvie Pod", 45],
        ["VOOPOO VINCI POD KIT 800MAH", 228],
        ["POOD ARTERY MT 4", 95],
        ["RELX Bundle Infinity Gold", 350],
      ],
      liquid: [
        ["OAT FLAKES 100ML", 130],
        ["LIQUID AMERICAN BREAKFAST 100ML", 170],
        ["Liquids Freebase Liquid Bomber", 30],
        ["Grape Mint 3mg 30ml freebase", 35],
        ["Liquid LCV Milky Mo Banana 60ML", 50],
        ["Liquid Juta Sundae Vanilla Raisin 100ml", 97],
        ["MY DRIPS 0MG", 25],
        ["FIVE PAWNS NICSAL 99+ SERIES 15ML", 125],
      ],
      menu: {
        menu1: 0,
        menu2: 0,
      },
      totalTagihan: 0,
    };
  }

  handleCalculation = () => {
    const { menu1, menu2} = this.state.menu;
    var total = menu1 + menu2;
    this.setState({
      ...this.state.menu,
      totalTagihan: total,
    });
  };

  handleChangeStuff(e) {
    e.preventDefault();
    const { menu } = this.state;
    const { name } = e.target;
    var index = e.nativeEvent.target.selectedIndex;
    const { value } = e.nativeEvent.target[index];
    this.setState(
      {
        menu: {
          ...menu,
          [name]: Number(value),
        },
      },
      this.handleCalculation
    );
  }

  render() {
    const { liquid, vape, totalTagihan } = this.state;
    return (
      <>
        <div>
          <div style={{ height: "75%" }}>
            <div className="cashier-calculator">
              <div className="sarapan">
                <h2>Daftar Pesanan</h2>
                <br />
                <select
                  onChange={this.handleChangeStuff}
                  name="menu1"
                  style={{ cursor: "pointer" }}
                >
                  <option value="0">vape</option>
                  <Fragment>
                    {vape.map((vapor) => {
                      return <option value={vapor[1]}>{vapor[0]}</option>;
                    })}
                  </Fragment>
                </select>
                <br />
                <select
                  onChange={this.handleChangeStuff}
                  name="menu2"
                  style={{ cursor: "pointer" }}
                >
                  <option value="0">liquid</option>
                  <Fragment>
                    {liquid.map((vapor) => {
                      return <option value={vapor[1]}>{vapor[0]}</option>;
                    })}
                  </Fragment>
                </select>
                <br />
              
           
                <h5>Total Belanjaan: Rp {totalTagihan} K</h5>
              </div>
              <h2
                style={{
                  color: "#6e0234",
                  textAlign: "center",
                  flex: "1 0 100%",
                  margin: "auto",
                }}
              >
                Silakan Bayar: Rp {totalTagihan} K
              </h2>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Bayar;
