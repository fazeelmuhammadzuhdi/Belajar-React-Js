import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "INI DATA BELUM BERUBAH",
      title1: "HALO DATA TITLE1",
    };

    this.ubahData = this.ubahData.bind(this);
  }

  //   cara1
  //   ubahData() {
  //     this.setState({
  //       title: "Ini data Sudah berubah bro",
  //     });
  //   }

  // cara2 menggunakan arrow function dan multiple state
  ubahData() {
    this.setState((state, props) => {
      return {
        title: state.title1,
        title1: state.title,
      };
    });
  }

  render() {
    return (
      <div>
        <h3>{this.state.title}</h3>
        <h2>{this.state.title1}</h2>
        <button onClick={this.ubahData}>UBAH DATA</button>
      </div>
    );
  }
}
export default Main;
