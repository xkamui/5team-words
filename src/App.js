import { useEffect, useState } from "react";
import Word from "./components/word";

function App() {
  const [words, setWords] = useState([]);
  const fetchAllUrl = "https://baconipsum.com/api/?type=meat-and-filler";

  useEffect(() => {
    fetch(fetchAllUrl)
      .then((response) => response.json())
      .then((data) => setWords(data));
  }, []);

  return (
    <div className="App">
      {words?.length > 0
        ? words[0]
            .split(" ")
            .map((word, index) => <Word key={index} word={word} />)
        : ""}
    </div>
  );
}

export default App;
