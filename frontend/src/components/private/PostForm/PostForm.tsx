import { ChevronDown, Sparkles } from "lucide-react";

import "./PostForm.css";

const PostForm = (): React.JSX.Element => {
  return (
    <>
      <div className="content-wrapper h-full">
        <h2>Post Data</h2>

        <div className="post-form-wrapper">
          <form className="post-form">
            <div className="input-holder">
              <label htmlFor="topic">Topic</label>
              <input
                name="topic"
                id="topic"
                type="text"
                placeholder="e.g: A post about changing careers"
              />
            </div>
            <div className="relative input-holder">
              <label htmlFor="tone">Tone</label>
              <select name="tone" id="tone">
                <option value="">-- Select an option --</option>
                <option value="professional">Professional</option>
                <option value="casual">Casual</option>
                <option value="thought-leadership">Thought-leadership</option>
                <option value="storytelling">Storytelling</option>
                <option value="educational">Educational</option>
                <option value="inspirational">Inspirational</option>
              </select>

              <ChevronDown className="input-holder-chevron" />
            </div>
            <div className="input-holder">
              <label htmlFor="length">Length</label>
              <input
                name="length"
                id="length"
                type="number"
                min={50}
                max={300}
                placeholder="A number between 50-300"
              />
            </div>
            <div className="input-holder">
              <label htmlFor="context">Context</label>
              <textarea
                name="context"
                id="context"
                rows={5}
                placeholder="e.g: I am changing careers and I want a motivational post about change to share with my network."
              />
            </div>
          </form>

          <button className="generate-post-btn">
            <Sparkles className="w-4 h-4 font-medium" />
            <span>Generate</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default PostForm;
