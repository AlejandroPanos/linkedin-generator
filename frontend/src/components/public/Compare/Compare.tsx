import { BadgeX, BadgeCheck } from "lucide-react";

import "./Compare.css";

const Compare = () => {
  return (
    <>
      <section id="compare" className="w-full">
        <div className="compare-wrapper">
          <div className="compare-text-wrapper">
            <h2>
              Grow your audience, <span>much faster</span>.
            </h2>
            <p>Forget about spending hours writing. Let us do the heavy lifting.</p>
          </div>

          <div className="before-container">
            <h3 className="compare-title">Writing should not drain your energy.</h3>
            <ul className="compare-list">
              <li>Stop wasting hours writing.</li>
              <li>You lose ideas before noting them.</li>
              <li>Writing posts is tiring.</li>
              <li>Stop staring at a blank page.</li>
            </ul>
            <div className="before-pill">
              <BadgeX className="w-4 h-4" />
              <p className="text-sm text-neutral-300">Before</p>
            </div>
          </div>

          <div className="after-container">
            <h3 className="compare-title">Let Scribble do the heavy lifting for you.</h3>
            <ul className="compare-list">
              <li>Don't waste any precious time.</li>
              <li>Have an idea and execute instantly.</li>
              <li>Writing posts is effortless.</li>
              <li>Never stare at a blank page again.</li>
            </ul>
            <div className="after-pill">
              <BadgeCheck className="w-4 h-4 text-neutral-300" />
              <p className="text-neutral-300 text-sm">After</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Compare;
