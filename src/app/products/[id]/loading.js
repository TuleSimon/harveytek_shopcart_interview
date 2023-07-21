import FilledButton from "@/components/buttons/FilledButton";
import IncrementingButton from "@/components/buttons/IncrementingButton";
import OutlinedButton from "@/components/buttons/OutlinedButton";
import ColorPicker from "@/components/colors/ColorPicker";
import { RiTruckLine } from "react-icons/ri";
import { FcPackage } from "react-icons/fc";
import React from "react";

const images = [0, 1, 2, 3];

async function loading() {


  return (
    <main className="lg:max-w-7x xl:container p-6 lg:px-8 bg-white mx-auto  ">
      <div className="flex min-h-screen flex-col xs:gap-8 gap-16 items-center ">
        

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-24 w-full">
          <div className="flex flex-col gap-6">
            <div className="aspect-square  bg-[#F5F6F6] flex place-content-center rounded-lg p-8 overflow-hidden relative">
             
            </div>

            <div className="grid grid-cols-4 gap-8">
              {images.map((index) => (
                <div
                  key={index}
                  className="aspect-square cursor-pointer hover:border-2 hover:border-primary-200 bg-[#F5F6F6] flex place-content-center rounded-lg p-2 md:py-8 overflow-hidden relative"
                >
                 
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4 xl:w-5/6">
            <p className="text-3xl font-bold text-gray-800 bg-gray-100 w-5/6 h-10">  </p>

            <p className="text-sm font-semibold text-gray-700">
              {" "}
             {" "}
            </p>

            <div className="flex gap-2 bg-gray-100 h-10 w-4/6">
            
            </div>

            <hr className="w-full sm:my-3 my-5 border-gray-200 h-[1px]" />

            <div className="flex flex-col gap-1">
              <p className="text-4xl font-bold text-gray-800 bg-gray-100 w-5/6 h-10">
                {" "}
              </p>
              <p className="text-sm text-[0.89rem] font-semibold  text-gray-800 bg-gray-100 w-2/6 h-4">
              </p>
            </div>

            <hr className="w-full sm:my-3 my-5 border-gray-200 h-[1px]" />

            <div>
              <p className="text-[1.3rem] font-bold text-gray-800 bg-gray-100 w-3/6 h-10">
                {" "}
                
              </p>

              
            </div>

            <hr className="w-full sm:my-3 my-5 border-gray-200 h-[1px]" />

            <div>
              <div className="sm:mt-1 mt-4 flex sm:flex-col sm:gap-2 gap-8 bg-gray-100 w-4/6 h-10">
              

                
              </div>

              <div className="w-full grid md:grid-cols-2 grid-cols-1 gap-6 mt-12">
                <FilledButton
                  title=""
                  hideIcon={true}
                  className="w-full place-content-center py-8 md:py-8 text-base md:text-lg bg-gray-100 "
                />

                <OutlinedButton
                  title=""
                  hideIcon={true}
                  className="w-full place-content-center border-primary-100 py-8 border-[2px] text-primary-100 font-bold text-base bg-gray-100 "
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}

export default loading;
