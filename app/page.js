"use client";
import TopBar from "./components/topBar";
import FilterBar from "./components/filterBar";
import PropertyCard from "./components/propertyCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState([]);
  const property_data = [
    {
      rent: "83,000",
      location: "Bandra Kurla Complex,Mumbai",
      verified: true,
      seats: "25-40 seats",
      carpet_area: "2339",
      image: "/bkc.png",
    },
    {
      rent: "183,000",
      location: "Nariman Point,Mumbai",
      verified: true,
      seats: "80-90 seats",
      carpet_area: "5445",
      image: "/bkc.png",
    },
  ];

  const [filter, setFilter] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/");
      const data = await response.json();
      console.log(data, "before state ");
      setProperties(data.data);
      console.log(data, "from useEffect");
    }

    fetchData();
  }, []);

  return (
    <main className="flex flex-col">
      <TopBar />
      <FilterBar filter={filter} setFilter={setFilter} />

      {properties.length > 0 &&
        properties.map((property, index) => {
          return (
            <div className="m-auto gap-2">
              <PropertyCard property={property} index={index} />
            </div>
          );
        })}
    </main>
  );
}
