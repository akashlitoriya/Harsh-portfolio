import React from "react";
import ReviewCardSkeleton from "./ReviewCardSkeleton";

const InfiniteScrollSkeleton = () => {
  return (
    <div className="w-full h-full md:h-fit overflow-hidden scroller-animated-vertical md:scroller-animated-horizontal">
      <ul className="w-max flex flex-col md:flex-row gap-3 animate-infinite-scroll-vertical md:animate-infinite-scroll-horizontal hover:[animation-play-state:paused]">
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
        <ReviewCardSkeleton />
      </ul>
    </div>
  );
};

export default InfiniteScrollSkeleton;
