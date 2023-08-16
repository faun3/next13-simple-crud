"use client";

import { FormEvent } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const router = useRouter();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const title = formData.get("title") as string;
    const desc = formData.get("desc") as string;
    try {
      const res = await fetch("http://localhost:3000/api/topics", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, desc }),
      });
      if (res.ok) {
        router.push("/");
      } else {
        throw new Error("failed to create a topic");
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      action=""
      className="w-full md:w-[60%] mx-auto my-8 rounded-lg border-2 border-slate-900 py-2 px-4 bg-slate-200"
      onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title" className="block">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          placeholder="Make food"
          className="rounded-md px-4 py-1 w-full"
        />
      </div>
      <div>
        <label htmlFor="desc" className="block">
          Description
        </label>
        <input
          type="text"
          name="desc"
          id="desc"
          placeholder="Cook some delicious tacos"
          className="rounded-md px-4 py-1 w-full"
        />
      </div>
      <button className="block mx-auto my-4 bg-emerald-600 text-slate-100 font-bold text-lg px-4 py-2 rounded-lg">
        Add
      </button>
    </form>
  );
};
export default Page;
