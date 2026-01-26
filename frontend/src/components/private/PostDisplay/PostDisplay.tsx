import { useState, useEffect } from "react";
import { ArrowDownToLine, Copy, Pencil, PencilOff } from "lucide-react";
import toast, { Toaster } from "react-hot-toast";

import "./PostDisplay.css";

interface GeneratedPost {
  success: boolean;
  content: string;
  parameters: {
    topic: string;
    tone: string;
    length: number;
    context: string;
  };
}

interface PostDisplayProps {
  data?: GeneratedPost;
  isPending: boolean;
  isError: boolean;
  error?: Error | null;
}

const PostDisplay = ({ data, isPending, isError, error }: PostDisplayProps): React.JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState("");

  useEffect(() => {
    if (data?.content) {
      setEditedContent(data.content);
    }
  }, [data?.content]);

  const handleEdit = () => {
    setIsEditing((prev) => !prev);
    if (isEditing === false) {
      toast.success("Entered edit mode");
    } else {
      toast.success("Exited edit mode!");
    }
  };

  const handleCopy = () => {
    if (editedContent) {
      navigator.clipboard.writeText(editedContent);
      toast.success("Copied to clipboard!");
    }
  };

  // const handleSave = () => {

  // }
  return (
    <>
      <div className="content-wrapper h-full">
        <div className="title-holder">
          <h2>Generated Post</h2>
          <button disabled={!data} onClick={handleEdit}>
            {isEditing ? <PencilOff className="w-4 h-4" /> : <Pencil className="w-4 h-4" />}
          </button>
        </div>

        <div className="post-display-wrapper">
          <textarea
            className="w-full px-2 py-1 text-sm rounded-md border border-neutral-700 placeholder:text-neutral-500 placeholder:text-sm"
            name="generated-post"
            id="generated-post"
            placeholder={isPending ? "Generating post..." : "Your generated post will show here"}
            rows={20}
            disabled={!isEditing}
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />

          {isError && (
            <p className="text-red-500">
              {error ? error.message : "Failed to generate post. Please try again."}
            </p>
          )}

          <div className="w-full flex items-center gap-2">
            <button disabled={!data || isPending} className="save-post-btn">
              <ArrowDownToLine className="w-4 h-4 font-medium" />
              <span>Save</span>
            </button>
            <button onClick={handleCopy} disabled={!data || isPending} className="copy-post-btn">
              <Copy className="w-4 h-4 font-medium" />
              <span>Copy</span>
            </button>
            <Toaster
              position="top-right"
              toastOptions={{
                duration: 3000,
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
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDisplay;
