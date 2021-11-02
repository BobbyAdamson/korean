import words, { grouped } from "../../data/words/index";
import CardCollectionPage from "../../components/CardCollectionPage/CardCollectionPage";

const Words = () => (
  <CardCollectionPage grouped={grouped} allCardData={words} />
);

export default Words;
