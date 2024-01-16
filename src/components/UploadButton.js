import { ArrowUpTrayIcon } from '@heroicons/react/20/solid'

function UploadButton() {
  return (
    <li className="col-span-1 flex flex-col justify-center items-center border-2 border-dashed border-gray-300 rounded-md p-4">
      <ArrowUpTrayIcon className="h-8 w-8 text-gray-400 mx-auto" />
      <span className="mt-2 text-center">Upload a book</span>
    </li>
  )
}

export default UploadButton;