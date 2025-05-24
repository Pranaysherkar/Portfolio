import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-auto bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white px-10 py-2 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 py-3">
        <div className="leftDiv flex flex-col gap-40">
          <h1 className="text-4xl font-semibold tracking-wider">
            Pranay Sherkar.
          </h1>
          <div className="text-sm tracking-wider text-violet-200 ">
            Design & built by @Pranay
          </div>
        </div>

        <div className="rightDiv w-1/2 ">
          <div className="flex justify-between items-start tracking-widest">
            <div className="Social flex flex-col gap-8  capitalize">
              <h3 className="font-semibold">Socials.</h3>

              <div className="flex flex-col gap-2 [&>*]:hover:text-violet-300 ">
                <a
                  href="https://github.com/Pranaysherkar"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  github
                </a>
                <a
                  href="https://www.linkedin.com/in/pranay-sherkar-6a0975234/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Linkedin
                </a>
                <a href="https://x.com/PranaySher14485" target="_blank" rel="noopener noreferrer">
                  twitter (X)
                </a>
              </div>
            </div>

            <div className="Links flex flex-col gap-8  capitalize">
              <h3 className="font-semibold">Sitemap.</h3>

              <div className="flex flex-col gap-2 [&>*]:hover:text-violet-300">
                <a href="http://">Home</a>
                <a href="http://">About</a>
                <a href="http://">Prjects</a>
                <a href="http://">Connect</a>
              </div>
            </div>

            <div className="Links flex flex-col gap-8 capitalize">
              <h3 className="font-semibold">Location.</h3>

              <p className="leading-8 ">
                Ahilyanager, <br />
                Parner, Maharashtra <br />
                India - 414302{" "}
              </p>
            </div>
          </div>
          <div className="flex text-sm text-gray-300 mt-8 gap-20 tracking-wider">
            <h2>pranaysherkar19@gmail.com</h2>
            <div className="">
              &copy; {new Date().getFullYear()} Pranay Sherkar. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
