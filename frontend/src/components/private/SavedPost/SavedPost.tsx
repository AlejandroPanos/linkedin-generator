import { Star, StarOff, Copy } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

import "./SavedPost.css";

interface SavedPost {
  title: string;
  content: string;
  date: string;
}

const SavedPost = ({ title, content, date }: SavedPost): React.JSX.Element => {
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
        <div className="w-full flex items-center justify-between gap-2">
          <h2>{title}</h2>
          <Star className="w-4 h-4 text-amber-400" />
        </div>
        <p className="-mt-3 text-xs">{date}</p>
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
