import React, {useState} from "react";
import styled from "styled-components";
import Header from "./Header";
import { useSelector } from "react-redux";

function CheckoutPage() {
  const [formData, setFormData] = useState({
    email: "",
    country: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    cardNumber: "",
    expirationDate: "",
    securityCode: "",
    cardName: "",
    phone: ""

  });
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(formData)
  }

  return (
    <Container>
      <Header shouldHide={true} />
      <Form>
        <h4>Contact</h4>
        <input type="text" placeholder="Email" onChange={handleInputChange} name="email" value={formData.email}/>
        <section>
          <input type="checkbox" />
          <p>Email me with news and offers</p>
        </section>
        <Divider />
        <h4>Delivery</h4>
        <select name="country" id="" placeholder="country/region" value={formData.country} onChange={handleInputChange}>
          <option defaultValue="" disabled selected hidden>
            {" "}
            --Country/Region--{" "}
          </option>
          <option value="United States">United States</option>
          <option value="Bangladesh">Bangladesh</option>
          <option value="Canada">Canada</option>
          <option value="United Kingdom">United Kingdom</option>
          <option value="Germany">Germany</option>
          <option value="Algeria">Algeria</option>
        </select>
        <input type="text" placeholder="First name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
        <input type="text" placeholder="Last name" name="lastName" value={formData.lastName} onChange={handleInputChange}/>
        <input type="text" placeholder="Address" onChange={handleInputChange} value={formData.address} name="address" />
        {/* <p class="apartment">+ Add apartment, suite, etc.</p> */}
        <input type="text" placeholder="City" name="city" value={formData.city} onChange={handleInputChange} />
        <input type="text" placeholder="State" name="state" value={formData.state} onChange={handleInputChange} />
        <input type="text" placeholder="Zip code" name="zipCode" value={formData.zipCode} onChange={handleInputChange} />
        <input type="text" placeholder="Phone (optional)" name="phone" value={formData.phone} onChange={handleInputChange} />
        <section>
          <input type="checkbox" />
          <p>Save this information for next time</p>
        </section>
        {/* <h5>Shipping method</h5> */}
        <Divider />
        <PaymentSection>
          <h4>Payment</h4>
          <p>All transactions are secure and encrypted.</p>
        </PaymentSection>
        <PaymentBody>
          <CreditHeader>
            <p>Credit card</p>
          </CreditHeader>
          <input type="text" placeholder="Card number" value={formData.cardNumber} name="cardNumber" onChange={handleInputChange} />
          <input type="text" placeholder="Expiration date ( MM / YY)" onChange={handleInputChange} value={formData.expirationDate} name="expirationDate"/>
          <input type="number" placeholder="Security code" onChange={handleInputChange} value={formData.securityCode} name="securityCode" />
          <input type="text" placeholder="Name on card" onChange={handleInputChange} value={formData.cardName} name="cardName" />
          <section>
            <input type="checkbox" />
            <p>Use shipping address as billing address</p>
          </section>
        </PaymentBody>
        <Divider />
        <OrderSummary>
          <h4>Order Summary</h4>
          <OrderWrapper>
            {cartItems.map((item) => (
              <div key={item.id}>
                <ImgWrapper>
                  <img src={item.picture} alt={item.title} />
                </ImgWrapper>
                <Caption>
                  <p>{item.title}</p>
                </Caption>
              </div>
            ))}
          </OrderWrapper>

          <DiscountWrapper>
            <input type="number" placeholder="Security code" />
            <Button>Apply</Button>
          </DiscountWrapper>
          <OrderSection>
            <p>Subtotal</p>
            <h5>{cartTotal}</h5>
          </OrderSection>
          <OrderSection>
            <p>Shipping</p>
            <p>Enter shipping address</p>
          </OrderSection>
          <OrderSection>
            <h5>Total</h5>
            <p>
              USD <b>{cartTotal}</b>
            </p>
          </OrderSection>
        </OrderSummary>
        <PayButton onClick={handleSubmit}>Pay now</PayButton>
      </Form>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: fit-content;
  padding: 10px 50px;
  margin: 0 auto;
  border-radius: 7px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 375px;
  width: 100%;

  p.apartment {
    width: 100%;
    text-align: start;
  }

  p {
    font-size: 14px;
  }

  h4 {
    margin-bottom: 4px;
    width: 100%;
    text-align: start;
  }

  section {
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.1rem;

    input[type="checkbox"] {
      width: 1rem;
      height: 1rem;
      accent-color: green;
    }
  }

  input:focus {
    outline: none;
  }
  select option {
    width: inherit;
    outline: none;
  }

  input,
  select {
    width: 100%;
    height: 48px;
    padding: 0px 10px;
    outline: none;
    margin-bottom: 10px;
  }
`;

const Divider = styled.div`
  width: 100%;
  height: 14px;
  background: rgba(0, 0, 0, 0.1);
`;

const PaymentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin: 0;

  h4 {
    margin-bottom: 2px;
  }
  p {
    margin: 4px 0;
  }
`;

const CreditHeader = styled.div`
  width: 100%;
  height: 24px;
  margin-bottom: 10px;
  padding: 0;

  p {
    text-align: start;
  }
`;

const PaymentBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Caption = styled.div`
  display: flex;
  flex-direction: row;

  p {
    margin: 4px 0;
  }
`;

const ImgWrapper = styled.div`
  width: 22px;
  height: 22px;

  img {
    width: 100%;
    height: 100%;
  }
`;

const DiscountWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;

  input {
    flex: 1;
  }
`;

const OrderSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const PayButton = styled.button`
  width: 100%;
  height: 48px;
  background: #d72029;
  color: white;
  border: none;
  outline: none;
  border-radius: 4px;
  font-weight: bold;
`;

const Button = styled.button`
  height: 52px;
  padding: 0px 10px;
  text-align: center;
`;

export default CheckoutPage;
