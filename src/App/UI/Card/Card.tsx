interface ICardProps {
  text: string;
  Icon: JSX.Element;
}

const Card = ({ text, Icon }: ICardProps) => {
  return (
    <div className="card relative bg-gray mx-3 my-7 rounded-[30px] px-4 py-5 overflow-hidden">
      <div className="flex flex-row gap-7 justify-between relative z-10">
        <div>{Icon}</div>
        <div className="text-mainText text-left">{text}</div>
      </div>
      <div className="glare-effect absolute inset-0 z-0 rounded-[30px]"></div>
    </div>
  );
};

export default Card;
