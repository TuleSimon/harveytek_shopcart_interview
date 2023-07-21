'use client'

import { Fragment, useState } from "react";
import {FiUser} from "react-icons/fi"
import {RiShoppingCartLine} from "react-icons/ri"
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";

const products = [
  {
    name: "Furniture",
    description: "240 items Available",
    href: "#",
    icon: "/furniturepng.png",
  },
  {
    name: "Handbag",
    description: "240 items Available",
    href: "#",
    icon: "/handbag.png",
  },
  {
    name: "Shoe",
    description: "240 items Available",
    href: "#",
    icon: "/shoe.png",
  },
  {
    name: "Headphones",
    description: "240 items Available",
    href: "#",
    icon: "/headphone.png",
  },
  {
    name: "Laptop",
    description: "240 items Available",
    href: "#",
    icon: "/laptop.png",
  },
  {
    name: "Book",
    description: "240 items Available",
    href: "#",
    icon: "/book.png",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {

  return (
    <header className="bg-white ">
      <div className="bg-primary-100 z-20 p-2 w-6/6 text-gray-100 text-xs">
        <div className="container mx-auto md:gap-0 gap-2 md:flex grid grid-cols-1 place-items-center place-content-around ">
          <p className="flex place-items-center gap-1 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-3 h-3"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
              />
            </svg>
            +001234567890{" "}
          </p>

          <div className="hidden md:flex gap-2">
            <p> Get 50% Off on Selected Items </p>
            <p> | </p>
            <p> Shop Now </p>
          </div>

          <div className="flex gap-8 ">
            <p className="flex gap-2">
              {" "}
              Eng <ChevronDownIcon className="h-4 w-4 text-white font-bold" />{" "}
            </p>
            <p className="flex gap-2">
              {" "}
              Location{" "}
              <ChevronDownIcon className="h-4 w-4 text-white font-bold" />{" "}
            </p>
          </div>
        </div>
      </div>
      <nav
        className="mx-auto z-20 flex lg:gap-16 xl:gap-24 lg:max-w-7x xl:container items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex">
          <a href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <Image
              className="h-12 w-auto"
              src="/logo.svg"
              alt="Logo"
              width={180}
              height={37}
              priority
            />
            {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" /> */}
          </a>
        </div>
        <div className="flex lg:hidden">
          <Popover className="relative z-10">
            {({ open }) => (
              <>
                <Popover.Button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                  
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-500"
                  enterFrom="opacity-0 -translate-y-[50%] z-0"
                  enterTo="opacity-100 translate-y-0 z-10"
                  leave="transition ease-in duration-250"
                  leaveFrom="opacity-100 translate-y-0 z-10"
                  leaveTo="opacity-0 -translate-y-[50%] z-0"
                >
                  <Popover.Panel className="absolute -right-[100%] top-full mt-10 w-screen max-w-4xl overflow-hidden rounded-xl shadow-md bg-white ">
                    <div className="p-6 gap-4 flex flex-col place-content-center place-items-center">
                      <Disclosure>
                        {({ open }) => (
                          <>
                            <Disclosure.Button
                              className={` flex gap-1  ${
                                open
                                  ? " w-[60%] gap-4 place-content-between"
                                  : ""
                              } place-items-center font-medium text-gray-900`}
                            >
                              Category
                              <ChevronDownIcon
                                className={`${
                                  open ? "rotate-180 transform" : ""
                                } h-5 w-5 text-outline-100`}
                              />
                            </Disclosure.Button>

                            <Disclosure.Panel className="text-gray-500 mt-4">
                              <p className=" font-bold text-gray-900 text-lg ">
                                Popular Categories
                              </p>

                              <hr className="bg-gray-400 h-[1px] my-6" />

                              <div className="flex flex-col gap-4 ">
                                {products.map((item) => (
                                  <div
                                    key={item.name}
                                    className="group relative flex gap-2 items-center rounded-lg p-2 text-sm leading-6 bg-gray-100"
                                  >
                                    <Image
                                      className="h-14 w-14"
                                      src={item.icon}
                                      alt={item.name}
                                      width={180}
                                      height={180}
                                    />

                                    <div className="flex-auto ml-2">
                                      <a
                                        href={item.href}
                                        className="block font-semibold text-gray-900 hover:text-outline-100 text-base"
                                      >
                                        {item.name}
                                        <span className="absolute inset-0" />
                                      </a>
                                      <p className="mt-[2px] text-gray-600">
                                        {item.description}
                                      </p>
                                    </div>
                                  </div>
                                ))}
                              </div>
                            </Disclosure.Panel>
                          </>
                        )}
                      </Disclosure>

                      <a
                        href="#"
                        className="text-base leading-6 text-gray-800 font-medium"
                      >
                        Deals
                      </a>
                      <a
                        href="#"
                        className="text-base  leading-6 text-gray-800 font-medium"
                      >
                        What's New
                      </a>
                      <a
                        href="#"
                        className="text-base  leading-6 text-gray-800 font-medium"
                      >
                        Delivery
                      </a>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>
        </div>
        <Popover.Group className="hidden lg:flex lg:gap-6 xl:gap-12 text-gray-800  font-medium">
          <Popover className="relative">
            {({ open }) => (
              <>
                <Popover.Button
                  className={`flex relative group items-center gap-x-1 text-base leading-6 text-gray-800 font-medium after:absolute after:-bottom-2 after:left-0 after:w-full  hover:after:h-[3px] after:z-40 
              hover:after:bg-outline-100 transition-all ease-in-out duration-700 focus:outline-none ${
                open ? "after:bg-outline-100 after:h-[3px]" : "after:h-0"
              }`}
                >
                  Category
                  <ChevronDownIcon
                    className={`h-5 w-5 flex-none transition-all duration-200 group-hover:text-outline-100  ease-linear ${
                      open ? " text-outline-100 rotate-180" : "text-gray-400"
                    }`}
                    aria-hidden="true"
                  />
                </Popover.Button>

                <Transition
                  as={Fragment}
                  enter="transition ease-out duration-200"
                  enterFrom="opacity-0 translate-y-1"
                  enterTo="opacity-100 translate-y-0"
                  leave="transition ease-in duration-150"
                  leaveFrom="opacity-100 translate-y-0"
                  leaveTo="opacity-0 translate-y-1"
                >
                  <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-4xl overflow-hidden rounded-b-xl shadow-md bg-white ">
                    <div className="p-6 flex flex-col">
                      <p className=" font-bold text-gray-900 text-lg ">
                        Popular Categories
                      </p>

                      <hr className="w-full bg-gray-400 h-[1px] my-4" />

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {products.map((item) => (
                          <div
                            key={item.name}
                            className="group relative flex gap-2 items-center rounded-lg p-4 pr-40 text-sm leading-6 bg-gray-100"
                          >
                            <Image
                              className="h-12 w-12"
                              src={item.icon}
                              alt={item.name}
                              width={180}
                              height={180}
                            />

                            <div className="flex-auto">
                              <a
                                href={item.href}
                                className="block font-semibold text-gray-900 hover:text-outline-100 text-base"
                              >
                                {item.name}
                                <span className="absolute inset-0" />
                              </a>
                              <p className="mt-[2px] text-gray-600">
                                {item.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Popover.Panel>
                </Transition>
              </>
            )}
          </Popover>

          <a href="#" className="text-base leading-6 hover:text-gray-500">
            Deals
          </a>
          <a
            href="#"
            className="text-base  leading-6 hover:text-gray-500"
          >
            What's New
          </a>
          <a
            href="#"
            className="text-base  leading-6 hover:text-gray-500"
          >
            Delivery
          </a>
        </Popover.Group>

        <div className=" lg:block relative hidden flex-1 grow">
        <input
                  type="text"
                  name="search"
                  id="search"
                  placeholder="search product"
                  autoComplete="given-name"
                  className="block max-w-lg px-4 lg:pr-10 xl:pr-16 w-full rounded-full border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset hover:ring-transparent focus:outline-none focus:ring-primary-100 ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6"
                />

<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className=" w-6 h-6 absolute top-[17%] lg:right-2  text-gray-600">
  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
</svg>

        </div>

        <div className="hidden lg:flex lg:justify-end lg:gap-4">
          <a
            href="#"
            className="text-sm flex place-items-center font-semibold leading-6 text-gray-700"
          >
            <FiUser className="text-2xl text-gray-900 mr-2"/> Account
          </a>

          <a
            href="#"
            className="text-sm flex place-items-center font-semibold leading-6 text-gray-700"
          >
            <RiShoppingCartLine className="text-2xl text-gray-900 mr-2"/> Cart
          </a>

        </div>
      </nav>
    </header>
  );
}
