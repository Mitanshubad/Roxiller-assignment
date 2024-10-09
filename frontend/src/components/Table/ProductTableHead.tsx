

import React from "react";

const ProductTableHead: React.FC = () => {
  const tableHeaders = [
    { id: 1, label: "#", className: "" },
    { id: 2, label: "Title", className: "" },
    { id: 3, label: "Description", className: "" },
    { id: 4, label: "Price", className: "" },
    { id: 5, label: "Category", className: "" },
    { id: 6, label: "Sold", className: "" },
    { id: 7, label: "Image", className: "" },
  ];

  return (
    <thead className="sticky top-0">
      <tr className="grid grid-cols-[50px,150px,250px,100px,100px,100px,100px] border-b border-slate-600">
        {tableHeaders.map(({ id, label, className }) => (
          <th
            key={id}
            className={`h-16 py-3 text-sm text-center border-t border-l  ${className}`}
          >
            {label}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default ProductTableHead;
