import { useMutation } from "@tanstack/react-query";
import type { FormEvent } from "react";
import toast from "react-hot-toast";

import "./Dashboard.css";
import PageHeader from "../../components/private/PageHeader/PageHeader";
import PostForm from "../../components/private/PostForm/PostForm";
import PostDisplay from "../../components/private/PostDisplay/PostDisplay";
import { generatePost } from "../../helpers/helpers";
import { useAuth } from "../../hooks/useAuth";

const Dashboard = (): React.JSX.Element => {
  const { user, dispatch } = useAuth();

  const limit = user?.plan === "free" ? 5 : 40;
  const remaining = limit - (user?.monthlyPostsCreated || 0);

  const postMutation = useMutation({
    mutationFn: generatePost,
    onSuccess: () => {
      dispatch({
        type: "UPDATE_USER",
        payload: {
          ...user!,
          monthlyPostsCreated: (user?.monthlyPostsCreated || 0) + 1,
        },
      });
    },
    onError: (error: any) => {
      if (error.response?.status === 403) {
        toast.error("Limit reached!");
      } else {
        toast.error("Failed to generate post");
      }
    },
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const topic = formData.get("topic");
    const tone = formData.get("tone");
    const length = formData.get("length");
    const context = formData.get("context");

    if (
      typeof topic !== "string" ||
      typeof tone !== "string" ||
      typeof length !== "string" ||
      typeof context !== "string"
    ) {
      console.log("Generate Post --> Form validation error");
      return;
    }

    const post = { topic, tone, length: Number(length), context };

    postMutation.mutate(post);
  };
  return (
    <>
      <div className="h-screen page-wrapper">
        {remaining <= 2 && remaining > 0 && (
          <div className="warning-banner">
            ⚠️ Only {remaining} post{remaining === 1 ? "" : "s"} remaining this month!
          </div>
        )}

        {remaining === 0 && (
          <div className="limit-reached-banner">
            <p>
              Monthly Limit Reached!{" "}
              <span>
                {user?.plan === "free"
                  ? "Go to Settings to upgrade to business."
                  : "Your limit will reset next month."}
              </span>
            </p>
          </div>
        )}

        <PageHeader
          title="Generate Post"
          text="Leverage the power of AI to create high-quality LinkedIn posts"
        />

        <div className="w-full flex-1 flex flex-col lg:flex-row items-start gap-4">
          <PostForm
            handleSubmit={handleSubmit}
            isPending={postMutation.isPending}
            isError={postMutation.isError}
            disabled={remaining === 0}
          />
          <PostDisplay
            data={postMutation.data}
            isPending={postMutation.isPending}
            isError={postMutation.isError}
            error={postMutation.error}
          />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
