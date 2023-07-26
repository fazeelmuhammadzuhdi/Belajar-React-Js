import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Gulai Kambiang",
      makan: "Udang top Mantap is the Best",
      inputValue: "",
      inputKota: "",
      buah: this.props.buah, //parsing data dari props dan jadikan dia state
    };
    this.handlePesan = this.handlePesan.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handlePesan(value, e) {
    e.preventDefault();
    alert("INI Halaman Handle Pesan");
    alert(value);
  }

  //event target value dan setstate
  handleChange(value, e) {
    // cara cepat dynamic method
    this.setState({ [value]: e.target.value });

    // cara panjang
    // const Event = e.target.value;
    // this.setState((state, props) => {
    //   return {
    //     inputValue: Event,
    //   };
    // });
    // console.log(e.target.value);
  }

  render() {
    return (
      <div>
        <h2>Makahan Khas Indonesia</h2>
        <ul type="square">
          <li>RENDANG</li>
          <li>AYAM</li>
          <li>TELOR</li>
          <li>{this.state.daftar}</li>
          <li>{this.state.makan}</li>
          <li>{this.state.buah}</li>
          <a href="/" onClick={(e) => this.handlePesan("Halo Ini Header", e)}>
            Halaman Header
          </a>
          <br />
          <br />
          <input
            type="text"
            value={this.state.inputValue}
            onChange={(e) => this.handleChange("inputValue", e)}
          />
          <br />
          <br />
          <input
            type="text"
            value={this.state.inputKota}
            onChange={(e) => this.handleChange("inputKota", e)}
          />
        </ul>
      </div>
    );
  }
}

export default Header;
