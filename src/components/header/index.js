import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
      <Link activeClassName={style.active} href="/lesson_notes">
        Lesson Notes
      </Link>
      <Link activeClassName={style.active} href="/conversations">
        Conversations
      </Link>
      <Link activeClassName={style.active} href="/words">
        Words
      </Link>
      <Link activeClassName={style.active} href="/numbers">
        Numbers
      </Link>
    </nav>
  </header>
);

export default Header;
