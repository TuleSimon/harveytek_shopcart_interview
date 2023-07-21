import FilledButton from "@/components/buttons/FilledButton";
import IncrementingButton from "@/components/buttons/IncrementingButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import ColorPicker from "@/components/colors/ColorPicker";
import { RiTruckLine } from "react-icons/ri";
import { FcPackage } from "react-icons/fc";
import Rating from "@/components/rating/Rating";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const images = [0, 1, 2, 3];

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
      icons: {
        icon: productDetails.image,
      },
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
  const { image, title, description, rating, price } = productDetails;

  const { rate, count } = rating;

  return (
    <main className="lg:max-w-7x xl:container p-6 lg:px-8 bg-white mx-auto  ">
      <div className="flex min-h-screen flex-col xs:gap-8 gap-16 items-center ">
        <nav className="w-full rounded-md text-gray-400 text-sm md:text-base ">
          <ol className="list-reset flex flex-wrap">
            <li>
              <Link
                href="/"
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700"
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
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700"
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
                className="text-primary transition duration-150 ease-in-out hover:text-primary-600 focus:text-primary-600 active:text-primary-700 "
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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-24 w-full">
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
              {images.map((index) => (
                <div
                  key={index}
                  className="aspect-square cursor-pointer hover:border-2 hover:border-primary-200 bg-[#F5F6F6] flex place-content-center rounded-lg p-2 md:py-8 overflow-hidden relative"
                >
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

          <div className="flex flex-col gap-4 xl:w-5/6">
            <p className="text-3xl font-bold text-gray-800"> {title} </p>

            <p className="text-sm font-semibold text-gray-700">
              {" "}
              {description}{" "}
            </p>

            <div className="flex gap-2">
              <Rating rating={rate} />
              <p className="text-sm text-gray-700"> ({count}) </p>
            </div>

            <hr className="w-full sm:my-3 my-5 border-gray-200 h-[1px]" />

            <div className="flex flex-col gap-1">
              <p className="text-4xl font-bold text-gray-800">
                {" "}
                ${price} or 99.9/month
              </p>
              <p className="text-sm text-[0.89rem] font-semibold  text-gray-800">
                Suggested payments with 6 months special financing
              </p>
            </div>

            <hr className="w-full sm:my-3 my-5 border-gray-200 h-[1px]" />

            <div>
              <p className="text-[1.3rem] font-bold text-gray-800">
                {" "}
                Choose a Color{" "}
              </p>

              <ColorPicker />
            </div>

            <hr className="w-full sm:my-3 my-5 border-gray-200 h-[1px]" />

            <div>
              <div className="sm:mt-1 mt-4 flex sm:flex-col sm:gap-2 gap-8">
                <IncrementingButton />

                <p className="text-base text-gray-700 font-semibold">
                  {" "}
                  Only <span className="text-[#FF9D56]">
                    12 items
                  </span> Left! <br /> Don&apos;t miss it.
                </p>
              </div>

              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6 mt-12">
                <FilledButton
                  title="Buy now"
                  hideIcon={true}
                  className="w-full place-content-center py-4 md:py-4 text-base md:text-lg"
                />

                <OutlinedButton
                  title="Add to cart"
                  hideIcon={true}
                  className="w-full place-content-center border-primary-100 py-4 border-[2px] text-primary-100 font-bold text-base"
                />
              </div>
            </div>

            <div className="border border-gray-200 rounded-md w-full mt-6 ">
              <div className="flex gap-4 m-6">
                <RiTruckLine className="text-[#f38b41] text-3xl font-bold h-8" />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-xl text-gray-800">
                    {" "}
                    Free Delivery{" "}
                  </p>
                  <p className="text-base font-semibold text-gray-600 underline underline-offset-2">
                    {" "}
                    Enter your Postal Code for Delivery Availability{" "}
                  </p>
                </div>
              </div>

              <hr className="border-gray-100 w-full border-[0.3px] my-4" />

              <div className="flex gap-4 m-6">
                <FcPackage className="text-[#f38b41] text-3xl font-bold h-8" />
                <div className="flex flex-col gap-2">
                  <p className="font-bold text-xl text-gray-800">
                    {" "}
                    Return Delivery{" "}
                  </p>
                  <p className="text-base font-semibold text-gray-600 ">
                    {" "}
                    Free 30 Days Return delivery.{" "}
                    <span className="underline underline-offset-2">
                      {" "}
                      Details
                    </span>{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Page;
