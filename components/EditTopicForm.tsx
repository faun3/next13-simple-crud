import { ITopic } from "@/models/Topic";

// 'use client'
const getTopic = async (id: string) => {
  const res = await fetch(`http://localhost:3000/api/topics/${id}`);

  if (!res.ok) {
    throw new Error("get one response was not ok");
  }

  return res.json();
};

const EditTopicForm = async ({ id }: { id: string }) => {
  const { title, desc } = await getTopic(id);
  return (
    <form
      action=""
      className="w-full md:w-[60%] mx-auto my-8 rounded-lg border-2 border-slate-900 py-2 px-4 bg-slate-200">
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
          value={title}
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
          value={desc}
        />
      </div>
      <button className="block mx-auto my-4 bg-emerald-600 text-slate-100 font-bold text-lg px-4 py-2 rounded-lg">
        Edit
      </button>
    </form>
  );
};
export default EditTopicForm;
