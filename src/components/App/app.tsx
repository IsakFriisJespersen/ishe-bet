import React from "react";
import Header from "../Header/header";
import Footer from "../footer/footer";
import Admin from "../Admin/admin";

export default class App extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      section: 'login'
    };
  }  
  render() {
      const handleSectionChange = (e: any) => {
        this.setState({ section: e.target.id})
        console.log(e.target.id)
    }
    return (
      <div className="container-fluid">
        <div>
          <Header onSectionChange={handleSectionChange}/>
        </div>
        <div className="row justify-content-center">
          <Admin />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}
