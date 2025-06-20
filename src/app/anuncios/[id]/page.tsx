// src/app/anuncios/[id]/page.tsx
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import DetailClient from '@/components/DetailClient'
import { fetchAnuncioDetail } from '@/services/anuncioService'
import { notFound } from 'next/navigation'

interface Props {
    params: Promise<{ id: string }>
}

export default async function AnuncioPage({ params }: Props) {
    const { id } = await params
    let anuncio

    try {
        anuncio = await fetchAnuncioDetail(Number(id))
    } catch (err: any) {
        if (err instanceof Response && err.status === 404) return notFound()
        throw err
    }

    return (
        <>
            <Header />

            <main className="max-w-7xl mx-auto px-4 lg:px-8 py-8 space-y-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* COLUNA ESQUERDA */}
                    <section className="lg:col-span-2 space-y-6">
                        <DetailClient anuncio={anuncio} />
                    </section>

                    {/* COLUNA DIREITA */}
                    <aside className="lg:col-span-1 bg-white p-6 rounded-xl shadow-md space-y-6">
                        {/* Preço */}
                        <h2 className="text-3xl font-bold text-primary">
                            {anuncio.preco.toLocaleString('pt-BR', {
                                style: 'currency',
                                currency: 'BRL',
                            })}
                        </h2>

                        {/* Botão parcelas (exemplo WebMotors) */}
                        <button className="w-full py-3 bg-red-600 text-white font-medium rounded-lg">
                            Ver parcelas
                        </button>

                        {/* Formulário de contato */}
                        <form className="space-y-4">
                            {['Nome', 'E-mail', 'Telefone'].map((label) => (
                                <div key={label}>
                                    <label className="block text-sm font-medium">{label}*</label>
                                    <input
                                        type={label === 'E-mail' ? 'email' : 'text'}
                                        className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-red-500 focus:border-red-500"
                                        required
                                    />
                                </div>
                            ))}

                            <div>
                                <label className="block text-sm font-medium">Mensagem*</label>
                                <textarea
                                    rows={4}
                                    className="mt-1 w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-red-500 focus:border-red-500"
                                >
                                    Olá, tenho interesse no veículo. Por favor entre em contato.
                                </textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-3 bg-black text-white font-medium rounded-lg"
                            >
                                Enviar mensagem
                            </button>
                        </form>
                    </aside>
                </div>
            </main>

            <Footer />
        </>
    )
}
