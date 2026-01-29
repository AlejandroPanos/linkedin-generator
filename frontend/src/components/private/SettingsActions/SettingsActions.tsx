import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { Ban, CircleFadingArrowUp } from "lucide-react";

import "./SettingsActions.css";
import { useAuth } from "../../../hooks/useAuth";
import { createCheckoutSession, cancelSubscription } from "../../../helpers/helpers";

const SettingsActions = (): React.JSX.Element => {
  const { user, dispatch } = useAuth();
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);

  const cancelMutation = useMutation({
    mutationFn: cancelSubscription,
    onSuccess: () => {
      dispatch({
        type: "UPDATE_USER",
        payload: {
          ...user!,
          plan: "free",
          billingPeriod: "monthly",
          subscriptionStatus: "canceled",
        },
      });
      toast.success("Subscription canceled.");
    },
    onError: () => {
      toast.error("Failed to cancel subscription.");
    },
  });

  const upgradeMutation = useMutation({
    mutationFn: (billingPeriod: "monthly" | "yearly") =>
      createCheckoutSession("business", billingPeriod),
    onSuccess: (data) => {
      window.location.href = data.sessionUrl;
    },
    onError: () => {
      toast.error("Failed to start checkout");
    },
  });

  const handleUpgrade = () => {
    if (user?.plan === "business") {
      toast.error("Already in Business Plan");
      return;
    }

    setShowUpgradeModal(true);
  };

  const handleSelectPlan = (billingPeriod: "monthly" | "yearly") => {
    if (window.confirm("Do you want to upgrade?")) {
      setShowUpgradeModal(false);
      upgradeMutation.mutate(billingPeriod);
    }
  };

  const handleCancel = () => {
    if (user?.plan === "free") {
      toast.error("Already in Free Plan");
      return;
    }

    if (
      window.confirm("If you cancel, you will lose all your LinkedIn powers! Still want to cancel?")
    ) {
      cancelMutation.mutate();
    }
  };

  return (
    <>
      <div className="content-wrapper">
        <h2>Change or cancel plan</h2>

        <div className="action-btns">
          <button
            onClick={handleUpgrade}
            disabled={upgradeMutation.isPending}
            className="upgrade-btn"
          >
            <CircleFadingArrowUp className="w-4 h-4 text-neutral-300" />
            <p className="text-neutral-300 font-medium">Upgrade Plan</p>
          </button>
          <button onClick={handleCancel} disabled={cancelMutation.isPending} className="cancel-btn">
            <Ban className="w-4 h-4 text-neutral-300" />
            <p className="text-neutral-300 font-medium">
              {cancelMutation.isPending ? "Canceling..." : "Cancel Subscription"}
            </p>
          </button>
        </div>

        <h2 className="mt-6">Delete account</h2>
        <p>
          Please <a href="#">click here</a> to contact our support team if you want to delete your
          account.
        </p>
      </div>

      {showUpgradeModal && (
        <div className="modal-overlay" onClick={() => setShowUpgradeModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Choose Your Plan</h3>
            <p>40 posts per month with Business Plan</p>

            <div className="plan-options">
              <button onClick={() => handleSelectPlan("monthly")} className="plan-option">
                <h4>Monthly</h4>
                <p className="price">$9/month</p>
              </button>

              <button onClick={() => handleSelectPlan("yearly")} className="plan-option featured">
                <h4>Yearly</h4>
                <p className="price">$80/year</p>
                <span className="badge">Save 40% 🎉</span>
              </button>
            </div>

            <button onClick={() => setShowUpgradeModal(false)} className="close-btn">
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingsActions;
