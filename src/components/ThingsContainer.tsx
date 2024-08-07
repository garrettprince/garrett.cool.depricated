import React from 'react'
import ThingCard from './ThingCard'

export default function ThingsContainer() {
  return (
    <div className='my-20'>
      <div className='flex justify-between mx-3'>
          <h1 className='text-3xl'>Things</h1>
          <p className='text-xl'>more</p>
      </div>
      <section className='flex'>
          <ThingCard title="Test" description="Description" video={true} mediaSource="Media" />

          {/* Find out why this doesn't scroll horizontally */}
          {/* <ThingCard title="Test" description="Description" video={true} mediaSource="Media" />
          <ThingCard title="Test" description="Description" video={true} mediaSource="Media" /> */}
      </section>
    </div>
  );
}
