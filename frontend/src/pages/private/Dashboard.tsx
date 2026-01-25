import PageHeader from "../../components/private/PageHeader/PageHeader";
import PostForm from "../../components/private/PostForm/PostForm";
import PostDisplay from "../../components/private/PostDisplay/PostDisplay";

const Dashboard = (): React.JSX.Element => {
  return (
    <>
      <div className="h-screen page-wrapper">
        <PageHeader
          title="Generate Post"
          text="Leverage the power of AI to create high-quality LinkedIn posts"
        />
        <div className="w-full flex-1 flex flex-col lg:flex-row items-start gap-4">
          <PostForm />
          <PostDisplay />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
