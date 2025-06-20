// src/app/anuncios/[id]/error.tsx
'use client'

import { useEffect } from 'react'

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
    useEffect(() => console.error(error), [error])
    return (
        <div className="p-8 text-center">
            <p>Erro ao carregar os detalhes do anúncio.</p>
            <button onClick={reset} className="underline text-primary mt-2">
                Tentar novamente
            </button>
        </div>
    )
}
