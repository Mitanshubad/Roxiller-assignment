import React from 'react';

const ShimmerTable: React.FC = () => {
  return (
    <div className="animate-pulse">
      <div className="mb-4 h-6 w-1/4 rounded-md"></div>
      <table className="w-full table-auto">
        <thead className="sticky top-0 ">
          <tr className="grid grid-cols-[50px,150px,250px,100px,100px,100px,100px] border-b border-slate-600">
            {Array(7)
              .fill(null)
              .map((_, index) => (
                <th
                  key={index}
                  className="h-16 py-3 text-sm text-center border-t border-l border-slate-600 bg-gray-700 rounded-md"
                >
                  <div className="w-full h-full"></div>
                </th>
              ))}
          </tr>
        </thead>
        <tbody>
          {Array(10)
            .fill(null)
            .map((_, rowIndex) => (
              <tr
                key={rowIndex}
                className="grid grid-cols-[50px,150px,250px,100px,100px,100px,100px] border-b border-slate-600"
                style={{ height: '100px' }}
              >
                {Array(7)
                  .fill(null)
                  .map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className="flex items-center justify-center border-l border-slate-600"
                    >
                      <div className="h-8 w-full bg-gray-700 rounded-md"></div>
                    </td>
                  ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShimmerTable;
