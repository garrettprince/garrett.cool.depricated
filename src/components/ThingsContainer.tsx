import React from 'react'
import ThingCard from './ThingCard'

export default function ThingsContainer() {
  return (
    <div className='my-20'>
      <div className='flex justify-between mx-3'>
          <h1 className='text-2xl'>Things</h1>
          <p className='text-xl'>more</p>
      </div>

      {/* Find out why this doesn't scroll horizontally */}
      <section className='flex overflow-x-scroll'>
          <ThingCard title="Test" description="Description" video={false} mediaSource="https://res.cloudinary.com/dvwbpgk6p/image/upload/v1722213801/New%20Garrett.cool/Modern%20Player/losleo_wrza3i.jpg" />
      </section>
    </div>
  );
}
