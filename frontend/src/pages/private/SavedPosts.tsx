import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import PageHeader from "../../components/private/PageHeader/PageHeader";
import SavedPostsFilter from "../../components/private/SavedPostsFilters/SavedPostsFilter";
import SavedPostsList from "../../components/private/SavedPostsList/SavedPostsList";
import { getPosts } from "../../helpers/helpers";
import { useAuth } from "../../hooks/useAuth";
import type { PostsResponse } from "../../types/post";

const POSTS_PER_PAGE = 6;

const SavedPosts = () => {
  const { user } = useAuth();
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const postsQuery = useQuery<PostsResponse>({
    queryKey: ["posts", user?._id, currentPage, showFavoritesOnly],
    queryFn: () => getPosts(currentPage, POSTS_PER_PAGE, showFavoritesOnly),
    enabled: !!user?._id,
  });

  const handleFilterChange = (value: boolean) => {
    setShowFavoritesOnly(value);
    setCurrentPage(1);
  };

  return (
    <>
      <div className="page-wrapper">
        <PageHeader
          title="Your Posts"
          text="Check the posts that you saved, copy them and repurpose them"
        />
        <SavedPostsFilter
          showFavoritesOnly={showFavoritesOnly}
          setShowFavoritesOnly={handleFilterChange}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={postsQuery.data?.pagination.totalPages || 1}
          hasNextPage={postsQuery.data?.pagination.hasNextPage || false}
          hasPrevPage={postsQuery.data?.pagination.hasPrevPage || false}
        />
        <SavedPostsList
          posts={postsQuery.data?.posts}
          isLoading={postsQuery.isPending}
          isError={postsQuery.isError}
        />
      </div>
    </>
  );
};

export default SavedPosts;
