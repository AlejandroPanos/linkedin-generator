import { ChevronDown, Sparkles } from "lucide-react";
import type { JSX } from "react";
import type { FormEvent } from "react";

import "./PostForm.css";

interface PostFormProps {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  isPending: boolean;
  isError: boolean;
  disabled: boolean;
}

const PostForm = ({ handleSubmit, isPending, isError, disabled }: PostFormProps): JSX.Element => {
  return (
    <>
      <div className="content-wrapper h-full">
        <h2>Post Data</h2>

        <div className="post-form-wrapper">
          <form onSubmit={handleSubmit} className="post-form">
            <div className="post-form-inputs">
              <div className="input-holder">
                <label htmlFor="topic">Topic*</label>
                <input
                  name="topic"
                  id="topic"
                  type="text"
                  placeholder="e.g: A post about changing careers"
                  required
                />
              </div>
              <div className="relative input-holder">
                <label htmlFor="tone">Tone*</label>
                <select name="tone" id="tone" required>
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
                <label htmlFor="length">Length*</label>
                <input
                  name="length"
                  id="length"
                  type="number"
                  min={50}
                  max={300}
                  placeholder="A number between 50-300"
                  required
                />
              </div>
              <div className="input-holder">
                <label htmlFor="context">Context*</label>
                <textarea
                  name="context"
                  id="context"
                  rows={5}
                  placeholder="e.g: I am changing careers and I want a motivational post about change to share with my network."
                  required
                />
              </div>
            </div>
            {isError && <p className="text-red-500">Failed to generate post. Please try again.</p>}

            <button disabled={isPending || disabled} type="submit" className="generate-post-btn">
              <Sparkles className="w-4 h-4 font-medium" />
              <span>Generate</span>
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default PostForm;
