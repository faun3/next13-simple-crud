import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { ITopic } from "@/models/Topic";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: "no-store",
    });

    if (!res.ok) {
      throw new Error("getting topics failed");
    }

    return res.json();
  } catch (err) {
    console.log("error loading topics", err);
  }
};

const TopicsList = async () => {
  const topics: ITopic[] = await getTopics();
  console.log(topics);
  return (
    <>
      {topics.map((topic) => {
        return (
          <div className="flex flex-row justify-between border-2 rounded-lg my-8 border-black px-4 py-2">
            <div>
              <p>{topic.title}</p>
              <div>{topic.desc}</div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <RemoveBtn />
              <Link href={"/edit-topic/123"}>
                <HiPencilAlt size={24} />
              </Link>
            </div>
          </div>
        );
      })}
    </>
  );
};
export default TopicsList;
