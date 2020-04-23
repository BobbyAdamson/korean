import { h } from "preact";
import style from "./style.scss";
import Markdown from "preact-markdown";

const LessonNotes = () => {
  const {
    default: lesson3,
  } = require("../../data/docs/lesson_notes/lesson3.md");

  return (
    <div class={style.docs}>
      <h1>Lesson Notes</h1>
      <Markdown markdown={lesson3} />
    </div>
  );
};

export default LessonNotes;
