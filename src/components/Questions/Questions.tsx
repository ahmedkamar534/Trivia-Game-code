import classes from "./Questions.module.css";
const Questions: React.FC<{
  data: {
    category: string;
    difficulty: string;
    type: string;
    question: string;
    correct_answer: string;
    incorrect_answers: string[];
  }[];
}> = (props) => {
  return (
    <div className={classes.question}>
      {" "}
      <p className={classes.p}>Category : {props.data[0]?.category}</p>
      <p className={classes.p}>Difficulty : {props.data[0]?.difficulty}</p>
      <p className={classes.p}>Type : {props.data[0]?.type}</p>
      <p>
        Question <span>{props.data[0]?.question}</span>
      </p>
      <div className={classes.answers}>
        {props.data[0]?.incorrect_answers.map((ele: string, index: number) => (
          <span key={index} className={classes.answers}>
            {ele}
          </span>
        ))}

        <span className={classes.answers}>{props.data[0]?.correct_answer}</span>
      </div>
    </div>
  );
};
export default Questions;
