import { ArrowDownToLine, Copy } from "lucide-react";

import "./PostDisplay.css";

const PostDisplay = (): React.JSX.Element => {
  return (
    <>
      <div className="content-wrapper h-full">
        <h2>Generated Post</h2>

        <div className="post-display-wrapper">
          <textarea
            className="w-full px-2 py-1 text-sm rounded-md border border-neutral-700 placeholder:text-neutral-500 placeholder:text-sm"
            name="generated-post"
            id="generated-post"
            placeholder="Your generated post will show here"
            rows={23}
            readOnly
          ></textarea>

          <div className="w-full flex items-center gap-2">
            <button className="save-post-btn">
              <ArrowDownToLine className="w-4 h-4 font-medium" />
              <span>Save</span>
            </button>
            <button className="copy-post-btn">
              <Copy className="w-4 h-4 font-medium" />
              <span>Copy</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostDisplay;
