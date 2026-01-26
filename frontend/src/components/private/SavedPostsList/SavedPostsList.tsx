import { useQuery } from "@tanstack/react-query";

import "./SavedPostsList.css";
import SavedPost from "../SavedPost/SavedPost";
import { getPosts } from "../../../helpers/helpers";
import { useAuth } from "../../../hooks/useAuth";

const SavedPostsList = () => {
  const { user } = useAuth();

  // const postsQuery = useQuery({
  //   queryKey: ["posts"], //! Import userId
  //   queryFn: getPosts,
  // });

  // if (postsQuery.isPending) {
  //   console.log("Pending");
  // }

  // if (postsQuery.isError) {
  //   console.log("Error");
  // }

  // if (postsQuery.data) {
  //   console.log(postsQuery.data);
  // }

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
