import React from "react";

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
        <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
          <div className="md:5/12 lg:w-5/12">
            <img
              src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
              alt="image"
            />
          </div>
          <div className="md:7/12 lg:w-6/12">
            <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
              About Your Logo
            </h2>
            <p className="mt-6 text-gray-600">
              Welcome to Your Logo, your ultimate destination for instantly
              downloading and accessing any type of logo you need. Whether
              you're a designer, a business owner, or just someone looking for
              the perfect logo for your project, we've got you covered.
            </p>
            <h3 className="mt-4 text-gray-600 font-bold">Our Mission</h3>
            <p className="mt-2 text-gray-600">
              At Your Logo, our mission is to make high-quality logos accessible
              to everyone. We understand that a great logo is a crucial part of
              your brand identity, and we aim to provide you with a vast
              collection of logos that cater to various tastes and requirements.
              Our platform is designed to be user-friendly, allowing you to
              quickly find and download the logo that best represents your
              vision.
            </p>
            <h3 className="mt-4 text-gray-600 font-bold">What We Offer</h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>
                <strong>Extensive Collection</strong>: Explore a wide range of
                logos from various categories including business, sports,
                entertainment, technology, and more.
              </li>
              <li>
                <strong>Instant Downloads</strong>: Get your desired logo
                instantly with just a few clicks. No waiting, no hassle.
              </li>
              <li>
                <strong>High Quality</strong>: All our logos are of high
                quality, ensuring they look great on any platform or medium.
              </li>
              <li>
                <strong>Ease of Use</strong>: Our intuitive search and download
                process makes it easy for you to find the perfect logo quickly.
              </li>
              <li>
                <strong>Customization</strong>: Need a logo that stands out?
                Customize your chosen logo to better fit your brand's identity.
              </li>
            </ul>
            <h3 className="mt-4 text-gray-600 font-bold">Why Choose Us?</h3>
            <ul className="mt-2 text-gray-600 list-disc list-inside">
              <li>
                <strong>Variety</strong>: Whether you're looking for a sleek and
                modern design or something more classic, we have logos to suit
                every style.
              </li>
              <li>
                <strong>Convenience</strong>: Save time and effort with our
                streamlined search and download process.
              </li>
              <li>
                <strong>Reliability</strong>: Trust in our commitment to
                providing only the best logos, curated and updated regularly.
              </li>
              <li>
                <strong>Support</strong>: Our customer support team is always
                here to help you with any questions or issues you might have.
              </li>
            </ul>
            <h3 className="mt-4 text-gray-600 font-bold">Get Started</h3>
            <p className="mt-2 text-gray-600">
              Dive into our extensive library of logos and find the perfect one
              for your needs today. At Your Logo, we're dedicated to helping you
              make a lasting impression with the right logo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
