import React from "react";
import { useState } from "react";
import { Table } from "reactstrap";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Sort from "../Sort/Index";
import EditForm from "./EditForm";

export default function ProductList(props) {
  const [searchProduct, setSearchProduct] = useState(""); // input search state
  const [editElem, setEditElem] = useState({});
  const {
    APIProductList,
    setAPIProductList,
    copyAPIProductList,
    setCopyAPIProductList,
  } = props;

  // handling searching products
  function handleSearchedProduct(e) {
    setSearchProduct(e.target.value); // updating changed data from input
    if (searchProduct == "") {
      setAPIProductList([...APIProductList]); // rendering original list
    } else {
      // apply filter on copied list
      const searchedProductList = copyAPIProductList.filter((productItem) => {
        let result =
          productItem.category
            .toUpperCase()
            .includes(e.target.value.toUpperCase()) ||
          productItem.title
            .toUpperCase()
            .includes(e.target.value.toUpperCase()) ||
          productItem.description
            .toUpperCase()
            .includes(e.target.value.toUpperCase());
        return result;
      });
      setAPIProductList(searchedProductList); // rendering searched list
    }
  }

  // handling delete
  function handleDelete(id) {
    const copyList = [...APIProductList];
    const newList = copyList.filter((data) => {
      return data.id !== id;
    });
    setAPIProductList([...newList]);
  }

  // handle edit

  function handleEdit(item) {
    setEditElem({ ...item });
    // console.log(editElement);
  }

  // handling toggle switch
  function handleToggleSwitch(e) {}

  return (
    <>
      <EditForm editElem={editElem} /> <br />
      <span className="searchBar">
        <input
          className="searchInput"
          type="text"
          placeholder="Search here...."
          onChange={handleSearchedProduct}
        />
      </span>
      <br />
      {/* Sorting Component  */}
      <Sort
        APIProductList={APIProductList}
        setAPIProductList={setAPIProductList}
      />
      <button onClick={handleToggleSwitch}>Toggle Switch</button>
      <div className="parent-cards">
        {APIProductList.map((item) => {
          return (
            <div key={item.id} className="row product product-parent">
              <div className="col-md-2 category-img-price">
                <div>
                  <strong>{item.category} </strong>
                </div>
                <img src={item.image} alt="Item Image" height="50" />
                <div className="col-md-2 product-price">
                  Price:-
                  {item.price}
                  <sub> Rs.</sub>
                </div>
              </div>
              <div className="col-md-8 product-detail">
                <p>
                  <strong> Title :- </strong> {item.title}
                </p>
                <p className="description">
                  <strong> Description :- </strong> {item.description}
                </p>
              </div>
              <div className="edit-delete-btn">
                <button onClick={() => handleEdit(item)}>Edit</button>
                <button onClick={() => handleDelete(item.id)}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
