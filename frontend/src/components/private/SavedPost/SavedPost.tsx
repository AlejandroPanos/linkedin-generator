import { Star, StarOff, Trash2, Copy } from "lucide-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast, { Toaster } from "react-hot-toast";
import { format } from "date-fns";
import confetti from "canvas-confetti";

import "./SavedPost.css";
import { deletePost, favoritePost } from "../../../helpers/helpers";

interface SavedPost {
  id: string;
  title: string;
  content: string;
  isFavorite: boolean;
  date: string;
}

const SavedPost = ({ id, title, content, isFavorite, date }: SavedPost): React.JSX.Element => {
  const queryClient = useQueryClient();

  const favoriteMutation = useMutation({
    mutationFn: (postId: string) => favoritePost(postId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      if (!isFavorite && data.isFavorite) {
        confetti({
          particleCount: 100,
          spread: 90,
          origin: { y: 1.2 },
          colors: ["#fbbf24", "#f59e0b", "#d97706"],
        });
      }
    },
  });

  const deleteMutation = useMutation({
    mutationFn: (postId: string) => deletePost(postId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["posts"] });
      toast.success("Post deleted");
    },
  });

  const handleFavorite = () => {
    favoriteMutation.mutate(id);
  };

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this post?")) {
      deleteMutation.mutate(id);
    }
  };

  const handleCopy = async () => {
    try {
      if (!navigator?.clipboard) {
        toast.error("Clipboard not available in this context.");
        return;
      }
      await navigator.clipboard.writeText(content);
      toast.success("Copied to clipboard!");
    } catch {
      toast.error("Copy failed. Please try again.");
    }
  };

  return (
    <>
      <div className="post-wrapper">
        <div className="top-wrapper">
          <h2>{title}</h2>
          <div className="flex items-center gap-2">
            <button
              onClick={handleFavorite}
              disabled={favoriteMutation.isPending}
              className="favorite-btn"
            >
              {isFavorite ? <Star className="star" /> : <StarOff className="star-off" />}
            </button>
            <button onClick={handleDelete} className="delete-btn">
              <Trash2 className="w-4 h-4 text-red-400" />
            </button>
          </div>
        </div>
        <p className="-mt-3 text-xs">{format(new Date(date), "dd/MM/yyyy")}</p>
        <p>{content.slice(0, 200)}...</p>
        <button onClick={handleCopy} className="copy-post-btn" type="button">
          <Copy className="w-4 h-4" />
          <span>Copy</span>
        </button>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
            style: {
              padding: "10px",
            },
            success: {
              style: {
                background: "#032e15",
                color: "#00c951",
                border: "1px solid #00c951",
              },
              iconTheme: {
                primary: "#00c951",
                secondary: "#032e15",
              },
            },
            error: {
              style: {
                background: "#460809",
                color: "#ff6467",
                border: "1px solid #ff6467",
              },
              iconTheme: {
                primary: "#ff6467",
                secondary: "#460809",
              },
            },
          }}
        />
      </div>
    </>
  );
};

export default SavedPost;
