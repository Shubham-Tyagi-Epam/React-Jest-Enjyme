import logo from "./logo.svg";
import "./App.css";
import Congrats from "./Components/Congrats";
import GuessedWords from "./Components/GuessedWords";
import Input from "./Components/Input";
import { getSecretWord } from "./actions";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    getSecretWord();
  }, []);
  return (
    <div data-test="component-app" className="container text-center">
      <h1 data-test="comp"> Jotto </h1>
      <Congrats success={true} />
      <Input />
      <GuessedWords
        guessedWords={[
          {
            guessedWord: "party",
            matchingLength: 3,
          },
          {
            guessedWord: "lucky",
            matchingLength: 5,
          },
        ]}
      />
    </div>
  );
}

export default App;
