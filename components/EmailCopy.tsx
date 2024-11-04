"use client";

import { Copy, CopyCheck, Mail, MailCheck } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";

const email = "solucionesweb@gmail.com";

export default function EmailCopy() {
  const [isCopy, setIsCopy] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(email)
      .then(() => {
        setIsCopy(true);
        setTimeout(() => {
          setIsCopy(false);
        }, 1000);
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  const openEmail = () => {
    setIsClicked(true);
    // window.open(`mailto:${email}`, "_blank");
    setTimeout(() => {
      setIsClicked(false);
    }, 1000);
  };

  return (
    <div className="flex items-center border rounded-md p-1 h-10 mt-4">
      <Button
        variant="link"
        onClick={copyToClipboard}
        disabled={isCopy}
        className="flex-1"
      >
        {email}
      </Button>
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          onClick={copyToClipboard}
          className="text-primary w-8 h-8 hover:text-primary"
        >
          {isCopy ? (
            <CopyCheck className="h-4 w-4 text-primary/50" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </Button>
        <a
          href={`mailto:${email}`}
          target="_blank"
          className="btn btn-outline btn-icon flex items-center justify-center  rounded-md text-primary transition hover:bg-muted w-8 h-8"
          onClick={openEmail}
        >
          {isClicked ? (
            <MailCheck className="h-4 w-4 text-primary/50" />
          ) : (
            <Mail className="h-4 w-4" />
          )}
        </a>
      </div>
      {/* <div>
        <Button variant="" className="mt-4"></Button>
        <Button variant="secondary" className="mt-4"></Button>
      </div> */}
    </div>
  );
}
