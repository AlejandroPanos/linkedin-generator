import "./Plans.css";
import FreePlan from "./PlanTypes/FreePlan";
import BusinessPlan from "./PlanTypes/BusinessPlan";

const Plans = () => {
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

          <div className="plans-grid">
            <FreePlan />
            <BusinessPlan />
          </div>
        </div>
      </section>
    </>
  );
};

export default Plans;
