"use client";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function MovingCard() {
  return (
    <div className="w-full rounded-md flex flex-col antialiased dark:bg-transparent dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={umich_sponsors}
        direction="right"
        speed="slow"
      />
      <InfiniteMovingCards
        items={fundraisers_sponsors}
        direction="left"
        speed="fast"
      />
    </div>
  );
}

const umich_sponsors = [
  {
    src: '/umich_CECS.png',
    alt: "umich_CECS",
  },
  {
    src: '/umich_ece.png',
    alt: "umich_ece",
  },
  {
    src: '/umich.png',
    alt: "umich",
  },
];

const fundraisers_sponsors = [
  {
    src: '/OCEL.png',
    alt: "Knight_foundation",
  },
  {
    src: '/Issf.png',
    alt: "Issf",
  },
  {
    src: '/NSF.png',
    alt: "NSF",
  },
]
