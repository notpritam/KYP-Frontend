import Image from "next/image";
import Link from "next/link";
import React from "react";

interface BookingCardProps {
  id: number;
  image: string;
  title: string;
  description: string;
  date: string;
  time: string;
}

function BookingCard({
  id,
  image,
  title,
  description,
  date,
  time,
}: BookingCardProps) {
  return (
    <Link
      href={"/bookings?id=" + id}
      className="flex flex-col gap-4 rounded-lg overflow-clip pb-4 bg-gray-100 min-w-[300px]"
    >
      <Image
        src={image}
        alt={title}
        width={300}
        height={200}
        className="w-full h-[200px] object-cover"
      />
      <div className="flex flex-col gap-4 px-4">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-foreground">{description}</p>
        <div className="flex gap-4">
          <div>
            <span>Date: {date}</span>
          </div>
          <div>
            <span>Time: {time}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BookingCard;
