import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TopicsList = () => {
  return (
    <div>
      <div>
        <p>Topic Title</p>
        <div>Topic Description</div>
      </div>
      <div>
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
};
export default TopicsList;
