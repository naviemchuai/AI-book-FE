import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid';
import ChapterTool from './ChapterTool.js';

export default function BookContent() {
  return (
    <div className="bg-white py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="mt-2 text-4xl font-bold tracking-tight text-gray-900">Linear Algebra Example Textbook</h1>
        <p className="my-6 text-base font-semibold leading-7 text-indigo-600">Book Author: Ivan Nguyen</p>
        <p className="mt-4 text-2xl font-semibold text-gray-900">Chapter 1: Introduction</p>
        <ChapterTool />
        <p className="mt-6 leading-8">
          Welcome to the captivating realm of Linear Algebra—an elegant and powerful mathematical discipline that unlocks the secrets of vector spaces, linear transformations, and their applications across diverse domains. Prepare to embark on an enlightening journey into the world of Linear Algebra, where mathematical beauty meets practical utility.
        </p>
        <div className="mt-10">
          <p>
            Linear Algebra is not merely an academic subject; it's a key that opens doors to understanding and solving real-world problems. From engineering to computer science, data analysis to quantum mechanics, this book will guide you through the fundamentals and applications of Linear Algebra.
          </p>
          <ul role="list" className="mt-8 space-y-8 text-gray-600">
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Chapter Highlights</strong>:
                <br />
                - The Beauty of Vectors and Scalars
                <br />
                - Mastering Matrix Operations
                <br />
                - Illuminating Eigenvalues and Eigenvectors
              </span>
            </li>
            <li className="flex gap-x-3">
              <CheckCircleIcon className="mt-1 h-5 w-5 flex-none text-indigo-600" aria-hidden="true" />
              <span>
                <strong className="font-semibold text-gray-900">Why This Book?</strong>:
                <br />
                In today's data-driven world, Linear Algebra is the cornerstone of mathematical problem-solving. This book equips you with the knowledge and skills to decipher complex systems, make informed decisions, and drive innovation.
              </span>
            </li>
          </ul>
          <p className="mt-8">
            As you turn the pages of this book, you'll uncover the beauty of vectors, matrices, and linear transformations. You'll witness how these concepts shape the digital world, from computer graphics rendering to artificial intelligence. Whether you're a student, an engineer, or a curious mind, Linear Algebra will become your trusted companion in your mathematical journey.
          </p>
          <h2 className="mt-16 text-3xl font-bold tracking-tight text-gray-900">Chapter 2: The Elegance of Vectors</h2>
          <ChapterTool />
          <p className="mt-6">
            In this chapter, we delve into the essence of vectors and scalars. Vectors, with their direction and magnitude, are the building blocks of Linear Algebra. Learn to harness their power in representing physical quantities, modeling phenomena, and solving real-world problems.
          </p>
          <figure className="mt-10 border-l border-indigo-600 pl-9">
            <blockquote className="font-semibold text-gray-900">
              <p>
                “Vectors are the poets of mathematics, silently narrating stories of direction and magnitude, guiding us through the intricacies of space and transformation.”
              </p>
            </blockquote>
            <figcaption className="mt-6 flex gap-x-4">
              <img
                className="h-6 w-6 flex-none rounded-full bg-gray-50"
                src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
              />
              <div className="text-sm leading-6">
                <strong className="font-semibold text-gray-900">Maria Hill</strong> – Mathematician & Philosopher
              </div>
            </figcaption>
          </figure>
          <p className="mt-10">
            As you journey through this chapter, you'll gain profound insights into vector operations, dot and cross products, and their applications in physics, engineering, and computer science. These mathematical constructs will soon become your trusted companions in solving multidimensional puzzles.
          </p>
        </div>
        <figure className="mt-16">
          <img
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&w=1310&h=873&q=80&facepad=3"
            alt=""
          />
          <figcaption className="mt-4 flex gap-x-2 text-xl leading-6 text-gray-500">
            <InformationCircleIcon className="mt-0.5 h-6 w-6 flex-none text-gray-300" aria-hidden="true" />
            Explore the symphony of vectors and their applications.
          </figcaption>
        </figure>
        <div className="mt-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">Chapter 3: Mastering Matrix Magic</h2>
          <ChapterTool />
          <p className="mt-6">
            Matrices are the quintessential tool of Linear Algebra. In this chapter, we journey deep into the world of matrix operations. Discover how matrices are used to represent transformations, solve systems of equations, and decode the secrets of quantum mechanics.
          </p>
          <p className="mt-8">
            We'll uncover practical examples of matrix manipulations, from enhancing images to optimizing data analysis. By the end of this chapter, you'll wield matrix algebra like a wizard, unlocking new dimensions of problem-solving.
          </p>
        </div>
      </div>
    </div>
  );
}
