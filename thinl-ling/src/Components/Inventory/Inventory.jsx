import React, { useState } from "react";
import Data from "./Data.jsx";
import "./inventory.css";
import InventoryDetails from "./InventoryDetails.jsx";

const Inventory = () => {
  const [data, setData] = useState([]);
  const [show, setShow] = useState(true);
  return (
    <div className="inventory-container">
      <h3>Inventory</h3>
      <table>
        <thead>
          <tr>
            <th>
              <input className="inventory-input" type="checkbox" />
            </th>
            <th>PRODUCT</th>
            <th>RATING</th>
            <th>VINTAGE</th>
            <th>QTY</th>
            <th>VOLUME</th>
            <th>COST</th>
            <th>PRICE</th>
            <th></th>
          </tr>
        </thead>
        <tbody className="inventory-tbody">
          {data.map((elem, i) => {
            return (
              <tr key={i} className="inventory-table-row">
                <td>
                  <input className="inventory-input" type="checkbox" />
                </td>
                <td>
                  <div>
                    <img src={elem.image} alt="" />
                    <div>
                      <h3>{elem.brand}</h3>
                      <p>{elem.title}</p>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="rating">
                    <p>{elem.RPrating}</p>
                    <p>{elem.rating}</p>
                  </div>
                </td>
                <td>{elem.vintage}</td>
                <td>{elem.qty}</td>
                <td>{elem.volume}</td>
                <td>{elem.cost}</td>
                <td className="price">{elem.price}</td>
                <td onClick={() => setShow(!show)}>
                  <svg
                    width="12"
                    height="7"
                    viewBox="0 0 12 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 1L6 6L11 1"
                      stroke="#485572"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      {show ? <InventoryDetails /> : null}
      <Data setData={setData} />
    </div>
  );
};

export default Inventory;
