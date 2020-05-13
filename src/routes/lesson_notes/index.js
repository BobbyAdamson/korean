import { h } from "preact";
import Markdown from "preact-markdown";

const LessonNotes = () => {
  const {
    default: lesson3,
  } = require("../../data/docs/lesson_notes/lesson3.md");
  const {
    default: lesson7,
  } = require("../../data/docs/lesson_notes/lesson7.md");

  return (
    <div>
      <Markdown markdown={lesson7} />
      <Markdown markdown={lesson3} />
    </div>
  );
};

export default LessonNotes;
