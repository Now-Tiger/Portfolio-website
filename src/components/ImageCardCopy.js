import Image from "next/image";

export default function ImageCardCopy({ children, imgSrc, ...props }) {
  return (
    <div className="">
      <div
        {...props}
        className="relative max-v-xs overflow-hidden rounded-2xl shadow-lg group mb-5 p-10"
      >
        <Image
          src={imgSrc}
          alt=""
          loading="eager"
          priority={true}
          //className="transition-transform group-hover:scale-110 duration-200"
          className="transition-transform group-hover:scale-110 duration-200 relative max-w-xs mx-auto overflow-hidden rounded-2xl shadow-lg group mb-5 sm:max-w-md lg:max-w-xl xl:max-w-2xl 2xl:max-w-3xl"
        />
        <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent">
          <div className="p-4 text-white">{children}</div>
        </div>
      </div>
      <div className="mb-5"></div>
    </div>
  );
}
