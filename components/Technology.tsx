import { Rocket } from "lucide-react";
import Image from "next/image";
import appsheet from "../app/appsheet.png";
import google from "../app/google.png";

export default function Technology() {
  return (
    <section className="w-full">
      <hr className="border-t-2 w-full rounded-t-full h-14 bg-secondary"></hr>
      <div className="flex justify-center gap-4 mt-8">
        <Image src={google} alt="Picture of the author" width={36} />
        <Image src={appsheet} alt="Picture of the author" width={36} />
        <Rocket className="h-9 w-9 text-primary" />
      </div>
    </section>
  );
}
