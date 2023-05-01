import React, { useRef, useState } from "react";

import classes from "./Answer.module.css";

const Answer: React.FC<{ text: string }> = (props) => {
  const answer = useRef<HTMLInputElement>(null);
  const [correct, setcorrect] = useState(false);
  const [empty, setEmpty] = useState(false);
  const [notcorrect, setNoTcorrect] = useState(false);
  localStorage.setItem("Answer", props.text);

  const onSubmitHandeler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredAnswer = answer.current?.value;
    if (enteredAnswer?.trim().length === 0) {
      setEmpty(true);
      setTimeout(() => {
        setEmpty(false);
      }, 2000);
      return;
    }

    if (enteredAnswer?.trim().toLowerCase() === props.text.toLowerCase()) {
      setcorrect(true);
    } else {
      setNoTcorrect(true);
      setTimeout(() => {
        setNoTcorrect(false);
      }, 2000);
    }
  };
  const nextQuestion = () => {
    window.location.reload();
  };

  return (
    <div className={classes.answer}>
      {correct ? <p className={classes.correct}>Correct Answer</p> : ""}
      {empty ? (
        <p className={classes.empty}>Answer Shouldn't be empty value</p>
      ) : (
        ""
      )}
      {notcorrect ? (
        <p className={classes.notcorrect}>
          Not A Correct Answer Please Try Again
        </p>
      ) : (
        ""
      )}

      <form onSubmit={onSubmitHandeler}>
        <input type="text" ref={answer} placeholder="Your Answer..." />
        {!correct ? (
          <button>Submit Your Answer</button>
        ) : (
          <p className={classes.p} onClick={nextQuestion}>
            {`Next Question -->`}{" "}
          </p>
        )}
      </form>
    </div>
  );
};

export default Answer;
