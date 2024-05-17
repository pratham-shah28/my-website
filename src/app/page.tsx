import Image from 'next/image'
import Header from '@/components/header'
import Intro from '@/components/intro'
import Projects from '@/components/projects'
import Experience from '@/components/experience'

export default function Home() {
  return (
    <main className=" w-full h-full text-primary-100  scroll-smooth focus:scroll-auto">
      <Header/>
      <Intro/>
      <Experience/>
      <Projects/>
      <Projects/>
    </main>
  )
}
