import background from '../../public/background.webp';
import Image from 'next/image';
import './page.css';

export default function Home() {
  return (
    <>
      <div
        className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }} />
      </div>
      <div className='relative min-h-screen'>
        <svg viewBox="0 0 100 100" className='blank-pic' preserveAspectRatio="none" aria-hidden="true"><polygon points="0,0 90,0 50,100 0,100"></polygon></svg>
        <div className="mr-auto py-32 sm:py-48 lg:py-56 lg:w-2/5 w-full lg:px-8 px-6 h-full">
          <div className="text-left lg:m-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">A Digital Agency Shaping Ideas Into Products</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We enable SMEs in making the best use of emerging digital technologies to build stronger capabilities & seize growth opportunities in today’s ever-evolving digital economy.
            </p>
          </div>
        </div>
        <div className='background-drop'>
          <Image className="background-pic"
            src={background}
            alt='Activeminds' />
        </div>
      </div>
    </>
  )
}
