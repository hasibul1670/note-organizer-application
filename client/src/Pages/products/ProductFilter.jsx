/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

const ProductFilter = ({
  priceRange,
  setSelectedGenre,
  setSearchText,
  searchText,
  selectedGenre,
  value,
  handleRangeChange,
}) => {
  return (
    <div className="p-5">
      <p className="text-xl font-semibold  text-cyan-700">Price Range</p>
      <input
        type="range"
        defaultValue={50}
        max={500}
        min={0}
        step={1}
        onChange={handleRangeChange}
        className="range range-info"
      />
      <h1 className="font-bold mb-2 text-red-500 ">From 0tk To {value}tk</h1>

      <input
        type="text"
        className="input input-bordered input-primary w-full max-w-xs mb-3"
        placeholder="Search by name,category,brand"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />

      <select
        className="select select-info w-full max-w-xs mb-5"
        value={selectedGenre}
        onChange={(e) => setSelectedGenre(e.target.value)}
      >
        <option value="">All Category</option>
        <option value="Baby Medicine">Baby Medicine</option>
        <option value="Pet Medicine">Pet Medicine</option>
        <option value="Pet Food">Pet Food</option>
        <option value="Vitamins & Supplements">Vitamins & Supplements</option>
        <option value="Fever & Pain">Fever & Pain</option>
        <option value="Diabetes">Diabetes</option>
        <option value="Blood Pressure & Heart Disease">
          Blood Pressure & Heart Disease
        </option>
        <option value="Digestive Health">Digestive Health</option>
        <option value="Skin & Hair Condition">Skin & Hair Condition</option>
        <option value="Allergy & Asthma">Allergy & Asthma</option>
      </select>
    </div>
  );
};

export default ProductFilter;
