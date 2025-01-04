import React from 'react'
import ReviewCard from './ReviewCard'

const InfiniteHorizontalScroll = ({items}) => {
    let newItems = [...items, ...items]
    console.log("NEW ITEMS : ", newItems);
  return (
    <div className=' w-full overflow-hidden scroller-animated'>
      <ul className='w-max flex gap-3 animate-infinite-scroll hover:[animation-play-state:paused]'>
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
