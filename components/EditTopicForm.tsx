"use client";

import { ITopic } from "@/models/Topic";
import { redirect } from "next/navigation";
import { FormEvent, useEffect } from "react";
import { use, useState } from "react";
import { useRouter } from "next/navigation";

const getTopic = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`);

  if (!res.ok) {
    throw new Error("get one response was not ok");
  }

  return res.json();
};

const EditTopicForm = ({ id }: { id: string }) => {
  const router = useRouter();
  const [values, setValues] = useState<ITopic>({
    title: "",
    desc: "",
  });

  useEffect(() => {
    const helper = async () => {
      const { title, desc } = await getTopic(id);
      setValues({
        title: title,
        desc: desc,
      });
    };
    helper();
  }, []);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const title = values.title;
    const desc = values.desc;
    try {
      const res = await fetch(`http://localhost:3000/api/topics/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title, desc }),
      });

      if (res.ok) {
        router.push("/");
      }
    } catch (err) {
      console.log(err);
      throw new Error("PATCHING on route failed");
    }
  };
  return (
    <form
      action=""
      className="w-full md:w-[60%] mx-auto my-8 rounded-lg border-2 border-slate-900 py-2 px-4 bg-slate-200"
      onSubmit={(e) => {
        handleSubmit(e);
      }}>
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
          value={values.title}
          onChange={(e) => {
            setValues({ ...values, title: e.target.value });
          }}
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
          value={values.desc}
          onChange={(e) => {
            setValues({ ...values, desc: e.target.value });
          }}
        />
      </div>
      <button className="block mx-auto my-4 bg-emerald-600 text-slate-100 font-bold text-lg px-4 py-2 rounded-lg">
        Edit
      </button>
    </form>
  );
};
export default EditTopicForm;
