import { CircleCheck } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router";

import { useAuth } from "../../../../hooks/useAuth";
import { createCheckoutSession } from "../../../../helpers/helpers";

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

interface BusinessProps {
  isYear: boolean;
}

const BusinessPlan = ({ isYear }: BusinessProps) => {
  const navigate = useNavigate();
  const { user } = useAuth();

  const checkoutMutation = useMutation({
    mutationFn: () => createCheckoutSession("business", isYear ? "yearly" : "monthly"),
    onSuccess: (data) => {
      window.location.href = data.sessionUrl;
    },
    onError: () => {
      alert("Checkout error");
    },
  });

  const handleUpgrade = () => {
    if (!user) {
      localStorage.setItem(
        "pendingPlan",
        JSON.stringify({
          plan: "business",
          billingPeriod: isYear ? "yearly" : "monthly",
        }),
      );
      navigate("/register");
      return;
    }
    checkoutMutation.mutate();
  };

  return (
    <>
      <div className="plan-wrapper">
        <div className="plan-text-wrapper">
          <h3>Business Plan</h3>
          <p>Power in your hands. 40 posts/month.</p>
        </div>

        <hr />

        <h2>
          {isYear ? "$80" : "$9"}
          <span>/{isYear ? "year" : "month"}</span>
        </h2>

        <button onClick={handleUpgrade} disabled={checkoutMutation.isPending}>
          {checkoutMutation.isPending ? "Loading..." : "Start Now"}
        </button>

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
