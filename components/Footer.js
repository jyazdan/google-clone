import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer className="grid w-full divide-y-[1px] divide-gray-300 bg-gray-100 text-sm text-gray-500">
      <div className="px-8 py-3">
        <p>United States</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-2 grid-flow-row-dense px-8 py-3">
        <div className="flex justify-center md:col-span-2 lg:col-span-1 lg:col-start-2">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jyazdan"
          >
            <FaGithub className="h-5 mr-1 ml-2 text-black cursor-pointer" />
          </a>
          Developed By: Jonathan Yazdanpanah
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/jyazdan"
          >
            <FaLinkedin className="h-5 mr-1 ml-2 text-black cursor-pointer" />
          </a>
        </div>

        <div className="flex justify-center space-x-8 whitespace-nowrap md:justify-self-start">
          <p className="link">Advertising</p>
          <p className="link">Business</p>
          <p className="link">How Search Works</p>
        </div>
        <div className="flex justify-center space-x-8 md:ml-auto">
          <p className="link">Privacy</p>
          <p className="link">Terms</p>
          <p className="link">Settings</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
