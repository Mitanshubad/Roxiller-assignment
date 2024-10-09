


import React, { useState } from "react";
import { ProductType } from "../../types/types";

interface ProductTableBodyProps {
  data: ProductType[];
}

const ProductTableBody: React.FC<ProductTableBodyProps> = ({ data }) => {
  const [expandedRows, setExpandedRows] = useState<Set<string>>(new Set());
  const [searchText, setSearchText] = useState("");

  const handleToggleExpand = (id: string) => {
    setExpandedRows((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value.toLowerCase());
  };

  // Filter the data based on the search text
  const filteredData = data.filter(
    ({ title, category, description }) =>
      title.toLowerCase().includes(searchText) ||
      category.toLowerCase().includes(searchText) ||
      description.toLowerCase().includes(searchText)
  );

  if (!Array.isArray(data)) {
    return null;
  }

  return (
    <div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by title, category, or description..."
          value={searchText}
          onChange={handleSearchChange}
          className="w-full p-2 border border-gray-800  text-black rounded-md"
        />
      </div>
      <table className="min-w-full table-auto">
        <tbody>
          {filteredData.map(({ _id, id, title, description, price, category, sold, image }) => {
            const isExpanded = expandedRows.has(_id);
            return (
              <tr
                key={_id}
                className="grid grid-cols-[50px,150px,250px,100px,100px,100px,100px] border-b"
                style={{ height: '100px' }} // Fixed height for rows
              >
                <td className="flex items-center justify-center border-l">
                  {id}
                </td>
                <td className="flex items-center pl-2 border-l">
                  {title}
                </td>
                <td className="flex flex-col justify-center border-l px-2">
                  <div
                    className={`overflow-hidden ${isExpanded ? "overflow-y-auto" : "overflow-hidden"} leading-tight`}
                    style={{
                      maxHeight: '48px', // Fixed height for the description field
                    }}
                  >
                    {description}
                  </div>
                  {description.length > 100 && (
                    <button
                      className="mt-2 text-xs text-blue-500"
                      onClick={() => handleToggleExpand(_id)}
                    >
                      {isExpanded ? "Hide" : "Read More"}
                    </button>
                  )}
                </td>
                <td className="flex items-center justify-center border-l">
                  ${price.toFixed(2)}
                </td>
                <td className="flex items-center justify-center border-l">
                  {category}
                </td>
                <td className="flex items-center justify-center border-l">
                  {sold ? "Yes" : "No"}
                </td>
                <td className="flex items-center justify-center border-l ">
                  <img
                    src={image}
                    alt={title}
                    className="object-cover w-12 h-12 rounded-full md:w-16 md:h-16"
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTableBody;
