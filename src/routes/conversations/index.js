import CardCollectionPage from "../../components/CardCollectionPage/CardCollectionPage";
import conversations, { grouped } from "../../data/conversations/index";

const Conversations = () => (
  <CardCollectionPage 
    grouped={grouped} 
    allCardData={conversations} 
    title={'Conversations'}
  />
);

export default Conversations;
