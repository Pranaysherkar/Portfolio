import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-900 via-indigo-900 to-purple-900 text-white px-6 py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row md:items-start justify-between gap-10 md:gap-0 lg:gap-52">
        
        {/* Left Section */}
        <div className="flex flex-col gap-8 md:gap-40 w-full md:w-1/3">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-wider">
            Pranay Sherkar.
          </h1>
          <div className="text-sm tracking-wider text-violet-200">
            Design & built by @Pranay
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-2/3">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-10 md:gap-16 tracking-widest">
            
            {/* Socials */}
            <div className="flex flex-col gap-4 capitalize">
              <h3 className="font-semibold text-base sm:text-lg">Socials.</h3>
              <div className="flex flex-col gap-2 [&>*]:hover:text-violet-300 text-sm sm:text-base">
                <a href="https://github.com/Pranaysherkar" target="_blank" rel="noopener noreferrer">github</a>
                <a href="https://www.linkedin.com/in/pranay-sherkar-6a0975234/" target="_blank" rel="noopener noreferrer">linkedin</a>
                <a href="https://x.com/PranaySher14485" target="_blank" rel="noopener noreferrer">twitter (X)</a>
              </div>
            </div>

            {/* Sitemap */}
            <div className="flex flex-col gap-4 capitalize">
              <h3 className="font-semibold text-base sm:text-lg">Sitemap.</h3>
              <div className="flex flex-col gap-2 [&>*]:hover:text-violet-300 text-sm sm:text-base">
                <a href="#">Home</a>
                <a href="#">About</a>
                <a href="#">Projects</a>
                <a href="#">Connect</a>
              </div>
            </div>

            {/* Location */}
            <div className="flex flex-col gap-4 capitalize">
              <h3 className="font-semibold text-base sm:text-lg">Location.</h3>
              <p className="leading-7 text-sm sm:text-base">
                Ahilyanager, <br />
                Parner, Maharashtra <br />
                India - 414302
              </p>
            </div>
          </div>

          {/* Contact & Copyright */}
          <div className="flex flex-col sm:flex-row justify-between mt-10 text-sm text-gray-300 gap-4 sm:gap-0">
            <p className="text-center sm:text-left">pranaysherkar19@gmail.com</p>
            <p className="text-center sm:text-right">
              &copy; {new Date().getFullYear()} Pranay Sherkar. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
