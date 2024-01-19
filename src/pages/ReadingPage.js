import { Fragment, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon, ChevronUpIcon } from '@heroicons/react/24/outline'
import Reader from '../components/Reader'
import AssistantTabs from '../components/AssistantTabs'

export default function ReadingPage() {
  const [open, setOpen] = useState(true)
  return (

    <><Reader />

      {/* Button to open the assistant */}
      <button
        className="fixed bottom-5 right-5 bg-blue-300 text-white p-2 rounded-full"
        onClick={() => setOpen(true)}
      >
        <ChevronUpIcon className="h-6 w-6" />
      </button>

      <Transition.Root show={open} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={setOpen}>
          <div className="fixed inset-0" />

          <div className="fixed inset-0 overflow-hidden">
            <div className="absolute inset-0 overflow-hidden">
              <div className="pointer-events-none fixed inset-y-0 right-0 flex w-full pl-10">
                <Transition.Child
                  as={Fragment}
                  enter="transform transition ease-in-out duration-500 sm:duration-900"
                  enterFrom="translate-y-full"
                  enterTo="translate-y-0"
                  leave="transform transition ease-in-out duration-500 sm:duration-700"
                  leaveFrom="translate-y-1/4"
                  leaveTo="translate-y-full"
                >
                  <Dialog.Panel className="pointer-events-auto h-3/4 bottom-0 absolute inset-x-0 border border-gray-200 shadow-2xl">
                    <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-2xl">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                            Assistant
                          </Dialog.Title>
                          <div className="ml-3 flex h-7 items-center">
                            <button
                              type="button"
                              className="relative rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                              onClick={() => setOpen(false)}
                            >
                              <span className="absolute -inset-2.5" />
                              <span className="sr-only">Close panel</span>
                              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="relative mt-6 flex-1 px-4 sm:px-6">{
                        <AssistantTabs />
                      }</div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </div>
        </Dialog>
      </Transition.Root></>

  );
}