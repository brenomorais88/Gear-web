// src/services/anuncioService.ts
import { AnuncioDetail } from '@/types/AnuncioDetail'

const API_BASE = process.env.NEXT_PUBLIC_API_BASE_URL

export async function fetchAnuncioDetail(id: number) {
    const url = `${API_BASE}:8081/api/Anuncio/obteranuncio/${id}/1`
    console.log('🔍 [fetchAnuncioDetail] URL →', url)

    const res = await fetch(url, { cache: 'no-store' })

    if (res.status === 404) {
        throw res
    }
    if (!res.ok) {
        throw new Error(`Erro ${res.status} ao buscar anúncio`)
    }

    return res.json() // retorna o JSON do anúncio
}
