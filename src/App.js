import { useState } from "react";
import "./App.css";

function App() {
  const [index, setIndex] = useState(0);

  const data = [
    {
      name: "its a also primary",
    },
    {
      name: "its a not only danger",
    },
    {
      name: "its warning",
    },
    {
      name: "its a very important task for success",
    },
  ];

  const handleClick = (e) => {
    setIndex(index + 1);
    e.preventDefault();
  };

  var random = data[Math.floor(Math.random() * data?.length)];

  let randomLetter = random.name.split(" ");
  let firstRandomWord = randomLetter.slice(-randomLetter, -1).join(" ");
  console.log(firstRandomWord, "check");
  let randomWord = randomLetter[randomLetter.length - 1];

  console.log(randomWord);

  const colorChange = () => {
    switch (randomWord) {
      case "primary":
        return "primary";

      case "danger":
        return "danger";

      case "warning":
        return "warning";

      case "success":
        return "success";

      default:
    }
  };

  return (
    <div className="App">
      <h1>
        {firstRandomWord} &nbsp;
        <span className={colorChange()}>{randomWord}</span>{" "}
      </h1>

      <div>
        <button onClick={handleClick}>click here change</button>
      </div>
    </div>
  );
}

export default App;
