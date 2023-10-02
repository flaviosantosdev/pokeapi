import { Hero } from '@/components/Hero'
import { Header } from '@/components/Header'
import { Main } from '@/components/Main'
import { Footer } from '@/components/Footer'
import { VidePokemon } from '@/components/VideoPokemon'
import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Toolzz.me | PokeAPI',
  description: 'Toolzz.me | PokeAPI',
}

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Main />
      <VidePokemon />
      <Footer />
    </>
  )
}
