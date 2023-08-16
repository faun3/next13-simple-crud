import EditTopicForm from "@/components/EditTopicForm";

const EditTopic = ({ params }: { params: { id: string } }) => {
  return (
    <div>
      stuff below
      <EditTopicForm id={params.id} />
    </div>
  );
};
export default EditTopic;
