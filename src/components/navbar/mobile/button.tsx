import { cn } from "~/lib/utils/cn";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NavbarMobileButton({ isOpen, setIsOpen }: Props) {
  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      className="fixed top-6 right-4 z-50 mix-blend-difference"
      onClick={handleClick}
    >
      <span className="sr-only">menu</span>
      <div className="*:h-[5px] *:bg-background *:w-8 *:duration-300 *:ease-smooth">
        <div
          className={cn({
            "rotate-45 translate-y-1": isOpen,
          })}
        />
        <div
          className={cn("mt-1.5", {
            "-rotate-45 -translate-y-1.5": isOpen,
          })}
        />
      </div>
    </button>
  );
}
