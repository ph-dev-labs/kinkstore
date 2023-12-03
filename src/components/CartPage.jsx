import React from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import {
  addItemToCart,
  updateCartItemQuantity,
  removeItemFromCart,
  clearCart,
} from "../redux/Cart/Cart"; // Replace with your cart slice path
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import CloseIcon from "@mui/icons-material/Close";

const CartPage = ({ toggle }) => {
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });

  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);

  const handleUpdateQuantity = (itemId, quantity) => {
    dispatch(updateCartItemQuantity({ itemId, quantity }));
  };

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeItemFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

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
            <CartItem src={item.pictures} alt={item.title} />
            <CartInfo>
              <Section breakpoint={breakPoint}>
                <p>{item.title}</p>
                <DeleteIcon onClick={() => handleRemoveFromCart(item.id)} />
              </Section>
              <Section breakpoint={breakPoint}>
                <CartIncreaseDecreaseWrapper>
                  <div
                    onClick={() =>
                      handleUpdateQuantity(item.id, item.quantity - 1)
                    }
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
                <h4>{item.price}</h4>
              </Section>
            </CartInfo>
          </CartItemWrapper>
        ))}
      </Cart>
    </Container>
  );
};

// Your styled components...

export default CartPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 15px 0;
  justify-content: center;
  align-items: center;
  max-width: 390px;
  width: 100%;
  border-radius: 4px;
  margin: 30px 10px 0;
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
  flex-direction: ${({ breakpoint }) => (breakpoint ? "row" : "column")};
  justify-content: center;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 10px 0;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const CartItemWrapper = styled.div`
  width: 70px;
  height: 70px;
  padding: 1rem;
`;

const CartItem = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CartInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Section = styled.div`
  display: flex;
  justify-content: ${({ breakpoint }) =>
    breakpoint ? "center" : "flex-start"};
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
