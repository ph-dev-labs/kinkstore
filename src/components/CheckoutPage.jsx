import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Header from "./Header";
import { useSelector } from "react-redux";
import { usePaymentMutation } from "../redux/api/api";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { TailSpin } from "react-loader-spinner";
import { useMediaQuery } from "react-responsive";
import Footer from "./Footer";



function CheckoutPage() {

  const [expiry, setExpiry] = useState("");

  const handleExpiryChange = (event) => {
    let input = event.target.value;

    // Ensure the input only contains digits
    input = input.replace(/\D/g, "");

    // Format the input as MM/YY
    if (input.length > 2) {
      input = input.slice(0, 2) + "/" + input.slice(2);
    }

    // Update state with the formatted input
    setExpiry(input);
  };

  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    user: {
      email: "",
      full_name: "",
      phone: "",
    },
    cart: {
      prodData: [],
    },
    payment: {
      cardNumber: "",
      expirationDate: "",
      securityCode: "",
      cardName: "",
      amount: "",
    },
    address: {
      country: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
    },
  });
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const [paymentApi] = usePaymentMutation();
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const [parent, child] = name.split("."); // Splitting the name by '.' to access nested properties

    setFormData((prevFormData) => ({
      ...prevFormData,
      [parent]: {
        ...prevFormData[parent],
        [child]: value,
      },
    }));
  };

  console.log(formData)

  useEffect(() => {
    const updatedCart = cartItems.map((item) => ({
      id: item.id,
      quantity: item.quantity,
    }));
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      cart: {
        ...prevFormData.cart,
        prodData: [...prevFormData.cart.prodData, ...updatedCart], // Update prodData with id and quantity
      },
      payment: {
        ...prevFormData.payment,
        amount: parseInt(cartTotal),
        expirationDate: expiry, // Use the updated expiry here
      },
    }));
  }, [cartItems, expiry]); // Include expiry as a dependency
  ;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData)
    // Extracting id and quantity from each cartItem
    // Check if any field is empty

    if (
      formData.user.email === "" ||
      formData.user.full_name === "" ||
      formData.user.phone === "" ||
      formData.payment.cardNumber === "" ||
      formData.payment.expirationDate === "" ||
      formData.payment.securityCode === "" ||
      formData.payment.cardName === "" ||
      formData.address.country === "" ||
      formData.address.address === "" ||
      formData.address.city === "" ||
      formData.address.state === "" ||
      formData.address.zipCode === ""
    ) {
      toast.error("Please fill in all fields");
      return;
    }
    try {
      setIsLoading(true);
      const response = await paymentApi(formData);
      if (response.data) {
        setTimeout(() => {
          toast.error(
            "Payment details failed, please contact support for more information"
          );
        }, 5000);
      } else if (response.error.status === 401) {
        toast.error("Login to access this feature");
        setTimeout(() => {
          navigate("/login");
        }, 2500);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <LoaderContainer>
        <TailSpin color="red" radius={"3rem"} /> {/* Display the loader */}
      </LoaderContainer>
    );
  }

  return (
    <Container>
      <Header  />
      <Form breakPoint={breakPoint}>
        <CheckoutContainer>
          <h4>Contact</h4>
          <input
            type="email"
            placeholder="Email"
            onChange={handleInputChange}
            name="user.email"
            value={formData.user.email}
            required
          />
          <Divider />
          <h4>Delivery</h4>
          <select
            name="address.country"
            id=""
            placeholder="country/region"
            value={formData.address.country}
            onChange={handleInputChange}
            required
          >
            <option defaultValue=""> --Country/Region-- </option>
            <option value="United States">United States</option>
            <option value="Bangladesh">Bangladesh</option>
            <option value="Canada">Canada</option>
            <option value="United Kingdom">United Kingdom</option>
            <option value="Germany">Germany</option>
            <option value="Algeria">Algeria</option>
          </select>
          <input
            type="text"
            placeholder="Full name"
            name="user.full_name"
            value={formData.user.full_name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Address"
            onChange={handleInputChange}
            value={formData.address.address}
            name="address.address"
            required
          />
          {/* <p class="apartment">+ Add apartment, suite, etc.</p> */}
          <input
            type="text"
            placeholder="City"
            name="address.city"
            value={formData.address.city}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="State"
            name="address.state"
            value={formData.address.state}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Zip code"
            name="address.zipCode"
            value={formData.address.zipCode}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            placeholder="Phone (optional)"
            name="user.phone"
            value={formData.user.phone}
            onChange={handleInputChange}
            required
          />
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
            <input
              type="number"
              placeholder="Card number"
              value={formData.payment.cardNumber}
              name="payment.cardNumber"
              onChange={handleInputChange}
              required
            />
            <ExpiryInput handleExpiry={handleExpiryChange} expiry={expiry}
              style={{
                width: "100%",
                height: "48px",
                padding: "0 10px",
                outline: "none",
                marginBottom: "10px",
              }}
            />
            <input
              type="number"
              placeholder="cvv"
              onChange={handleInputChange}
              value={formData.payment.securityCode}
              name="payment.securityCode"
              t
              required
            />
            <input
              type="text"
              placeholder="Name on card"
              onChange={handleInputChange}
              value={formData.payment.cardName}
              name="payment.cardName"
              required
            />
          </PaymentBody>
          <Divider />
        </CheckoutContainer>
        <PaymentContainer>
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
              <input type="number" placeholder="Discount code or gift card" />
              <Button>Apply</Button>
            </DiscountWrapper>
            <OrderSection>
              <p>Subtotal</p>
              <h5>${cartTotal}</h5>
            </OrderSection>
            <OrderSection>
              <p>Shipping</p>
              <p>Enter shipping address</p>
            </OrderSection>
            <OrderSection>
              <h5>Total</h5>
              <p>
                USD <b>${cartTotal}</b>
              </p>
            </OrderSection>
          </OrderSummary>
          <PayButton onClick={handleSubmit}>Pay now</PayButton>
        </PaymentContainer>
      </Form>

      <ToastContainer />
      <Footer />
    </Container>
  );
}

const ExpiryInput = ({handleExpiry,expiry}) => {
 
  return (
    <>
      <input
        type="text"
        id="expiry"
        name="expiry"
        placeholder="MM/YY"
        value={expiry}
        maxLength={5} // Limits the input to 5 characters (MM/YY)
        onChange={handleExpiry}
      />
    </>
  );
};

const CheckoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  border: 1px solid rgba(0, 0, 0, 0.2);
  width: 100%;
  margin: 0 auto;
  border-radius: 7px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: ${({ breakPoint }) => (breakPoint ? "column" : "row")};
  justify-content: center;
  align-items: center;
  width: ${({ breakPoint }) => (breakPoint ? "50%" : "70%")};
  min-width: 60%;
  gap: ${({ breakPoint }) => (breakPoint ? "" : "90px")};
  margin: 0 auto;
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
  align-items: center;
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
const LoaderContainer = styled.div `
height: 100%
width: 100%
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
export default CheckoutPage;
