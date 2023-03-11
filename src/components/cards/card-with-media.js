import Image from "next/image";

export const CardWithMedia = ({
  logo,
  images,
  title,
  description,
  video,
  videoEmbed,
  link,
  date,
  organizator,
  className,
}) => {
  return (
    <div className={className}>
      <div className="mb-4 flex items-center">
        <Image src={logo.path} alt={logo.alt} width={logo.width || 200} height={logo.height || 180} />
        <div className="ml-3 flex flex-col items-start gap-x-3">
          <h2 className="text-base font-semibold text-light-text dark:text-dark-text">{title}</h2>
          <div className="flex gap-2">
            {organizator && <span className="">{organizator}</span>}
            {date && <span>{date}</span>}
          </div>
          {description && <p className="mt-3 w-full">{description}</p>}
        </div>
      </div>
      {images && (
        <div className="flex w-full gap-1 overflow-y-auto lg:justify-center lg:gap-4">
          {images.map((image, index) => (
            <Image
              key={index}
              src={image.path}
              alt={image.alt}
              height={image.height || 400}
              width={image.width || 400}
              className=" object-contain"
            />
          ))}
          {video && (
            <video controls width={video.width || 300} height={video.height}>
              <source src={video.path} type="video/mp4"></source>
            </video>
          )}
        </div>
      )}
    </div>
  );
};
