import CardCollectionPage from "../../components/CardCollectionPage/CardCollectionPage";
import conversations, { grouped } from "../../data/conversations/index";

const Conversations = () => (
  <CardCollectionPage grouped={grouped} allCardData={conversations} />
);

export default Conversations;
