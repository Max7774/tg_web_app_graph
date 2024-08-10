import cn from "clsx";

interface ICardProps {
  text: string;
  Icon: JSX.Element;
  theme: string;
  className: string;
}

const Card = ({ text, Icon, theme, className }: ICardProps) => {
  return (
    <div
      className={cn(
        "card relative border-4 border-gray mx-3 my-5 rounded-[25px] px-4 py-5 overflow-hidden shadow-xl",
        {
          "shadow-darkShadow": theme === "dark",
          "shadow-lightShadow": theme === "light",
        },
        className
      )}
    >
      <div className="flex flex-row gap-7 justify-between items-center relative z-10">
        <div>{Icon}</div>
        <div className="text-mainText text-right font-bold">{text}</div>
      </div>
      <div className="glass-effect absolute inset-0 z-0 rounded-[25px]"></div>
    </div>
  );
};

export default Card;
