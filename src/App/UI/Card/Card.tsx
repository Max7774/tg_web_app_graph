import cn from "clsx";

interface ICardProps {
  text: string;
  Icon: JSX.Element;
  theme: string;
}

const Card = ({ text, Icon, theme }: ICardProps) => {
  return (
    <div
      className={cn(
        "card relative bg-gray mx-3 my-5 rounded-[25px] px-4 py-5 overflow-hidden shadow-xl",
        {
          "shadow-darkShadow": theme === "dark",
          "shadow-lightShadow": theme === "light",
        }
      )}
    >
      <div className="flex flex-row gap-7 justify-between relative z-10">
        <div>{Icon}</div>
        <div className="text-mainText text-left text-bold">{text}</div>
      </div>
      <div className="glass-effect absolute inset-0 z-0 rounded-[25px]"></div>
    </div>
  );
};

export default Card;
