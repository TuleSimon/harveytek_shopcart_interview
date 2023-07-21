import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [0,1,2,3]

async function getProductDetails(id) {
  const res = await fetch(`https://fakestoreapi.com/products/${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export async function generateMetadata({ params }) {
  // fetch data
  try {
    const productDetails = await getProductDetails(params.id);

    return {
      title: productDetails.title,
      description: productDetails.description,
      favicon: productDetails.image,
    };
  } catch (e) {
    return {
      title: "Product Details",
    };
  }
}

async function Page({ params }) {
  const productDetails = await getProductDetails(params.id);
  const { image, title, description, rating, ratingNum, price } =
    productDetails;

  return (
    <main className="lg:max-w-7x xl:container p-6 lg:px-8 bg-white mx-auto  ">
      <div className="flex min-h-screen flex-col xs:gap-8 gap-16 items-center ">
        <nav className="w-full rounded-md text-gray-400">
          <ol className="list-reset flex">
            <li>
              <Link
                href="/"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                Home
              </Link>
            </li>
            <li>
              <span className="mx-2 ">/</span>
            </li>
            <li>
              <Link
                href="/"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                products
              </Link>
            </li>
            <li>
              <span className="mx-2 ">/</span>
            </li>
            <li>
              <Link
                href="/"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 dark:text-primary-400 dark:hover:text-primary-500 dark:focus:text-primary-500 dark:active:text-primary-600"
              >
                {productDetails.category}
              </Link>
            </li>
            <li>
              <span className="mx-2  ">/</span>
            </li>
            <li className="text-gray-600 font-bold">{productDetails.title}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="flex flex-col gap-6">
            <div className="aspect-square  bg-[#F5F6F6] flex place-content-center rounded-lg p-8 overflow-hidden relative">
              <Image
                src={image}
                width={500}
                height={500}
                alt={title}
                className="w-full h-auto object-contain  hover:scale-110 transition-all ease-in-out duration-500"
              />
            </div>

            <div className="grid grid-cols-4 gap-8">
            
            {images.map((index)=> (
              <div key={index} className="aspect-square cursor-pointer hover:border-2 hover:border-primary-200 bg-[#F5F6F6] flex place-content-center rounded-lg p-2 py-8 overflow-hidden relative">
              <Image
                src={image}
                width={200}
                height={200}
                alt={title}
                className="w-full h-auto object-contain aspect-square hover:scale-110 transition-all ease-in-out duration-500"
              />
            </div>
            ))}

            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
