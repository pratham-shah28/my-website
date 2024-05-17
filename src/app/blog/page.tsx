import Image from 'next/image'
// import Header from '@/components/header'
// import Intro from '@/components/intro'
// import Projects from '@/components/projects'
import Header from '@/app/blog/components/header'
import Intro from '@/app/blog/components/intro'
import Projects from '@/app/blog/components/projects'

export default function Home() {
  return (
    <main className="bg-white scroll-smooth focus:scroll-auto">
      <Header/>
      <Projects/>
    </main>
  )
}
