import React from "react";
import infoIcon from '../../assets/information.png'
import parse from 'html-react-parser';

export default function Drawer({ prop, isOpen, setIsOpen }) {
 
  return (
    <div
      className={
        " fixed w-screen overflow-hidden z-100 bg-gray-900 bg-opacity-25 inset-0 transform ease-in-out " +
        (isOpen
          ? " transition-opacity opacity-100 duration-500 translate-x-0  "
          : " transition-all delay-500 opacity-0 translate-x-full  ")
      }
    >
      <section
        className={
          " w-full md:w-1/2 right-0 absolute bg-white h-full shadow-2xl delay-400 duration-500 ease-in-out transition-all transform  " +
          (isOpen ? " translate-x-0 " : " translate-x-full ")
        }
      >
        <div className="relative w-full pb-10 flex flex-col space-y-6 overflow-y-scroll h-full">
          <div className="px-5 flex justify-between w-full items-center bg-black">
              <header className="p-4 font-bold text-xl text-white flex items-center">
                <img src={infoIcon} width="32" className="mr-2"/>
                Thông tin
              </header>
              <button type="button"   onClick={() => {setIsOpen(false);}} className="text-white bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex items-center justify-center dark:hover:bg-gray-600 dark:hover:text-white" >
                  <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
                  </svg>
                  <span className="sr-only">Close menu</span>
              </button>
          </div>
          <div className="hoat-chat-content px-6 md:px-8 py-2">
              <h3 className="hoat-chat-title text-3xl font-bold text-secondary-600 text-center w-full">
                  {prop.ten_hoat_chat}
              </h3>

              <div className="mt-5 markdown-parser ">
                {/*<BlocksRenderer content={prop.chi_tiet} />*/}
              </div>
              { prop.hoatchat_chitiet ? 
                  <div className='markdown-parser'>
                      {parse(prop.hoatchat_chitiet)}
                  </div> 
                  : 
                  null
              }

          </div>

        </div>
      </section>
      <section
        className=" w-screen h-full cursor-pointer "
        onClick={() => {
          setIsOpen(false);
        }}
      ></section>
    </div>
  );
}
