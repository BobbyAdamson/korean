import alphabet, { grouped } from "../../data/alphabet/index";
import CardCollectionPage from "../../components/CardCollectionPage/CardCollectionPage";

const Home = () => (
  <CardCollectionPage grouped={grouped} allCardData={alphabet} />
);

export default Home;
