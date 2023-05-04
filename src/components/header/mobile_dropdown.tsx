import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { map } from 'lodash';

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function MobileDropdown(props: any) {
  return (
    <Disclosure as="div" className="-mx-3">
      {({ open }) => (
        <>
          <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 hover:bg-gray-50">
            {props.name}
            <ChevronDownIcon
              className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
              aria-hidden="true" />
          </Disclosure.Button>
          <Disclosure.Panel className="mt-2 space-y-2">
            {map(props.elements, (item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                <div className="flex w-full flex-row rounded-lg group-hover:bg-white">
                  <div><item.icon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600 pr-2" aria-hidden="true" /></div>
                  <div> {item.name}</div>
                </div>
              </Disclosure.Button>
            ))}
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}