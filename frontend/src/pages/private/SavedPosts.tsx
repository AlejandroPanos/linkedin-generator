import PageHeader from "../../components/private/PageHeader/PageHeader";
import SavedPostsFilter from "../../components/private/SavedPostsFilters/SavedPostsFilter";
import SavedPostsList from "../../components/private/SavedPostsList/SavedPostsList";

const SavedPosts = () => {
  return (
    <>
      <div className="page-wrapper">
        <PageHeader
          title="Your Posts"
          text="Check the posts that you saved, copy them and repurpose them"
        />
        <SavedPostsFilter />
        <SavedPostsList />
      </div>
    </>
  );
};

export default SavedPosts;
