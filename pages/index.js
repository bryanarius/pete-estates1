import Head from 'next/head';
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillInstagram} from 'react-icons/ai'
import Image from "next/image"
import pete from "../public/pete.png"


export default function Home() {
  return (
    <div>
      <Head>
        <title>Pete Estates</title>
        <meta name="description" content="Generated by create next app"/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <main className="bg-white px-10">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className='text-xl font-burtons'>Pete Estates</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill className='cursor-pointer text-2xl'/>
              </li>
              <li>
                <a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">About Me</a>
              </li>
            </ul>
          </nav>
          <div className='text-center p-10 py-10'>
            <h2 className="text-5xl py-2 text-teal-600 font-medium">Petrus Francois</h2>
            <h3 className='text-2xl py-2'>Real Estate Investor</h3>
            <p className='text-md py-5 leading-8 text-gray-800'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam tincidunt ipsum a lectus auctor suscipit. Sed consequat nisi quis dapibus tincidunt. Donec vel finibus turpis.</p>
          </div>
          <div className="text-5xl flex justify-center text-grey-600">
            <AiFillInstagram/>
          </div>
          <div className="relative mx-auto rounded-full w-80 h-80 mt-20 ">
            <Image src={pete}/>
          </div>
        </section>
      </main>
    </div>
  )
}
