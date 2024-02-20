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
      if (filter) {
        const response = await fetch(
          "https://qojvk62gs8.execute-api.ap-south-1.amazonaws.com/test/my-fetch-resource/?verified=true"
        );
        const data = await response.json();
        setProperties(data.data);
      } else {
        const response = await fetch(
          "https://qojvk62gs8.execute-api.ap-south-1.amazonaws.com/test/my-fetch-resource"
        );
        const data = await response.json();
        setProperties(data.data);
      }
    }

    fetchData();
  }, [filter]);

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
