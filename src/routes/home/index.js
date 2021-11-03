import groupedAlphabet from "../../data/alphabet/index";
import CardCollectionPage from "../../components/CardCollectionPage/CardCollectionPage";

const Home = () => (
  <CardCollectionPage 
    grouped={groupedAlphabet}  
    title={'Home: Korean Alphabet'} 
  />
);

export default Home;
