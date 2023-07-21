"use client"; // Error components must be Client Components

import FilledButton from "@/components/buttons/FilledButton";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="font-bold text-primary-100 text-6xl">404</p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Product Details not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the product you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/">
              <FilledButton hideIcon={true} title="Go back home" className="px-4 py-2"/>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
