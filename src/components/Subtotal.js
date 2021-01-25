import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../StateProvider";
import { getBasketTotal } from "../reducer/reducer";

function Subtotal() {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <div>
            <p>
              Subtotal ({basket.length} items) : <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> this order contains a gift
            </small>
          </div>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandsSeparator={true}
        prefix={"$"}
      />

      <button>Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
