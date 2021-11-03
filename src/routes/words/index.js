import groupedWords from "../../data/words/index";
import CardCollectionPage from "../../components/CardCollectionPage/CardCollectionPage";

const Words = () => (
  <CardCollectionPage 
    grouped={groupedWords}
    title={'Vocab: words'}
  />
);

export default Words;
