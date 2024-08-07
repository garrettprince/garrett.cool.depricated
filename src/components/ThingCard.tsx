/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react'

export default function ThingCard({ title, description, video, mediaSource }: { title: string, description: string, video: boolean, mediaSource: string }) {
  return (
    <div className='m-3 p-3  w-72 h-[22rem] relative overflow-hidden rounded-md'>
    {video === true ?
        <video className="absolute top-0 left-0 w-full h-full object-cover z-[-1]" autoPlay loop muted>
        <source src={mediaSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        :
        <img className='absolute top-0 left-0 w-full h-full object-cover z-[-1]' src={mediaSource} />
    }

      <div className='flex flex-col justify-end h-full'>
          <p className='text-2xl'>{title}</p>
          <p className='text-sm'>{description}</p>
      </div>
    </div>
  );
}
