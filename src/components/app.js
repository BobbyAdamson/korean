import { h, Component } from "preact";
import { Router } from "preact-router";

import Header from "./header";

// Code-splitting is automated for routes
import Home from "../routes/home";
import Words from "../routes/words";
import LessonNotes from "../routes/lesson_notes";
import Numbers from "../routes/numbers";

import sharedStyles from './shared.scss';

export default class App extends Component {
  /** Gets fired when the route changes.
   *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
   *	@param {string} event.url	The newly routed URL
   */
  handleRoute = (e) => {
    this.currentUrl = e.url;
  };

  render() {
    return (
      <div id="app">
        <Header />
        <article class={sharedStyles.page} >
          <Router onChange={this.handleRoute}>
            <Home path="/" />
            <LessonNotes path="/lesson_notes" />
            <Words path="/words" />
            <Numbers path="/numbers" />
          </Router>
        </article>
      </div>
    );
  }
}
