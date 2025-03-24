import Head from "next/head";
import { RiMapPin2Fill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay } from "swiper";
import React from "react";
import Button from "@/components/button";
import { archive } from "@/data/archive";
import Schedule from "@/components/schedule";
import Sponsored from "@/components/sponsored";
import Link from "next/link";
import Image from "next/image";

const Post = ({
  content,
  year,
}: {
  content: {
    name: string;
    image: string;
    designation: string;
    id: string;
  }[];
  year: string;
}) => {
  // @ts-ignore
  const sliderImages = archive[year].sliderImages;
  // @ts-ignore
  const url = archive[year].proceeding;
  // @ts-ignore
  const publisherName = archive[year].publisherName;
  // @ts-ignore
  const publisherLogo = archive[year].publisherLogo;
  // @ts-ignore
  const id = archive[year].id;

  return (
    <>
      <Head>
        <title>ICIMMI {year} - International conference on information management & machine intelligence</title>
        <link rel="icon" href="/gallery/favicon.ico" />
      </Head>
      <main className={"mx-4"}>
        <Schedule />
        <br />
        {/*    landing   */}
        <div
          className={
            "flex flex-col items-center justify-center gap-5 text-center lg:flex-row lg:text-start"
          }
        >
          <div className={"flex h-full flex-col justify-between"}>
            <div
              className={
                "mx-auto w-fit rounded-full bg-red-600 bg-opacity-20 lg:mx-0"
              }
            >
              <p className={"px-3 py-0.5 text-sm text-[#034EA2] lg:text-base"}>
                Archive
              </p>
            </div>
            <p
              className={
                "mx-4 my-3 text-3xl font-bold lg:mx-0 lg:my-5 lg:text-4xl"
              }
            >
              {id} {" "}International Conference On Information Management & Machine
              Intelligence {year}
            </p>

            <div
              className={
                "flex items-center justify-center space-x-2 lg:justify-start"
              }
            >
              <RiMapPin2Fill
                className={"mt-1 hidden self-start text-[#034EA2] lg:block"}
              />
              <div className={"text-[#034EA2]"}>
                <p className={"text font-semibold"}>
                  Poornima Institute of Engineering and technology
                </p>
                <p className={"text-sm"}>Sitapura Jaipur, Rajasthan</p>
              </div>
            </div>
          </div>
          <div className={"flex h-full w-full px-5 lg:w-[60%]"}>
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              grabCursor={true}
              autoplay={{
                delay: 1500,
                disableOnInteraction: false,
                stopOnLastSlide: false,
                reverseDirection: true,
              }}
              loop={true}
              modules={[Autoplay]}
              className="mySwiper mx-auto rounded-md shadow-sm"
            >
              {sliderImages.map(
                (
                  image: string,
                  index: React.Key | null | undefined
                ) => {
                  return (
                    <SwiperSlide key={index}>

                      <img
                        className={" h-80 w-full rounded-md object-cover"}
                        src={image}
                        alt=""
                      />
                    </SwiperSlide>
                  );
                }
              )}
            </Swiper>
          </div>
        </div>

        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

        <h1 className="heading text-sm font-bold lg:text-2xl flex items-center justify-between">
          ICIMMI {year}
          <span className="text-blue-500 flex items-center underline">
            <Link href={url} target="_blank">
              <span className="flex items-center">
                <span> Proceedings With Publisher {publisherName}</span>

                {publisherLogo.map((image: string, index: number) => {
                  if (index == 1) {
                    return <img key={index}
                      src={image} // Springer logo URL
                      alt="Springer Logo"
                      className="w-22 h-20" // Adjusted size classes
                    />
                  } else {
                    return <img key={index}
                      src={image} // Springer logo URL
                      alt="Springer Logo"
                      className="w-16 h-16 ml-2" // Adjusted size classes
                    />
                  }
                })}

              </span>
            </Link>
          </span>
        </h1>
        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />
        <h1 className={"heading my-2 text-sm font-bold lg:text-2xl"}>
          Gallery {year}
        </h1>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={`${sliderImages[0]}`}
                alt="Image 1"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={`${sliderImages[1]}`}
                alt="Image 2"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={`${sliderImages[2]}`}
                alt="Image 3"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={`${sliderImages[3]}`}
                alt="Image 4"
              />
            </div>
          </div>
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={`${sliderImages[4]}`}
                alt="Image 5"
              />
            </div>
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={`${sliderImages[5]}`}
                alt="Image 6"
              />
            </div>
          </div>
        </div>

        <hr className="my-8 h-px border-0 bg-gray-200 dark:bg-gray-700" />

        <Sponsored />
      </main>
    </>
  );
};

export const getStaticPaths = async () => {
  const years = ["2023", "2022", "2021", "2020", "2019"];

  const paths = years.map((post) => ({
    params: { slug: post },
  }));

  console.log(paths[0].params.slug);
  return { paths, fallback: false };
};

export const getStaticProps = async ({ params }: { params: any }) => {
  console.log({ params });
  // @ts-ignore
  const data = archive[params.slug].speakers;
  return {
    props: { content: data, year: params.slug },
  };
};

export default Post;