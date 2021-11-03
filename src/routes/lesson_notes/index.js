import { h } from "preact";
import Markdown from "preact-markdown";

const LessonNotes = () => {
  const pik3LessonNotesPath = "../../data/docs/lesson_notes/preintermediate/preintermediate3";

  const { default: lesson4 } = require("../../data/docs/lesson_notes/preintermediate/preintermediate3/lesson4.md");
  const { default: lesson3 } = require("../../data/docs/lesson_notes/preintermediate/preintermediate3/lesson3.md");
  const { default: lesson2 } = require("../../data/docs/lesson_notes/preintermediate/preintermediate3/lesson2.md");
  const { default: lesson1review } = require("../../data/docs/lesson_notes/preintermediate/preintermediate3/lesson1review.md");
  const { default: lesson1 } = require("../../data/docs/lesson_notes/preintermediate/preintermediate3/lesson1.md");

  return ([
    <Markdown markdown={lesson4} />,
    <Markdown markdown={lesson3} />,
    <Markdown markdown={lesson2} />,
    <Markdown markdown={lesson1review} />,
    <Markdown markdown={lesson1} />
  ])
};

export default LessonNotes;
