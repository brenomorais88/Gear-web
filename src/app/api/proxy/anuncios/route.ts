import { NextResponse } from 'next/server';
import axios from 'axios';

export async function POST() {
    try {
        const apiResponse = await axios.post('http://89.116.186.185:8081/api/Anuncio/0', {});
        return NextResponse.json(apiResponse.data);
    } catch (error: any) {
        console.error('Erro no proxy da API:', error);
        return new NextResponse('Erro ao buscar anúncios', { status: 500 });
    }
}
