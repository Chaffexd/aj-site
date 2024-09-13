import { useParams } from 'next/navigation'
import React from 'react'

const PodcastDetailPage = () => {
  const { podcastId } = useParams();
  console.log("Params =", podcastId)
  return (
    <section>
      
    </section>
  )
}

export default PodcastDetailPage