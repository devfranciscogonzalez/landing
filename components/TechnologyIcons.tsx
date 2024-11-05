import Image from "next/image";
import { cn } from "@/lib/utils";
import { TechnologyIcon } from "@/types/types";

interface TechnologyIconsProps {
  icons: TechnologyIcon[];
  className?: string;
}

const TechnologyIcons = ({ icons, className }: TechnologyIconsProps) => (
  <div className={cn("flex justify-center", className)}>
    <div className="flex w-auto gap-4 justify-center">
      {icons.map((icon, index) =>
        icon.src ? (
          <Image
            key={index}
            src={icon.src}
            alt={icon.alt}
            width={icon.width}
            height={icon.width}
            className="object-contain"
          />
        ) : (
          icon.icon && (
            <icon.icon
              key={index}
              className="h-9 w-9 text-primary"
              aria-label={icon.alt}
            />
          )
        )
      )}
    </div>
  </div>
);

export default TechnologyIcons;
