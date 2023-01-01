import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      daftar: "Gulai Kambiang",
      makan: "Udang top Mantap is the Best",
      buah: this.props.buah, //parsing data dari props dan jadikan dia state
    };
    this.handlePesan = this.handlePesan.bind(this);
  }

  handlePesan(value) {
    alert("INI Halaman Handle Pesan");
    alert(value);
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
          <a href="/" onClick={() => this.handlePesan("Halo Ini Header")}>
            Halaman Header
          </a>
        </ul>
      </div>
    );
  }
}

export default Header;
