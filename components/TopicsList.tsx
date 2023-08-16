import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import { HiPencilAlt } from "react-icons/hi";
import { ITopic } from "@/models/Topic";
import { HydratedDocument } from "mongoose";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      next: { revalidate: 1 },
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
  const topics: HydratedDocument<ITopic>[] = await getTopics();
  return (
    <>
      {topics.map((topic) => {
        return (
          <div
            className="flex flex-row justify-between border-2 rounded-lg my-8 border-black px-4 py-2"
            key={topic.id}>
            <div>
              <p>{topic.title}</p>
              <div>{topic.desc}</div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <RemoveBtn id={`${topic._id}`} />
              <Link href={`/edit-topic/${topic._id}`}>
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
