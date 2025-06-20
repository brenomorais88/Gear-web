// src/app/anuncios/[id]/not-found.tsx
'use client'  // opcional, só se usar Link ou hooks

import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl font-semibold mb-4">
        Anúncio não encontrado
      </h2>
      <p className="mb-6 text-gear-textGray">
        Desculpe, mas não conseguimos achar este anúncio.
      </p>
      <Link
        href="/"
        className="inline-block px-4 py-2 bg-primary text-white rounded-lg"
      >
        Voltar à lista
      </Link>
    </div>
  )
}
