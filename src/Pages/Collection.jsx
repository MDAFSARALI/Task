
import React, { useContext, useEffect, useState } from 'react';
import { shopContext } from '../Context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../Components/Title';
import ProductItem from '../Components/ProductItem';

const Collections = () => {
  const { products, search, showSearch } = useContext(shopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);

  // State for filters
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [sortType, setSortType] = useState('relavent');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(Infinity);

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const toggleType = (e) => {
    if (type.includes(e.target.value)) {
      setType((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setType((prev) => [...prev, e.target.value]);
    }
  };

  const sortProduct = () => {
    let filterProductCopy = filterProducts.slice();
    switch (sortType) {
      case 'low-high':
        setFilterProducts(filterProductCopy.sort((a, b) => a.price - b.price));
        break;
      case 'high-low':
        setFilterProducts(filterProductCopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyFilter();
        break;
    }
  };

  const applyFilter = () => {
    let productsCopy = products.slice();

    if (category.length > 0) {
      productsCopy = productsCopy.filter((item) => category.includes(item.category));
    }
    if (type.length > 0) {
      productsCopy = productsCopy.filter((item) => type.includes(item.type));
    }
    if (showSearch && search) {
      productsCopy = productsCopy.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (minPrice || maxPrice < Infinity) {
      productsCopy = productsCopy.filter(
        (item) => item.price >= minPrice && item.price <= maxPrice
      );
    }
    setFilterProducts(productsCopy);
  };

  useEffect(() => {
    applyFilter();
  }, [category, type, minPrice, maxPrice, sortType, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sortType]);

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      {/* Filters for left side */}
      <div className='min-w-60 mb-20'>
        <p onClick={() => setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="Drop_Down_Icon" />
        </p>
        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Footwear'} onChange={toggleCategory} /> Foot Wear
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Electronics'} onChange={toggleCategory} /> Electronics
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Dresses'} onChange={toggleCategory} /> Dresses
            </p>
          </div>
        </div>
        {/* Sub category filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Flip-flop'} onChange={toggleType} /> Flip-flop
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Sneakers'} onChange={toggleType} /> Sneakers
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Casuals'} onChange={toggleType} /> Casuals
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Mobile'} onChange={toggleType} /> Mobile
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Watch'} onChange={toggleType} /> Watch
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Tv'} onChange={toggleType} /> TV
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Ac'} onChange={toggleType} /> AC
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Fridge'} onChange={toggleType} /> Fridge
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Men'} onChange={toggleType} /> Men
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Women'} onChange={toggleType} /> Women
            </p>
            <p className='flex gap-2'>
              <input type="checkbox" className='w-3' value={'Kids'} onChange={toggleType} /> Kids
            </p>
          </div>
        </div>
        {/* Price Filter */}
        <div className="border mt-5 px-2 py-5">
          <p className='mb-3 text-sm font-medium'>RANGE</p>
        <div className="w-40 flex flex-col mt-5 items-center m-auto">
          <p>Min amount: <input type="number" className='border-b w-full outline-none border-black my-2' value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value) || 0)} /></p>
          <p>Max amount: <input type="number" className='border-b w-full outline-none border-black my-2' value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value) || Infinity)} /></p>
        </div>
        </div>
      </div>

      {/* Right Side Portion */}
      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          {/* Product Sorting Technique */}
          <select className='border-2 border-gray-300 text-sm px-2' onChange={(e) => setSortType(e.target.value)}>
            <option value="relavent">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem key={index} id={item._id} name={item.name} price={item.price} image={item.image} rating={item.rating} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collections;
