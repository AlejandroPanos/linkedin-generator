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

export interface Pagination {
  currentPage: number;
  totalPages: number;
  totalPosts: number;
  postsPerPage: number;
  hasNextPage: boolean;
  hasPrevPage: boolean;
}

export interface PostsResponse {
  success: boolean;
  posts: Post[];
  pagination: Pagination;
}
