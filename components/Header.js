import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import Avatar from "./Avatar";
import HeaderOptions from "./HeaderOptions";

function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault()

    const term = searchInputRef.current.value;

    if(!term) return;

    router.push(`/search?term=${term}`)
  }

  return (
    <header className="sticky top-0 bg-white">
      <div className="flex w-full p-6 items-center">
      {/* eslint-disable-next-line jsx-a11y/alt-text */}
      <Image
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
        height={40}
        width={120}
        className="cursor-pointer"
        onClick={() => router.push("/")}
      />

      <form className="flex px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full flex-grow shadow-lg max-w-3xl items-center">
        <input
          className="flex-grow w-full focus:outline-none"
          ref={searchInputRef}
          type="text"
        />
        <XIcon 
        className="h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-200 transform hover:scale-125" 
        onClick={() => searchInputRef.current.value = ''}/>
        <MicrophoneIcon className="h-6 mr-3 hidden sm:inline-flex text-blue-500 border-l-2 pl-4 border-gray-300 cursor-pointer"/>
        <SearchIcon className="h-6 text-blue-500 hidden sm:inline-flex cursor-pointer"/>
        <button hidden type="submit" onClick={search}>Search</button>
      </form>
      <Avatar
       className='ml-auto'
       url='https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80' />
      </div>

      {/* Header Options */}
      <HeaderOptions />
    </header>
  );
}

export default Header;
