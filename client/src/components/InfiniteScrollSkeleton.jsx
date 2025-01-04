import React from "react";
import ReviewCardSkeleton from "./ReviewCardSkeleton";

const InfiniteScrollSkeleton = () => {
  return (
    <div className="w-full overflow-hidden scroller-animated">
      <ul className="w-max flex gap-3 animate-infinite-scroll hover:[animation-play-state:paused]">
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
      </ul>
    </div>
  );
};

export default InfiniteScrollSkeleton;
