import { useEffect, useState } from "react";

export default function Sort({ APIProductList, setAPIProductList }) {
  const [sortType, setSortType] = useState("Select sort type");
  const sortTypeList = ["category", "title", "price"];

  // Sorting
  function handleSort(e) {
    const { value } = e.target;
    setSortType(value);
    APIProductList.sort((a, b) => {
      if (a[value] < b[value]) {
        return -1;
      }
      if (a[value] > b[value]) {
        return 1;
      }
      return 0;
    });
    setAPIProductList([...APIProductList]);
  }

  return (
    <>
      <span className="sort">
        <label>Sort By:- </label>
        <select name="sortTypes" onChange={handleSort} value={""}>
          <option>{sortType}</option>
          {sortTypeList.map((item, index) => {
            return (
              <option value={item} key={index}>
                {item}
              </option>
            );
          })}
        </select>
      </span>
    </>
  );
}
