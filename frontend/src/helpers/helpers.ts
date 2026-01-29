/* Import axios */
import axios from "axios";

/* Set up axios defaults */
axios.defaults.withCredentials = true;
axios.defaults.baseURL = "http://localhost:3000";

/* Create AUTH helpers */
interface RegisterUser {
  name: string;
  email: string;
  password: string;
}

interface LoginUser {
  email: string;
  password: string;
}

interface UpdatedProfile {
  name: string;
  email: string;
  password: string;
}

export const register = async (user: RegisterUser) => {
  const response = await axios.post("/api/auth/register", user);
  return response.data;
};

export const login = async (user: LoginUser) => {
  const response = await axios.post("/api/auth/login", user);
  return response.data;
};

export const logout = async () => {
  const response = await axios.post("/api/auth/logout");
  return response.data;
};

export const checkAuth = async () => {
  const response = await axios.get("/api/auth/profile");
  return response.data;
};

export const updateProfile = async (updateProfile: UpdatedProfile) => {
  const response = await axios.post("/api/auth/profile", updateProfile);
  return response.data;
};

/* Create AI helpers */
interface Post {
  topic: string;
  tone: string;
  length: number;
  context: string;
}

export const generatePost = async (post: Post) => {
  const response = await axios.post("/api/ai/generate", post);
  return response.data;
};

/* Create POSTS helpers */
interface SavedPost {
  content: string;
  topic: string;
  tone: string;
  length: number;
  context: string;
}

export const getPosts = async (page = 1, limit = 6, favorites = false) => {
  const response = await axios.get("/api/posts/", {
    params: { page, limit, favorites: favorites.toString() },
  });
  return response.data;
};

export const savePost = async (post: SavedPost) => {
  const response = await axios.post("/api/posts/", post);
  return response.data;
};

export const favoritePost = async (postId: string) => {
  const response = await axios.patch(`/api/posts/${postId}/favorite`);
  return response.data;
};

export const deletePost = async (postId: string) => {
  const response = await axios.delete(`/api/posts/${postId}`);
  return response.data;
};

/* Create STRIPE helpers */
export const createCheckoutSession = async (
  plan: "free" | "business",
  billingPeriod: "monthly" | "yearly",
) => {
  const response = await axios.post("/api/subscription/create-checkout-session", {
    plan,
    billingPeriod,
  });
  return response.data;
};

export const cancelSubscription = async () => {
  const response = await axios.post("/api/subscription/cancel");
  return response.data;
};
