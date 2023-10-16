import Image from 'next/image'
import Gen from '@/app/gen'
import Heading from '@/app/heading'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-40">
      <Heading />
     <Gen />
     <p>Dev by Kythonlk</p>
    </main>
  )
}
