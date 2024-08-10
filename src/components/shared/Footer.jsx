import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import Logo from "../../assets/logo.png";

const productsAray = ["Overview", "Features", "Solutions", "Tutorials", "Pricing", "Releases"];
const companyAray = ["About Us", "Careers", "Press", "News", "Media kit", "Contact"];
const resourcesAray = ["Blog", "Newsletter", "Events", "Help centre", "Tutorials", "Support"];
const socialsAray = ["Facebook", "Twitter", "Instagram", "LinkedIn", "YouTube", "GitHub", "AngelList", "Dribble"];
const legalsAray = ["Privacy", "Terms", "Settings", "Cookies", "Licenses", "Contact"];

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-blue-50">
      <div className=" container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <img src={Logo} alt="" />
          </a>
          <p className="mt-2 text-sm text-gray-500">
            Desing amazing digital Experiences tha clreate more happy in the world
          </p>
        </div>
        <div className="flex flex-wrap flex-grow w-full md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          {/* 1st div */}
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-500 tracking-widest text-sm mb-3">Product</h2>
            <nav className="list-none mb-10 space-y-3">
              {productsAray?.map((product, index) => (
                <li key={index}>
                  <a className="text-gray-600 hover:text-gray-800">{product}</a>
                </li>
              ))}
            </nav>
          </div>
          {/* 2nd div */}
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-500 tracking-widest text-sm mb-3">Company</h2>
            <nav className="list-none mb-10 space-y-3">
              {companyAray?.map((product, index) => (
                <li key={index}>
                  <a className="text-gray-600 hover:text-gray-800">{product}</a>
                </li>
              ))}
            </nav>
          </div>
          {/* 3rd div */}
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-500 tracking-widest text-sm mb-3">Resources</h2>
            <nav className="list-none mb-10 space-y-3">
              {resourcesAray?.map((product, index) => (
                <li key={index}>
                  <a className="text-gray-600 hover:text-gray-800">{product}</a>
                </li>
              ))}
            </nav>
          </div>
          {/* 4th div */}
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-500 tracking-widest text-sm mb-3">Social</h2>
            <nav className="list-none mb-10 space-y-3">
              {socialsAray?.map((product, index) => (
                <li key={index}>
                  <a className="text-gray-600 hover:text-gray-800">{product}</a>
                </li>
              ))}
            </nav>
          </div>
          {/* 5th div */}
          <div className="lg:w-1/5 md:w-1/2 w-full px-4">
            <h2 className="title-font font-medium text-slate-500 tracking-widest text-sm mb-3">Legal</h2>
            <nav className="list-none mb-10 space-y-3">
              {legalsAray?.map((product, index) => (
                <li key={index}>
                  <a className="text-gray-600 hover:text-gray-800">{product}</a>
                </li>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <div className="">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">© 2024 Heritage- Nest. All rights researved.</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <FaFacebook className="text-blue-800 text-2xl mx-2" />
            <FaTwitter className="text-blue-800 text-2xl mx-2" />
            <FaLinkedin className="text-blue-800 text-2xl mx-2" />
            <FaInstagram className="text-blue-800 text-2xl mx-2" />
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
