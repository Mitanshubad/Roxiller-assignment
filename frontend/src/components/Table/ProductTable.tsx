
import { useEffect, useState } from 'react';
import ProductTableHead from './ProductTableHead';
import ProductTableBody from './ProductTableBody';

import SearchFilter from './SearchFilter';
import Pagination from './Pagination';
import { ProductType } from '../../types/types';
import { getAllProducts, searchProducts } from '../../api/productApi-clients';
import { useMonth } from '../../contexts/MonthContext';
import ShimmerTable from './Shimmer';

const ProductTable = () => {
  const [productData, setProductData] = useState<ProductType[]>([]);
  const [filteredData, setFilteredData] = useState<ProductType[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const { selectedMonth } = useMonth();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [loading, setLoading] = useState(true);

  const itemsPerPage = 10;
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
      const startIndex = (page - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;
      setFilteredData(productData.slice(startIndex, endIndex));
    }
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const products = await getAllProducts();
        const totalProducts = products.length;
        const totalPages = Math.ceil(totalProducts / itemsPerPage);

        setProductData(products);
        setFilteredData(products.slice(startIndex, endIndex));
        setTotalPages(totalPages);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!isSearching) {
      fetchProducts();
    } else {
      setFilteredData(productData.slice(startIndex, endIndex));
    }
  }, [currentPage, startIndex, endIndex, isSearching]);

  const handleSearch = async (searchText: string) => {
    try {
      setLoading(true);
      if (!searchText) {
        setIsSearching(false);
        const products = await getAllProducts();
        setProductData(products);
        setFilteredData(products.slice(startIndex, endIndex));
      } else {
        setIsSearching(true);
        const filteredProducts = await searchProducts(searchText, selectedMonth);
        setFilteredData(filteredProducts.slice(startIndex, endIndex));
        setTotalPages(Math.ceil(filteredProducts.length / itemsPerPage));
        setCurrentPage(1);
      }
    } catch (error) {
      console.error('Error searching products:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white px-4 md:px-8">
        <div className="w-full max-w-6xl p-6 rounded-lg shadow-lg">
          <ShimmerTable />
        </div>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen text-gray-800 px-4 md:px-8 bg-gray-100">
      <div className="w-full max-w-6xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="mb-6 text-2xl font-bold md:text-3xl">Transaction List</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
          <SearchFilter />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-gray-300 rounded-md">
            <ProductTableHead />
            <ProductTableBody data={filteredData} />
          </table>
        </div>

        <div className="flex justify-center mt-5">
          <Pagination
            page={currentPage}
            pages={totalPages}
            onPageChange={handlePageChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ProductTable;
