"use client";

import { HiOutlineTrash } from "react-icons/hi";
import { useRouter } from "next/navigation";

const RemoveBtn = ({ id }: { id: string }) => {
  const router = useRouter();

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "DELETE",
      });
      console.log(res);

      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("the response for deletion was not ok");
      }
    } catch (err) {
      console.error(err);
      throw new Error("delete operation failed");
    }
  };

  return (
    <button
      className="text-red-500"
      onClick={() => {
        handleDelete(id);
      }}
    >
      <HiOutlineTrash size={24} />
    </button>
  );
};
export default RemoveBtn;
