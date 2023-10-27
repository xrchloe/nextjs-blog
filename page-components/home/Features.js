import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="flex flex-row flex-nowrap py-20">
      <FeatureCard
        icon={"google"}
        title="Order with Google"
        subtitle={"Out of the box online ordering"}
        description={
          "<b class='text-white'>From Google to order.</b> Millions of eager diners rely on Google to find their next culinary adventure. With Rushable, you show up on top."
        }
      />
    </div>
  );
};

export default Features;
