import Header from '@/components/Header';
import Hero from '@/components/Hero';
import CarList from '@/components/CarList';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="p-8 space-y-4">
      <div className="bg-red-500 text-white p-4">Deve ficar vermelho (bg-red-500)</div>
      <div className="bg-primary text-white p-4">Deve ficar vermelho (bg-primary)</div>
    </div>
  );
}