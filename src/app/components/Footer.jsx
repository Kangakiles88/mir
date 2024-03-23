"use client";

import Link from "next/link";
import GoogleMaps from "./GoogleMaps";
import { Typography } from "@mui/material";

const Footer = () => {
  return (
    <footer className="w-full p-4 border-t-2 border-[#8B8B95] mx-auto">
      <div className="flex flex-col lg:flex-row justify-center items-center m-2">
        <div className="mb-10 text-white">
          <h3 className="text-4xl mb-10" id="location">
            찾아오시는 길
          </h3>
          <p className="text-2xl mb-2">
            경기도 안산시 단원구 광덕2로 185-4 301호
          </p>
          <p className="text-2xl mb-2">미르노래광장</p>
          <p className="text-2xl mb-2">호수동 우체국 맞은 편 낙원회관 3층</p>
          <Link className="text-3xl text-pink" href="tel:010-6285-5760">
            TEL:010-6285-5760
          </Link>
        </div>
        <div className="lg:ml-24">
          <GoogleMaps />;
        </div>
      </div>
      <div>
        <Typography variant="body2" color="white" align="center">
          {"Copyright © All Reserved by "}
          <Link color="inherit" href="#">
            미르노래광장
          </Link>{" "}
          {new Date().getFullYear()}
        </Typography>
      </div>
    </footer>
  );
};

export default Footer;
