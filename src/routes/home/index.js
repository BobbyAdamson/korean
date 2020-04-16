import { h } from "preact";
import style from "./style";
import translations from "../../data/translations";
import Card from "../../components/card/card";

const Home = () => (
  <div class={style.home}>
    <h1>Bobbys Korean shit bitch!</h1>
    <p>This is all the cards bitch!</p>
    {translations.map(translation => {
      return <Card {...translation} />;
    })}
  </div>
);

export default Home;
