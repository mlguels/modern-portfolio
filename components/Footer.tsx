import { FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { socialMedia } from "@/data";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full mb-[100px] md:mb-5" id="contact">
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to bring <span className="text-purple">your</span> idea to life?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Let&apos;s work together to create something meaningful. Get in touch
          with me
        </p>
        <a href="mailto:mrodandres@icloud.com">
          <MagicButton
            title="Let's get in touch"
            icon={<FaLocationArrow />}
            position="right"
          />
        </a>
      </div>

      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-y-3">
        <p className="md:text-base text-sm md:font-normal text-white-200">
          Copyright 2024 © Miguel Rodriguez
        </p>

        <div className="flex items-center md:gap-3 gap-2">
          {socialMedia.map((profile) => (
            <div
              key={profile.id}
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Link href={profile.link} target="_blank">
                <img
                  src={profile.img}
                  alt={profile.id}
                  width={20}
                  height={20}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
