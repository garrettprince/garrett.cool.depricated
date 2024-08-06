import React from 'react'
import ThingCard from './ThingCard'

export default function ThingsContainer() {
  return (
    <div className='mt-20'>
      <p>ThingsContainer</p>
      <ThingCard title="Test" description="Description" media="Media" />
    </div>
  );
}
