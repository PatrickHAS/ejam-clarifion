import { StyeldStatusCart } from "./styles";

const StatusCart = () => {
  return (
    <StyeldStatusCart>
      <div>
        <img src={"confirmad-green.png"} alt="" />
        <p>Step 1 : Cart Review</p>
      </div>
      <div>
        <img src={"confirmad-green.png"} alt="" />
        <p>Step 2 : Checkout</p>
      </div>
      <div className="offer">
        <img src={"three.png"} alt="" />
        <p>Step 3 : Special Offer</p>
      </div>
      <div>
        <img src={"four.png"} alt="" />
        <p>Step 4 : Confirmation</p>
      </div>
    </StyeldStatusCart>
  );
};

export default StatusCart;
