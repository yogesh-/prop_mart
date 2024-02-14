import Image from "next/image";

const PropertyCard = ({ property, index }) => {
  console.log("from property card");
  return (
    <div
      key={index}
      className="flex flex-col w-[350px] h-[395px] border border-neutral-200 rounded relative mb-1"
    >
      <img
        src={"/" + property.image}
        style={{ height: "191px", width: "354px" }}
        className="object-cover rounded-t"
      />

      <div className="flex flex-row flex-nowrap items-center rounded-full h-8 w-20 border border-pill-text-blue bg-pill-bg-blue absolute top-3 left-4">
        <img src="/icons/verified.png" width={16} height={16} />
        <p className="whitespace-nowrap text-sm px-1">Verified</p>
      </div>
      <div className="flex flex-row flex-nowrap items-center rounded-full h-8 bg-white border border-neutral-200 absolute top-3 right-4">
        <p className="whitespace-nowrap text-sm px-2">
          {property.seats - 10}-{property.seats} seats
        </p>
      </div>
      {/* content section */}
      <div className=" h-full w-full">
        <div className="p-3">
          <p className="font-bold text-lg">
            {property.rent}
            <span className="text-gray-500">/per month</span>
          </p>
          <div className="flex flex-row items-center pb-4">
            <Image src="/icons/location.png" width={16} height={16} />
            <p className="text-sm">{property.location}</p>
          </div>
          <div className="flex flex-row gap-4 mb-2">
            <div className="flex items-center gap-1 text-sm h-4">
              <Image
                src="/icons/furnished.png"
                width={20}
                height={20}
                className="pl-1"
              />
              <p>Fully Furnished</p>
            </div>
            <div className="flex gap-1 text-sm">
              <Image src="/tile.svg" width={18} height={18} />
              <p>{property.carpet_area}</p>
            </div>
          </div>

          <p className="text-xs mb-2">
            Welcome to our modern and spacious office...
            <span className="text-md text-pill-text-blue">Read More</span>
          </p>
          <hr class="h-px mt-1 bg-gray-200 border dark:bg-gray-700" />
          <div className="flex gap-1 mt-2">
            <button className="bg-pill-text-blue w-full h-11 rounded-md">
              Shortlist
            </button>
            <button className="bg-green-500 w-11 rounded-md flex items-center justify-center">
              <Image
                className="margin-auto"
                src="/icons/whatsapp.png"
                height={18}
                width={18}
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;
