"use client";
import BookingCard from "@/components/BookingCard";
import SectionHeading from "@/components/SectionHeading";
import { Button } from "@/components/ui/button";
import { useKYPStore } from "@/lib/store";
import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
  const { login, logout, user } = useKYPStore();

  const redirect = useRouter();

  if (user === null) {
    redirect.push("/login");
  }

  return (
    <div className="mt-[4rem] flex flex-col gap-8">
      <SectionHeading title="Dashboard" description="Welcome to the dashboard.">
        <Button onClick={logout}>New Bookings</Button>
      </SectionHeading>

      {/* <SectionHeading
        title="Recent Bookings"
        description="Your recent bookings."
      /> */}

      <div className="grid grid-cols-4 gap-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <BookingCard
            key={i}
            id={i}
            image="https://source.unsplash.com/random"
            title="Booking Title"
            description="Booking Description"
            date="2022-01-01"
            time="12:00 PM"
          />
        ))}
      </div>
    </div>
  );
}

export default Page;
