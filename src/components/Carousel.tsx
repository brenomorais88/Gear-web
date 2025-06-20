'use client'

import Image from 'next/image'
import { useState } from 'react'

interface Props {
  images: string[]
}

export default function Carousel({ images }: Props) {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length)
  const next = () => setIdx((i) => (i + 1) % images.length)

  return (
    <div className="relative w-full h-64 rounded-lg overflow-hidden">
      <Image
        src={images[idx]}
        alt={`Foto ${idx + 1}`}
        fill
        className="object-cover"
      />

      <button
        onClick={prev}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full"
      >
        ›
      </button>

      <div className="absolute bottom-2 w-full flex justify-center space-x-1">
        {images.map((_, i) => (
          <span
            key={i}
            className={`w-2 h-2 rounded-full ${i === idx ? 'bg-red-500' : 'bg-gray-300'
              }`}
          />
        ))}
      </div>
    </div>
  )
}
