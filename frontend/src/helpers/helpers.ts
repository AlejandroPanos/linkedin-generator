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
export const getPosts = async () => {
  const response = await axios.get("/api/posts/");
  return response.data;
};
