import { useEffect } from "react";
import { useState } from "react";
import ProductList from "../ProductList/index.jsx";

function ApiData() {
  const [APIProductList, setAPIProductList] = useState([]); // main data coming from API
  const [copyAPIProductList, setCopyAPIProductList] = useState([]); // copy of main data

  // fetching API URL
  useEffect(() => {
    const fetchedAPI = fetch("https://fakestoreapi.com/products");
    const fetchedResponse = fetchedAPI.then((res) => res.json());
    fetchedResponse
      .then((data) => {
        setAPIProductList(data); // adding data in main list
        setCopyAPIProductList(data); // maintaing copy list also
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    <>
      {/* {console.log(APIProductList)} */}
      <ProductList // All product list component
        APIProductList={APIProductList}
        setAPIProductList={setAPIProductList}
        copyAPIProductList={copyAPIProductList}
        setCopyAPIProductList={setCopyAPIProductList}
      />
    </>
  );
}
export default ApiData;
