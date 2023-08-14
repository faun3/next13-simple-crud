const page = () => {
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
      <button className="block mx-auto my-4">Add</button>
    </form>
  );
};
export default page;
