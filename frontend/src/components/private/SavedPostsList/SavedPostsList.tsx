import { useQuery } from "@tanstack/react-query";

import "./SavedPostsList.css";
import SavedPost from "../SavedPost/SavedPost";
import { getPosts } from "../../../helpers/helpers";
import { useAuth } from "../../../hooks/useAuth";
import Loading from "../../state/Loading/Loading";
import ErrorComp from "../../state/ErrorComp/ErrorComp";

export interface Post {
  _id: string;
  userId: string;
  content: string;
  topic: string;
  tone: string;
  length: number;
  context: string;
  isFavorite: boolean;
  createdAt: string;
  updatedAt: string;
}

const SavedPostsList = () => {
  const { user } = useAuth();

  const postsQuery = useQuery<Post[]>({
    queryKey: ["posts", user?._id],
    queryFn: getPosts,
  });

  if (postsQuery.isPending) {
    <Loading />;
  }

  if (postsQuery.isError) {
    <ErrorComp error="Could not fetch your posts." />;
  }

  return (
    <>
      <div className="post-list-wrapper">
        {postsQuery.data?.map((post: Post) => {
          return (
            <SavedPost
              key={post._id}
              title={post.topic}
              content={post.content}
              date={post.updatedAt}
            />
          );
        })}
      </div>
    </>
  );
};

export default SavedPostsList;
