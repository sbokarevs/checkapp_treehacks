import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { StarIcon } from "@chakra-ui/icons";

type InfoCardProps = {
  img: any;
  location: any;
  description: any;
  title: any;
  star: number;
  price: any;
  total: any;
};

const formatPhoneNumber = (phoneNumberString: string) => {
  var cleaned = ('' + phoneNumberString).replace(/\D/g, '');
  var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/);
  if (match) {
    return '(' + match[1] + ') ' + match[2] + '-' + match[3];
  }
  return null;
}

const InfoCard: React.FC<InfoCardProps> = ({
                                             img,
                                             location,
                                             description,
                                             title,
                                             star,
                                             price,
                                             total,
                                           }) => {
  return (
    <motion.div
      initial={{
        x: -200,
        opacity: 0,
      }}
      transition={{ duration: 1 }}
      whileInView={{ opacity: 1, x: 0 }}
      className="flex py-5 px-2 pr-4 border-b cursor-pointer hover:opacity-80
    hover:shadow-lg transition duration-200 ease-out first:border-t bg-white mt-3 rounded-3xl"
    ><div className="relative h-24 w-1/3 md:h-52 md:w-30 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl" alt={""}/>
      </div>
      <div className="flex flex-col flex-grow pl-3">
        <div className="flex justify-between">
          <p className="text-md">{title}</p>
        </div>
        <div className="bg-pink-600 rounded-xl h-7 text-center">
          <p className="text-md text-white">Schedule an appointment</p>
        </div>
        <div className=" w-10 pt-1"/>
        <h4 className="text-sm text-blue-800">+1 {formatPhoneNumber(description)}</h4>
        <div className="w-10 pt-1"/>
        <p className="pt-2 text-[12px] text-gray-500 flex-grow">{location}</p>

      </div>
    </motion.div>
  );
};
export default InfoCard;