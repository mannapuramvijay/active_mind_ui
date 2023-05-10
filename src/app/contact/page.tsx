import './contact.css';
import ContactCard from '../../components/card';
import Message from './message';

export default function Contact() {
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
        <div className="mr-auto pt-32 sm:pt-48 lg:pt-56 w-full lg:px-8 px-6 h-full">
          <div className='grid gap-2 lg:grid-cols-3'>
            <div>
              <h2 className='font-bold	text-3xl'>Get in touch</h2>
              <p className='mt-4 text-lg'>Have a Project in Mind? Let&apos;s Contact</p>
            </div>
            <div className='col-span-2 grid grid-cols-2 gap-8'>
              <ContactCard header="Reach us" content={[
                { key: "Email", href: "mailto:contact@activemindtechnologies.com", value: "contact@activemindtechnologies.com" },
                { key: "Phone", href: "tel:+15104327320", value: "+1 510-432-7320" }
              ]} />
              <ContactCard header="HR" content={[
                { key: "Email", href: "mailto:hr@activemindtechnologies.com", value: "hr@activemindtechnologies.com" },
                { key: "Phone", href: "tel:+19726035261", value: "+1 (972) 603-5261" }
              ]} />
              <ContactCard header="Location" content={[
                { key: "Email", value: "16609 Garden Drive, Celina" },
                { key: "Phone", value: "TX, 75009" }
              ]} />
              <div />
            </div>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
          <div className='grid gap-2 lg:grid-cols-3'>
            <div>
              <h2 className='font-bold	text-3xl'>Send a message</h2>
              <p className='mt-4 text-lg'>We support businesses through periods of expansion succession, and all other important transitions.</p>
            </div>
            <Message />
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }} />
      </div>
    </>

  )
}