import axios from "axios";
import { useEffect, useState } from "react";
import classes from "./App.module.css";
import Answer from "../Answer/Answer";
import Questions from "../Questions/Questions";

function App() {
  const [item, setItem] = useState<
    {
      category: string;
      difficulty: string;
      type: string;
      question: string;
      correct_answer: string;
      incorrect_answers: string[];
    }[]
  >([]);
  const getData = async () => {
    const { data } = await axios.get("https://opentdb.com/api.php?amount=1");
    setItem(data.results);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={classes.app}>
      <Questions data={item} />
      <Answer text={item[0]?.correct_answer} />
    </div>
  );
}

export default App;
