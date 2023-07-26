import React, { Component } from 'react'

class MenuKontak extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alamat: "Jl Permata Harbaindo H13 No 12",
            kontak: "082929695129",
        }
    }
    render() {
        return (
            <div>
                <center>

                    <h3>{this.state.alamat}</h3>
                    <h4>Kontak Kami {this.state.kontak}</h4>
                </center>
            </div>
        );
    }
}

export default MenuKontak;