import { Sparkles } from "lucide-react";
import { Link } from "react-router";

import "./CTA.css";

const CTA = () => {
  return (
    <>
      <section id="cta" className="w-full">
        <div className="cta-content-wrapper">
          <div className="cta-text-wrapper">
            <h2>Try ScribbleAI for free today.</h2>
            <p>Taste the power of AI and grow your brand.</p>
            <Link to="/register">
              <Sparkles className="w-4 h-4 text-orange-700" />
              <span>Try ScribbleAI</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CTA;
