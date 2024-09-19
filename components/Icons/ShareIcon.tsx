import { useToast } from "@/hooks/use-toast";
import { usePathname } from "next/navigation";
import React from "react";

const ShareIcon = () => {
  const pathname = usePathname();
  const fullUrl =
    typeof window !== "undefined" ? window.location.origin + pathname : "";
  const { toast } = useToast();

  function handleShare(e: any) {
    e.preventDefault();
    console.log("click", pathname);

    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(fullUrl)
        .then(() => {
          toast({
            title: "URL Copied!",
            description: "Successfully copied the URL for you to share!",
            className: "bg-amber-500 text-white font-bold"
          })
        })
        .catch((err) => {
          console.error("Failed to copy URL: ", err);
        });
    } else {
      console.error("Clipboard API not supported.");
    }
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="size-6 hover:fill-sky-800 cursor-pointer"
      onClick={handleShare}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
      />
    </svg>
  );
};

export default ShareIcon;
