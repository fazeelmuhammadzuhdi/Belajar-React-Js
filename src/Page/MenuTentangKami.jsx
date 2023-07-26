import React, { Component } from 'react'

class MenuTentangKami extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tentang: "Warung Nusantara adalah restoran yang bernuansa makanan Nusantara, Kami ada untuk membuat anda Menikmati Makanan Khas Dari Nusantara"
        }
    }
    render() {
        return (
            <div>
                <center>
                    <p>Tentang Kami</p> {this.state.tentang}
                </center>
            </div >
        );
    }
}


export default MenuTentangKami;