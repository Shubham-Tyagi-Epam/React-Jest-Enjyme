import react from "react";

class AboutClassComp extends react.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "code improve",
      id: 111,
    };
  }
  render() {
    return (
      <div>
        About
        <div className="h1cls">Hello</div>
      </div>
    );
  }
}

export default AboutClassComp;
