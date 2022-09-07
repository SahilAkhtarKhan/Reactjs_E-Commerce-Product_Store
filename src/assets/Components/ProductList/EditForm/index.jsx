import { useEffect } from "react";
import { useState } from "react";

export default function EditForm({ editElem }) {
  const [editData, setEditData] = useState({});
  const [editcategory, setEditcategory] = useState("");

  // function editFormData(e){

  // }
  return (
    <>
      <form
        style={{
          border: "1px solid black",
          width: "fit-content",
          padding: "25px",
        }}
      >
        <div>
          <label>Category</label>
          <input
            type="text"
            defaultValue={
              Object.keys(editElem).length === 0 ? "" : editElem.category
            }
            onChange={(e) => setEditcategory(e.target.value)}
            name="category"
          />
        </div>
        <div>
          <label>Title</label>
          <input
            type="text"
            defaultValue={
              Object.keys(editElem).length === 0 ? "" : editElem.title
            }
            onChange={(e) => setEditData(e.target.value)}
            name="title"
          />
        </div>
        <div>
          <label>Description</label>
          <textarea
            name="description"
            defaultValue={
              Object.keys(editElem).length === 0 ? "" : editElem.description
            }
            // onChange={(e) => setEditData(e.target.value)}
            cols="30"
            rows="5"
          ></textarea>
        </div>
        <div>
          <label>Price</label>
          <input
            type="number"
            defaultValue={
              Object.keys(editElem).length === 0 ? "" : editElem.price
            }
            // onChange={(e) => setEditData(e.target.value)}
            name="number"
          />
          <button>Update</button>
        </div>
      </form>
    </>
  );
}
