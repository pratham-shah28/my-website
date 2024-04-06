import Image from 'next/image'
import Header from '@/components/header'
import Intro from '@/components/intro'

export default function Home() {
  return (
    <main className="bg-red-200 scroll-smooth focus:scroll-auto">
      <Header/>
      <Intro/>      
    </main>
  )
}
