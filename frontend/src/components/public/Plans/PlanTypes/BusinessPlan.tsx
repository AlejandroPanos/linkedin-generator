import { CircleCheck } from "lucide-react";

const businessPlan = [
  {
    id: "1",
    icon: <CircleCheck color="#f54a00" className="w-4 h-4" />,
    text: "All features available.",
  },
  {
    id: "2",
    icon: <CircleCheck color="#f54a00" className="w-4 h-4" />,
    text: "Updates for life.",
  },
  {
    id: "3",
    icon: <CircleCheck color="#f54a00" className="w-4 h-4" />,
    text: "Cancel your account whenever.",
  },
  {
    id: "4",
    icon: <CircleCheck color="#f54a00" className="w-4 h-4" />,
    text: "Dedicated support.",
  },
  {
    id: "5",
    icon: <CircleCheck color="#f54a00" className="w-4 h-4" />,
    text: "Explode your LinkedIn.",
  },
];

const BusinessPlan = () => {
  return (
    <>
      <div className="plan-wrapper">
        <div className="plan-text-wrapper">
          <h3>Business Plan</h3>
          <p>Power in your hands. 40 posts/month.</p>
        </div>

        <hr />

        <h2>
          $9<span>/month</span>
        </h2>

        <button>Start Now</button>

        <hr />
        <ul>
          {businessPlan.map((i) => {
            return (
              <li key={i.id}>
                {i.icon} {i.text}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default BusinessPlan;
