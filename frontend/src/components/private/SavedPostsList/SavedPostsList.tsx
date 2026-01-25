import "./SavedPostsList.css";
import SavedPost from "../SavedPost/SavedPost";

const SavedPostsList = () => {
  return (
    <>
      <div className="post-list-wrapper">
        <SavedPost />
        <SavedPost />
      </div>
    </>
  );
};

export default SavedPostsList;
