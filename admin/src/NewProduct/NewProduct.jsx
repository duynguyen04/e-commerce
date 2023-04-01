import React, { useState } from "react";
import axiosClient from "../API/axiosClient";
import "./NewProduct.css";

const NewProduct = () => {
  const [name, setname] = useState("");
  const [price, setprice] = useState();
  const [category, setcategory] = useState("");
  const [shortDesc, setshortDesc] = useState("");
  const [longDesc, setlongDesc] = useState("");
  const [imgarr, setimgarr] = useState([]);
  const setImgArrHanle = (event) => {
    const inputValues = event.target.value.split(","); // tách các giá trị nhập vào thành một mảng
    setimgarr(inputValues);
  };
  const submitHanle = (e) => {
    e.preventDefault();
    // console.log(name,category,shortDesc,longDesc)
    const data = {
      name: name,
      price: price,
      category: category,
      shortDesc: shortDesc,
      longDesc: longDesc,
      img: imgarr,
    };
    axiosClient.post("/newproduct", data).then((data) => {
      if (data.data.status == true) {
        window.location.replace("/");
      } else {
        alert("Tạo Product thất bại");
      }
    });
  };
  return (
    <div>
      <form onSubmit={submitHanle}>
        <div>
          <div htmlFor="" className="title">
            Product Name
          </div>
        </div>
        <div>
          <input
            className="input-name"
            type="text"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => {
              setname(e.target.value);
            }}
          />
        </div>
        <div>
          <div htmlFor="" className="title">
            Product Price
          </div>
        </div>
        <div>
          <input
            className="input-name"
            type="text"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) => {
              setprice(e.target.value);
            }}
          />
        </div>
        <div>
          <div htmlFor="" className="title">
            Category
          </div>
        </div>
        <div>
          <input
            className="input-category"
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          />
        </div>
        <div>
          <div htmlFor="" className="title">
            Short Description
          </div>
        </div>
        <div>
          <input
            className="input-Short-Desc"
            type="text"
            placeholder="Enter Short Description"
            value={shortDesc}
            onChange={(e) => {
              setshortDesc(e.target.value);
            }}
          />
        </div>
        <div>
          <div htmlFor="" className="title">
            Long Description
          </div>
        </div>
        <div>
          <input
            className="input-Long-Desc"
            type="text"
            placeholder="Enter Long Description"
            value={longDesc}
            onChange={(e) => {
              setlongDesc(e.target.value);
            }}
          />
        </div>
        <div>
          <div htmlFor="" className="title">
            Upload image (4 images separated by commas ",")
          </div>
        </div>
        <div>
          <textarea
            className="img-input"
            value={imgarr.join(",")}
            onChange={setImgArrHanle}
          ></textarea>
        </div>
        <button className="submit-form">Submit</button>
      </form>
    </div>
  );
};

export default NewProduct;
