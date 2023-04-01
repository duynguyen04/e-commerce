import React, { useEffect, useState } from "react";
import "./Product.css";
import axiosClient from "../API/axiosClient";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);
  useEffect(() => {
    axiosClient.get("/products-admin").then((data) => {
      setproducts(data.data);
    });
  }, []);
  console.log(products);
  const deleteHanle = (id) => {
    const isconfirm = window.confirm("Bạn có chắc chắn muốn xóa?");
    if (isconfirm) {
      axiosClient.post(`/delete-product/${id}`).then((data) => {
        if (data.data.status == true) {
          alert("Xóa sản phẩm thành công");
          window.location.reload();
        } else {
          alert("Xóa sản phẩm thất bại");
        }
      });
    }
  };
  const renderProduct = (item, index) => {
    return (
      <tr key={index}>
        <td>{item._id}</td>
        <td>{item.name}</td>
        <td>{item.price}</td>
        <td>
          <img src={item.img1} alt="Alternative text" />
        </td>
        <td>{item.category}</td>
        <td>
          <button
            className="editbtn"
            onClick={() => {
              navigate(`/edit-product/${item._id}`);
            }}
          >
            Edit
          </button>
          <button className="deletebtn" onClick={() => deleteHanle(item._id)}>
            Delete
          </button>
        </td>
      </tr>
    );
  };
  return (
    <div>
      <table id="customers">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Image</th>
            <th>Ctegory</th>
            <th>Edit</th>
          </tr>
        </thead>
        <tbody>
          {products.length > 0 ? (
            products.map((item, i) => renderProduct(item, i))
          ) : (
            <tr>
              <td colSpan={9}>No Hotel</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Product;
