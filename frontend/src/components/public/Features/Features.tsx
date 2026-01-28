import { WandSparkles, SquarePen, Bookmark, Star, SlidersHorizontal, Sprout } from "lucide-react";

import "./Features.css";
import FeatureCard from "../FeatureCard/FeatureCard";

const features = [
  {
    id: "1",
    icon: <WandSparkles className="w-4 h-4" />,
    title: "Instant Generation",
    description: "Generate posts immediately with the power of AI.",
  },
  {
    id: "2",
    icon: <SquarePen className="w-4 h-4" />,
    title: "Edit As You Go",
    description: "Edit your generated post when you enter edit mode.",
  },
  {
    id: "3",
    icon: <Bookmark className="w-4 h-4" />,
    title: "Post Library",
    description: "When ready, save your post to your post library.",
  },
  {
    id: "4",
    icon: <Star className="w-4 h-4" />,
    title: "Favorite Posts",
    description: "Favorite the posts that have performed for you.",
  },
  {
    id: "5",
    icon: <SlidersHorizontal className="w-4 h-4" />,
    title: "Filter Posts",
    description: "Filter posts by favorite to easiliy access them.",
  },
  {
    id: "6",
    icon: <Sprout className="w-4 h-4" />,
    title: "Flexible & Affordable",
    description: "Extremely flexible & affordable plans for every need.",
  },
];

const Features = () => {
  return (
    <>
      <section id="features" className="w-full">
        <div className="features-content-wrapper">
          <div className="features-text-wrapper">
            <h2>
              Get access to <span>LinkedIn</span> super-powers.
            </h2>
            <p>Get posts in seconds, edit them and save them.</p>
          </div>
          <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
            {features.map((feature) => {
              return (
                <FeatureCard
                  key={feature.id}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
