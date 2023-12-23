import Image from "next/image";

export interface IServiceCard {
    title: string;
    description: string;
    imageURL: string;
  }
export const ServiceCard = ({ title, description, imageURL }: IServiceCard) => {
    return (
      <div className="flex flex-col justify-start bg-white">
        <h2
          className="text-[20px] font-bold mt-10 ml-10 font-orbitron 
    hover:text-green-600 cursor-pointer"
        >
          {title}
        </h2>
        <p className="text-sm mt-3 ml-10">{description}</p>
        <div
          className="relative flex-start left-0 w-[400px] h-[375px] top-[20px] 
  right-[175px] bg-gray-50 cursor-pointer"
        >
          <Image
            className="brightness-[100%] hover:brightness-[80%] ease-in-out 
        duration-300"
            src={imageURL}
            alt="Dip dalga"
            fill
            sizes="1"
          />
        </div>
      </div>
    );
  };