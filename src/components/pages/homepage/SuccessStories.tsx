"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";
import { useState, useEffect } from "react";
import { type CarouselApi } from "@/components/ui/carousel"; // Import CarouselApi type
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";

const SuccessStories = () => {
  const [api, setApi] = useState<CarouselApi>(); // State to hold the Carousel API
  const [activeIndex, setActiveIndex] = useState(0); // State to track the active slide index

  const slides = [
    {
      id: 1,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className=""
              src="/al-bandary.webp"
              alt="Logo"
              height={300}
              width={300}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">Bridge The Gap Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                We began supplying agricultural workers in January 2019 and have
                since grown by 450% in terms of the number of workers.
              </li>
              <li>
                Became a strategic partner of Qatar Agricultural Company (QAC)
                by providing excellent service.
              </li>
              <li>
                Achieved the highest worker satisfaction and a low worker
                turnover rate.
              </li>
            </ul>
            <h6 className="font-bold">Al Bandary Engineering Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Completed the renovation project of Qatar University and secured
                a new construction project in the same location.
              </li>
              <li>
                Awarded new projects in Lusail City and Msheireb Downtown Doha.
              </li>
              <li>
                Expanded operations to include The Pearl, Doha, and other key
                areas.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 2,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className=""
              src="/al_rawdah_logo.png"
              alt="Logo"
              height={300}
              width={300}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">Bridge The Gap Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                The business started with a supply of skilled workers in
                December 2013 and has grown into one of our strategic partners,
                reaching 1000+ active workers today, generating millions in
                revenue each month.
              </li>
              <li>
                Equal satisfaction levels from clients and workers, resulting in
                one of the lowest turnovers in the industry.
              </li>
            </ul>
            <h6 className="font-bold">Al RAWDA Farm Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                Al RAWDA Poultry Farms now occupies a leading position among the
                giant projects in the Middle East.
              </li>
              <li>
                Al RAWDA Poultry Farms has grown to be one of the largest
                integrated poultry projects in the world.
              </li>
              <li>
                Opened multiple new poultry farms and processing units in Al
                Khor, Al Wakrah, and other regions.
              </li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 3,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className=""
              src="/al-maha.png"
              alt="Logo"
              height={300}
              width={300}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">Bridge The Gap Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                In March 2018, we began supplying seasonal workers and have
                since grown by 500% in active workers.
              </li>
              <li>
                Became the permanent manpower supplier for seasonal work at
                Qatar Harvest.
              </li>
            </ul>
            <h6 className="font-bold">Al Maha Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>Al Maha&apos;s expansion is well-known across the region.</li>
            </ul>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      content: (
        <div className="flex w-full flex-col items-center gap-10 lg:flex-row">
          <div>
            <Image
              className=""
              src="/qac.jpeg"
              alt="Logo"
              height={300}
              width={300}
            />
          </div>
          <div className="space-y-3 text-sm">
            <h6 className="font-bold">Bridge The Gap Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              <li>
                We began supplying agricultural workers in January 2019 and have
                since grown by 450% in terms of the number of workers.
              </li>
              <li>
                Become a strategic partner of ARACO by providing excellent
                service.
              </li>
            </ul>
            <h6 className="font-bold">QAC Success Story:</h6>

            <ul className="list-disc space-y-2 pl-5">
              Increased their production by 60% and opened a new production
              facility in Al Khor.
            </ul>
          </div>
        </div>
      ),
    },
  ];

  // Update the active index when the carousel changes
  useEffect(() => {
    if (!api) return;

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  // Handle dot click to navigate to the corresponding slide
  const handleDotClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  // Handle previous and next navigation
  const handlePrevious = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const handleNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <section className="py-20">
      <div className="container">
        <div className="flex items-center justify-center">
          <div className="inline-block rounded-lg bg-tertiary-bridge px-5 py-1 text-3xl font-bold text-white">
            Success Stories
          </div>
        </div>

        <div className="group relative mx-auto mt-20 max-w-4xl rounded-xl border p-10">
          <Carousel className="mx-5" setApi={setApi}>
            <CarouselContent>
              {slides.map((slide) => (
                <CarouselItem
                  className="flex items-center justify-center"
                  key={slide.id}
                >
                  {slide.content}
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          {/* Custom Arrow Buttons */}
          <button
            onClick={handlePrevious}
            className="pointer-events-none absolute left-0 top-1/2 mx-5 -translate-y-1/2 transform rounded-full opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <MdArrowBackIos className="text-4xl" />
          </button>
          <button
            onClick={handleNext}
            className="pointer-events-none absolute right-0 top-1/2 mx-2 -translate-y-1/2 transform rounded-full opacity-0 transition-opacity duration-500 group-hover:pointer-events-auto group-hover:opacity-100"
          >
            <MdArrowForwardIos className="text-4xl" />
          </button>

          {/* Dot Navigation */}
          <div className="mt-10 flex justify-center space-x-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => handleDotClick(i)}
                className={`size-2 rounded-full ${
                  i === activeIndex ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
