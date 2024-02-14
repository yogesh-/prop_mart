"use client";
import TopBar from "./components/topBar";
import FilterBar from "./components/filterBar";
import PropertyCard from "./components/propertyCard";
import { useEffect, useState } from "react";

export default function Home() {
  const [properties, setProperties] = useState([]);

  const [filter, setFilter] = useState(false);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("api/");
      const data = await response.json();
      setProperties(data.data);
    }

    fetchData();
  }, []);

  return (
    <main className="flex flex-col bg-white">
      <TopBar />
      <FilterBar filter={filter} setFilter={setFilter} />

      {properties.length > 0 &&
        properties.map((property, index) => {
          return (
            <div key={index} className="m-auto gap-2">
              <PropertyCard property={property} index={index} />
            </div>
          );
        })}
    </main>
  );
}
