import { useState } from "react";
import confetti from "canvas-confetti";

import "./Plans.css";
import FreePlan from "./PlanTypes/FreePlan";
import BusinessPlan from "./PlanTypes/BusinessPlan";

const Plans = () => {
  const [isYear, setIsYear] = useState(false);

  const handleToggle = () => {
    setIsYear((prev) => !prev);
    if (isYear !== true) {
      confetti({
        particleCount: 100,
        spread: 90,
        origin: { y: 1.2 },
        colors: ["#fbbf24", "#f59e0b", "#d97706"],
      });
    }
  };

  return (
    <>
      <section id="pricing" className="w-full">
        <div className="plans-content-wrapper">
          <div className="plans-text-wrapper">
            <h2>
              Choose your <span>plan</span>.
            </h2>
            <p>Pricing made for everyone.</p>
          </div>

          <div className="toggle-pill">
            <label className="text-muted-foreground-1" htmlFor="hs-lg-switch">
              Monthly
            </label>
            <label id="switch" htmlFor="hs-lg-switch">
              <input
                type="checkbox"
                id="hs-lg-switch"
                className="peer sr-only"
                checked={isYear}
                onChange={handleToggle}
              />
              <span></span>
              <span></span>
            </label>
            <label className="text-muted-foreground-1" htmlFor="hs-lg-switch">
              Yearly <span className="text-xs">(Save 25% 🎉)</span>
            </label>
          </div>

          <div className="plans-grid">
            <FreePlan />
            <BusinessPlan isYear={isYear} />
          </div>
        </div>
      </section>
    </>
  );
};

export default Plans;
