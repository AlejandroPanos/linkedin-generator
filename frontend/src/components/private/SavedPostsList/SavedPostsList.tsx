import "./SavedPostsList.css";
import SavedPost from "../SavedPost/SavedPost";
import Loading from "../../state/Loading/Loading";
import ErrorComp from "../../state/ErrorComp/ErrorComp";
import type { Post } from "../../../types/post";

interface SavedPostsListProps {
  posts?: Post[];
  isLoading: boolean;
  isError: boolean;
}

const SavedPostsList = ({ posts, isLoading, isError }: SavedPostsListProps) => {
  if (isLoading) {
    return <Loading />;
  }

  if (isError) {
    return <ErrorComp error="Could not fetch your posts." />;
  }

  return (
    <>
      <div className="post-list-wrapper">
        {!posts || posts.length === 0 ? (
          <p className="text-neutral-500 text-sm font-light py-8">
            No posts found. Generate your first post!
          </p>
        ) : (
          posts.map((post: Post) => (
            <SavedPost
              key={post._id}
              id={post._id}
              title={post.topic}
              content={post.content}
              isFavorite={post.isFavorite}
              date={post.createdAt}
            />
          ))
        )}
      </div>
    </>
  );
};

export default SavedPostsList;
