import React from "react";
import axios from "axios";

class Newz extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newzcount: 0,
    };
  }
  componentDidMount() {
    this.func(90, 80);
  }
  func = async (no1, no2) => {
    //   let url = "http://localhost/api/article-list";
    let url = "http://localhost:3100/users";
    let options = {
      method: "Get",
      url: url,
    };
    let response = await axios(options);
    return response.data;
  };
  signOut() {
    this.func(90, 80);
  }
  checkBoxChecked(id, test) {
    return {
      id: 3,
    };
  }

  loadData(id, test) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.setState({
          newzcount: 50,
        });
        resolve({ me: 12 });
      }, 2000);
    });
  }
  render() {
    return (
      <div>
        Hello
        <button onClick={() => this.checkBoxChecked()}>Sign Out</button>
        <input
          type="text"
          id="firstname"
          defaultValue="codeimprove"
          name="firstname"
        />
      </div>
    );
  }
}

export default Newz;
