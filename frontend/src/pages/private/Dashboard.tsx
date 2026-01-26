import { useMutation } from "@tanstack/react-query";
import type { FormEvent } from "react";

import PageHeader from "../../components/private/PageHeader/PageHeader";
import PostForm from "../../components/private/PostForm/PostForm";
import PostDisplay from "../../components/private/PostDisplay/PostDisplay";
import { generatePost } from "../../helpers/helpers";

const Dashboard = (): React.JSX.Element => {
  const postMutation = useMutation({
    mutationFn: generatePost,
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
        <PageHeader
          title="Generate Post"
          text="Leverage the power of AI to create high-quality LinkedIn posts"
        />
        <div className="w-full flex-1 flex flex-col lg:flex-row items-start gap-4">
          <PostForm
            handleSubmit={handleSubmit}
            isPending={postMutation.isPending}
            isError={postMutation.isError}
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
