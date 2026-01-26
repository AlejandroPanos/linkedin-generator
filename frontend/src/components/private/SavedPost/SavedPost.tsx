import { Star, StarOff, Copy } from "lucide-react";

import "./SavedPost.css";

const SavedPost = () => {
  return (
    <>
      <div className="post-wrapper">
        <div className="w-full flex items-center justify-between gap-2">
          <h2>This is the post topic</h2>
          <Star className="w-4 h-4 text-amber-400" />
        </div>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque incidunt qui quod odit
          officiis similique iste quas voluptatibus consequatur totam. Nam aperiam error at culpa
          ea, quibusdam atque? Eos, placeat.
        </p>
        <button className="copy-post-btn" type="button">
          <Copy className="w-4 h-4" />
          <p>Copy</p>
        </button>
      </div>
    </>
  );
};

export default SavedPost;
