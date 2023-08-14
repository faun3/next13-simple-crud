import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";

const TopicsList = () => {
  return (
    <div className="flex flex-row justify-between border-2 rounded-lg my-8 border-black px-4 py-2">
      <div>
        <p>Topic Title</p>
        <div>Topic Description</div>
      </div>
      <div className="flex flex-row">
        <RemoveBtn />
        <Link href={"/editTopic/123"}>
          <HiPencilAlt size={24} />
        </Link>
      </div>
    </div>
  );
};
export default TopicsList;
