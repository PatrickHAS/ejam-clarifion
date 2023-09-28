import { StyledContainerProduct } from "./styles";

const ContainerProduct = () => {
  return (
    <StyledContainerProduct>
      <div className="all-content">
        <div className="img-and-comment">
          <img src={"product.png"} alt="" />
          <div className="commit">
            <div className="profile-comment">
              <img src={"commit.png"} alt="" />
              <p>
                “As soon as the Clarifions arrived I put one in my bedroom. This
                was late in the afternoon. When I went to the bedroom in the
                evening it smelled clean. When I went to bed I felt I could
                breathe better. Wonderful.”
              </p>
            </div>
          </div>
        </div>
        <div className="info-product--container">
          <h2>
            <span>ONE TIME ONLY</span> special price for 6 extra Clarifion for
            only <span>$14 Each</span>
            <br></br>
            ($84.00 total!)
          </h2>
          <img className="img-product--mobile" src={"product.png"} alt="" />
          <div className="status-product">
            <div className="img-product-small">
              <img src={"product-small.png"} alt="" />
            </div>
            <div className="status-info">
              <div className="name-product">
                <h3>Clarifion Air Ionizer</h3>
                <div className="price">
                  <p className="del">$180</p>
                  <span>$84</span>
                </div>
              </div>
              <img src={"Stars.png"} alt="" />
              <div className="stock-live">
                <div className="live"></div>
                <p>12 left in Stock</p>
              </div>
              <p className="text-status--desktop">
                Simply plug a Clarifion into any standard outlet and replace
                bulky, expensive air purifiers with a simple.
              </p>
            </div>
          </div>
          <p className="text-status">
            Simply plug a Clarifion into any standard outlet and replace bulky,
            expensive air purifiers with a simple.
          </p>
          <div className="product-characteristics">
            <p>
              <img src={"tick-circle.png"} alt="" />
              Negative Ion Technology may <span>help with allergens</span>
            </p>
            <p>
              <img src={"tick-circle.png"} alt="" />
              Designed for <span>air rejuvenation</span>
            </p>
            <p>
              <img src={"tick-circle.png"} alt="" />
              <span>Perfect for every</span> room in all types of places.
            </p>
          </div>
          <div className="status-offer">
            <img src={"porcentagem.png"} alt="" />
            <p>
              Save <span>53%</span> and get <span>6 extra Clarifision</span> for
              only <span>$14 Each.</span>
            </p>
          </div>
          <button>
            Yes - CLAIM MY DISCOUNT <img src={"line.png"} alt="" />
          </button>
          <div className="options-card--container">
            <div className="free-secure--container">
              <div className="free-shipping">
                <p>Free shipping</p>
              </div>
              <div className="secure">
                <img src={"lock.png"} alt="" />
                <p>Secure 256-bit SSL encryption.</p>
              </div>
            </div>
            <div className="cards">
              <img src={"cards.png"} alt="" />
            </div>
          </div>
          <h4>NO THANKS, I DON'T WANT THIS.</h4>
          <div className="guarantee">
            <div className="logo-guarantee">
              <img src={"Satisfaction.png"} alt="" />
            </div>
            <p>
              If you are not completely thrilled with your Clarifion - We have a
              <span> 30 day satisfaction guarantee.</span> Please refer to our
              return policy at the bottom of the page for more details. Happy
              Shopping!
            </p>
          </div>
        </div>
      </div>
    </StyledContainerProduct>
  );
};

export default ContainerProduct;
