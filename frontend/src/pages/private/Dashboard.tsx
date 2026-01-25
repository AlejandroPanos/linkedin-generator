import PageHeader from "../../components/private/PageHeader/PageHeader";
import PostForm from "../../components/private/PostForm/PostForm";

const Dashboard = () => {
  return (
    <>
      <div className="page-wrapper">
        <PageHeader
          title="Generate Post"
          text="Leverage the power of AI to create high-quality LinkedIn posts"
        />
        <PostForm />
      </div>
    </>
  );
};

export default Dashboard;
