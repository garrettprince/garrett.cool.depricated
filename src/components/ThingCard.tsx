import React from 'react'

export default function ThingCard({ title, description, media }: { title: string, description: string, media: string }) {
  return (
    <div>
      <p>ThingCard</p>
      <p>{title}</p>
      <p>{description}</p>
      <p>{media}</p>
    </div>
  );
}
