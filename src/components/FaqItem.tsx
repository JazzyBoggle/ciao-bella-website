"use client";

import { useState } from "react";

export default function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: {
  question: string;
  answer?: string;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="bg-white rounded-[20px] p-5 w-full">
      <div className="flex flex-col gap-3">
        <button
          className="flex items-center justify-between w-full text-left"
          onClick={() => setOpen(!open)}
        >
          <span className="font-heading font-medium text-[20px] leading-[28px] text-black">
            {question}
          </span>
          <span className="bg-[#131313] rounded-full w-10 h-10 flex items-center justify-center shrink-0 ml-4">
            {open ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19 13H5v-2h14v2z" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
              </svg>
            )}
          </span>
        </button>
        {open && answer && (
          <p className="font-hero font-medium text-[14px] leading-[20px] text-[#575757]">
            {answer}
          </p>
        )}
      </div>
    </div>
  );
}
