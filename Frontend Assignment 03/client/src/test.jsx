import React from "react";

const html = () => {
  return (
    <div>
      <h1>Xin chào</h1>
      <div>Phone: 123123132123</div>
      <div>Addres: áđasd</div>
      <table>
        <tr>
          <th>Tên sản phẩm</th>
          <th>Hình ảnh</th>
          <th>Giá</th>
          <th>Số lượng</th>
          <th>Thành tiền</th>
        </tr>
        {/* {product &&
          product.map((item) => {
            <tr>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
              <td>{item.name}</td>
            </tr>;
          })} */}
      </table>
      <h1>Tổng thanh toán</h1>
      <h1>123123123123</h1>
      <h1>Cảm ơn bạn!</h1>
    </div>
  );
};

export default html;
