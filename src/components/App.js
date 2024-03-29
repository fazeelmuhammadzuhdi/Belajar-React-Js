import { Component } from "react";
import Footer from "./Footer";
import Header from "./Header";
import List from "./List";
import Main from "./Main";
import MenuKontak from "./MenuKontak";
import Top from "./Top";

class App extends Component {
  render() {
    return (
      <div>
        <Main />
        <Header buah="anggur" />
        <Top />
        <List />
        <MenuKontak />
        <Footer name="Fazeel Muhammad" tahun="2001" />
      </div>
    );
  }
}

export default App;
