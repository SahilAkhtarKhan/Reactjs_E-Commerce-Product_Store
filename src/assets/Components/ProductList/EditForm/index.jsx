import { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export default function EditForm({ editElem, onUpdate }) {
  const [editData, setEditData] = useState({});

  useEffect(() => {
    setEditData(editElem);
  }, [editElem]);

  /**
   * @description This method will handle the form behaviour & updates
   * @param {*} e
   */
  function handleUpdate(e) {
    e.preventDefault();
    onUpdate(editData);
  }

  /**
   * @description This method will handle the changes in the edit form
   * @param {*} e
   */
  function handleOnchange(e) {
    const { value, name } = e.target;
    console.log("LN15", editData);
    setEditData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }
  return (
    <>
      <form>
        <div>
          <label>Category</label>
          <input
            type="text"
            value={editData.category}
            onChange={handleOnchange}
            name="category"
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            value={editData.title}
            onChange={handleOnchange}
            name="title"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            value={editData.description}
            onChange={handleOnchange}
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            value={editData.price}
            onChange={handleOnchange}
            name="price"
          />
          <button onClick={handleUpdate}>Update</button>
        </div>
      </form>
    </>
  );
}
