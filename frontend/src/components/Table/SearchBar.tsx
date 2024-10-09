



// // import React, { useState } from 'react';

// // interface SearchBarProps {
// //   onSearch: (searchText: string) => void;
// // }

// // const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
// //   const [searchText, setSearchText] = useState<string>('');

// //   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
// //     const value = event.target.value;
// //     setSearchText(value);
// //     onSearch(value); // Call search function on input change
// //   };

// //   return (
// //     <div className="flex items-center justify-center border rounded-md border-slate-500 bg-slate-700">
// //       <input
// //         type="search"
// //         value={searchText}
// //         onChange={handleInputChange} // Use the input change handler
// //         placeholder="Search..."
// //         className="p-2 bg-transparent outline-none"
// //       />
// //       <button onClick={() => onSearch(searchText)} className="px-2 rounded-md">
// //         <img src="/search.svg" alt="search" width={20} height={20} />
// //       </button>
// //     </div>
// //   );
// // };

// // export default SearchBar;


// // SearchBar.tsx
// import React, { useState } from 'react';

// interface SearchBarProps {
//   onSearch: (searchText: string) => void;
// }

// const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
//   const [searchText, setSearchText] = useState<string>('');

//   const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const value = event.target.value;
//     setSearchText(value);
//     onSearch(value); // Call the search function with the input value
//   };

//   return (
//     <div className="mb-4">
//       <input
//         type="text"
//         placeholder="Search by title, category, or description..."
//         value={searchText}
//         onChange={handleInputChange}
//         className="w-full p-2 border border-gray-300 rounded-md"
//       />
//     </div>
//   );
// };

// export default SearchBar;
