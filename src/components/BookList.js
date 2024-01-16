import React from 'react';
import { EyeIcon, Bars3Icon } from '@heroicons/react/20/solid'
import UploadButton from './UploadButton';

const books = [
  {
    title: 'Book Title',
    author: 'Author Name',
    status: 'Ready',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9Z4eky6zAn1DQV3V3zrR_hhnnfi1Qu2khKbxDDqVJSxYSey2-LHOhkRnGMtN_gzSBMQ&usqp=CAU',
  },
  {
    title: 'Book Title',
    author: 'Author Name',
    status: 'Ready',
    imageUrl:
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZ9Z4eky6zAn1DQV3V3zrR_hhnnfi1Qu2khKbxDDqVJSxYSey2-LHOhkRnGMtN_gzSBMQ&usqp=CAU',
  },
  {
    title: 'Book Title',
    author: 'Author Name',
    status: 'Ready',
    imageUrl:
      'https://bizweb.dktcdn.net/100/197/269/products/muu-hen-ke-ban-noi-cong-so.jpg?v=1537413104890',
  },
  // More books...
]

export default function BookList() {
  return (
    <ul role="list" className="mx-10 my-20 justify-center grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {books.map((book) => (
        <li
          key={book.title}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img className="mx-auto h-54 w-32 aspect-w-2 aspect-h-3 object-cover" src={book.imageUrl} alt="" />
            <h3 className="mt-6 text-sm font-medium text-gray-900">{book.title}</h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Author</dt>
              <dd className="text-sm text-gray-500">{book.author}</dd>
              <dt className="sr-only">Status</dt>
              <dd className="mt-3">
                <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                  {book.status}
                </span>
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href="#"
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EyeIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Read
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href="#"
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <Bars3Icon className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  Options
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
        <UploadButton />
    </ul>
  )
}