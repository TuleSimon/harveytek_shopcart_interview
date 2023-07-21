import Head from "next/head";
import Image from "next/image";
import { Metadata } from "next";
import FilledChips from "@/components/chips/FilledChips";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/20/solid";
import OutlinedChips from "@/components/chips/OutlinedChips";
import CategoriesCard from "@/components/cards/CategoriesCard";
import ProductsCard from "@/components/cards/ProductsCard";

export const metadata = {
  title: "Shop Cart",
};

const TopCategories = [
  {
    name: "Furniture",
    href: "#",
    icon: "/Furniture-min.png",
  },
  {
    name: "Hand Bag",
    href: "#",
    icon: "/handbag-min.png",
  },
  {
    name: "Books",
    href: "#",
    icon: "/books-min.png",
  },
  {
    name: "Tech",
    href: "#",
    icon: "/tech-min.png",
  },
  {
    name: "Sneakers",
    href: "#",
    icon: "/sneakers-min.png",
  },
  {
    name: "Travel",
    href: "#",
    icon: "/travel-min.png",
  },
];

const getProducts = async () => {
  const data = await fetch("https://fakestoreapi.com/products")
  if (!data.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data')
  }
  const posts = await data.json();
 
  return posts;
};

export default async function Home() {

  const products = await getProducts()

  return (
    <main className="lg:max-w-7x xl:container p-6 lg:px-8 bg-white mx-auto  ">
      <div className="flex min-h-screen flex-col xs:gap-8 gap-16 items-center ">
        <div className="bg-[#FBF0E4] w-full relative flex place-items-center  sm2:px-7 sm2:pl-10 px-14 pl-20 xs:px-2 xs:pl-2">
          <div className="sm:w-6/6 sm2:w-5/6 lg:w-3/6 w-4/6 py-8 flex flex-col">
            <p className="xs:text-2xl sm:text-5xl text-6xl font-bold leading-tight mt-4 text-primary-100 ">
              Grab Upto 50% Off on Selected Headphone{" "}
            </p>

            <button className="mt-10 xs:mt-5 xs:mb-4 mb-12 bg-primary-100 rounded-full text-white text-base w-fit xs:w-full xs:px-6  px-12 xs:py-3 py-4">
              Buy now
            </button>
          </div>

          <Image
            src="/banner.png"
            alt="banner"
            className="h-[340px] hidden lg:block absolute bottom-0 lg:right-20 md:right-2 xl:right-44 bg-red-200 w-auto  "
            width={600}
            height={600}
          />
        </div>

        <div className="flex flex-wrap gap-4 w-full justify-start">
          <FilledChips title="Headphone Type" className="xs:hidden" />
          <FilledChips title="Price" className="xs:hidden" />
          <FilledChips title="Review" className="xs:hidden" />
          <FilledChips title="Color" className="xs:hidden" />
          <FilledChips title="Material" className="xs:hidden" />
          <FilledChips title="Offer" className="xs:hidden" />
          <FilledChips title="All Filters" Icon={AdjustmentsHorizontalIcon} />

          <OutlinedChips className="w-fit lg:ml-auto" title="Sort by" />
        </div>

        <div className="flex flex-col w-full">
          <p className="text-gray-900 text-3xl sm:text-2xl font-bold">
            {" "}
            Shop Our Top Categories{" "}
          </p>

          <div className="grid w-full overflow-hidden sm:grid-cols-2 grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xs:gap-2 gap-8 mt-8 xs:mt-2">
            {TopCategories.map((category) => {
              return (
                <CategoriesCard
                  key={category.name}
                  title={category.name}
                  image={category.icon}
                />
              );
            })}
          </div>
        </div>

        <div className="flex flex-col w-full">

          <p className="text-gray-900 text-3xl sm:text-2xl font-bold"> Products </p>

          <div className="grid w-full overflow-hidden sm2:grid-cols-2 md:grid-cols-3 grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 sm:gap-y-6 gap-4 lg:gap-6 mt-8 xs:mt-2">
            {products.map((product) => {
              return (
                <ProductsCard
                  key={product.id}
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating.rate}
                  ratingNum={product.rating.count}
                  description={product.description}
                  id = {product.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
