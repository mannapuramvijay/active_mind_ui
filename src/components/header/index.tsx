"use client"
import { useState } from 'react';
import { Dialog, Popover } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import companyLogo from '../../../public/logo-14.png';
import Image from 'next/image';
import Link from 'next/link';
import navigation from './navigation';
import PopoverMenu from './pop_dropdown';
import MobileDropdown from './mobile_dropdown';
import { map, isEmpty } from 'lodash';

const verbiage = {
  companyName: 'Activeminds Technologies',
  openMain: 'Open main menu',
  login: 'Log in',
  closeMain: 'Close menu'
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">{verbiage.companyName}</span>
            <Image
              className="h-11 w-auto"
              src={companyLogo}
              alt={verbiage.companyName} />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}>
            <span className="sr-only">{verbiage.openMain}</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          {map(navigation, (item, idx) => !isEmpty(item.nested)
            ? <PopoverMenu name={item.name} elements={item.nested} key={idx} />
            : <Link href={item.href as string} key={idx} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </Link>)}
        </Popover.Group>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link href="/login" className="text-sm font-semibold leading-6 text-gray-900">
            {verbiage.login} <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </nav>
      <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">{verbiage.companyName}</span>
              <Image
                className="h-11 w-auto"
                src={companyLogo}
                alt={verbiage.companyName} />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)} >
              <span className="sr-only">{verbiage.closeMain}</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {map(navigation, (item, idx) => !isEmpty(item.nested)
                  ? <MobileDropdown name={item.name} elements={item.nested} key={idx} />
                  : <Link href={item.href as string} key={idx} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                    {item.name}
                  </Link>)}
              </div>
              <div className="py-6">
                <Link
                  href="/login"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                  {verbiage.login}
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}