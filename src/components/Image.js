import React, { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div>
        <img src={this.props.linkgambar} width={this.props.lebar} alt="gambar" />
      </div>
    );
  }
}

export default Image;
