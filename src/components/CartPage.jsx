import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCartItemQuantity,
  removeItemFromCart,
  clearCart,
} from "../redux/Cart/Cart"; // Replace with your cart slice path
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const CartPage = ({ toggle }) => {
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartTotal = useSelector((state) => state.cart.totalPrice);
  const navigate = useNavigate()

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateCartItemQuantity({ itemId, quantity }));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const handleNavigate = () => {
    navigate("/checkout")
  }

  return (
    <Container>
      <CartHeader>
        <span>
          Cart <b>.</b> {cartItems.length}
        </span>
        <CloseButton onClick={toggle} />
      </CartHeader>
      <Cart breakpoint={breakPoint}>
        {cartItems.map((item) => (
          <CartItemWrapper key={item.id}>
            <CartItem src={item.picture} alt={item.title} />
            <CartInfo>
              <Section breakpoint={breakPoint}>
                <p>{item.title}</p>
                <DeleteIcon onClick={() => handleRemoveFromCart(item.id)} />
              </Section>
              <Section breakpoint={breakPoint}>
                <CartIncreaseDecreaseWrapper>
                  <div
                  onClick={() => {
                    if (item.quantity > 0) {
                      handleUpdateQuantity(item.id, item.quantity - 1);
                    } else {
                      dispatch(removeItemFromCart(item.id));
                    }
                  }}
                  
                  >
                    -
                  </div>
                  <div>{item.quantity}</div>
                  <div
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity + 1)
                    }
                  >
                    +
                  </div>
                </CartIncreaseDecreaseWrapper>
                <H4>${(item.price * item.quantity).toFixed(2)}</H4>
              </Section>
            </CartInfo>
          </CartItemWrapper>
        ))}
      </Cart>
      <Button onClick={handleNavigate}>checkout  ${cartTotal.toFixed(2)}</Button>
    </Container>
  );
};

// Your styled components...

export default CartPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  justify-content: flex-start;
  align-items: center;
  max-width: 390px;
  width: 90%;
  height: auto;
  max-height: 100vh; /* Set a maximum height */
  overflow-y: auto; /* Enable vertical scrolling */
  border-radius: 4px;
  margin: 3px 10px 0;

  h4 {
    color: #d72029;
  }
`;

const CartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
 
`;

const CloseButton = styled(CloseIcon)`
  background: rgba(0, 0, 0, 0.2);
  cursor: pointer;
`;

const Cart = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);

`;

const CartItemWrapper = styled.div`
  padding: 1rem;
`;

const CartItem = styled.img`
  width: 30%;
  height: 7rem;
 ;
`;

const CartInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

const Section = styled.div`
  display: flex;
  justify-content: ${({breakpoint})=> breakpoint ? "center" : "flex-start"};
  align-items: center;
  gap: 1rem;
`;

const DeleteIcon = styled(DeleteOutlineOutlinedIcon)``;

const CartIncreaseDecreaseWrapper = styled.div`
  display: flex;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid grey;
    cursor: pointer;
  }

  div:nth-child(even) {
    width: 45px;
    height: 30px;
  }

  div:nth-child(odd) {
    width: 30px;
    height: 30px;
  }
`;
const Button = styled.div`
  background: #d72029;
  padding: 15px 30px;
  color: white;
  text-align: center;
  width: 50%;
  margin: 0 auto;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 3.5rem;
  margin-bottom: 1.5rem;
  bottom: 0;

`;

const H4 = styled.h4`
padding: 1rem;
`


const H2 = styled.h2`
  padding: 1rem;
  position: absolute;
  bottom: 0;
  right: 0;
  margin-left: 1rem;
`;