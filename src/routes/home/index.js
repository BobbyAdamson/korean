import { h } from "preact";
import style from "./style";
import alphabet from "../../data/alphabet/index";
import CardCollection from "../../components/CardCollection/CardCollection";

const Home = () => {
  return (
    <div class={style.home}>
      <h1>Home</h1>
      <CardCollection translations={[...alphabet]} />
    </div>
  );
};

export default Home;
