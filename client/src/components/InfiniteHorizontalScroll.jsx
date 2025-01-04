import React from 'react'
import ReviewCard from './ReviewCard'

const InfiniteHorizontalScroll = ({items}) => {
    let newItems = [...items, ...items]
  return (
    <div className=' w-full h-full md:h-fit overflow-hidden scroller-animated-vertical md:scroller-animated-horizontal'>
      <ul className='w-max flex flex-col md:flex-row gap-3 mx-auto md:mx-0 animate-infinite-scroll-vertical md:animate-infinite-scroll-horizontal hover:[animation-play-state:paused]'>
        {
            newItems && newItems.map((item, index)=>{
                return <ReviewCard data={item} key={`${index}_${item.reviewId}`}/>
            })
        }
      </ul>
    </div>
  )
}

export default InfiniteHorizontalScroll
