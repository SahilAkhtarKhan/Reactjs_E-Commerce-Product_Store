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

  /**
   * @description This method is use to search the products
   * @param {*} e
   */
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

  /**
   * @description This method is use to delete the specific products
   * @param {*} e
   */
  function handleDelete(id) {
    const copyList = [...APIProductList];
    const newList = copyList.filter((data) => {
      return data.id !== id;
    });
    setAPIProductList([...newList]);
  }

  /**
   * @description This method is use to edit the products
   * @param {*} e
   */
  function handleEdit(item) {
    setEditElem(item);
  }

  /**
   * @description This method is use to update the products
   * @param {*} e
   */
  function onUpdate(item) {
    setAPIProductList((products) => {
      return products.map((element) => {
        if (element.id == item.id) {
          return item;
        }
        return element;
      });
    });
    setEditElem({});
    alert("Product updated succesfully");
  }

  return (
    <>
      <EditForm editElem={editElem} onUpdate={onUpdate} /> <br />
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
