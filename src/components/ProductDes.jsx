import React, {useState} from "react";
import Header from "./Header";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import { useGetProductDescQuery } from "../redux/api/api";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useDispatch, useSelector } from "react-redux";
import { addItemToCart } from "../redux/Cart/Cart";
import { ToastContainer, toast } from "react-toastify";


const ProductDes = () => {
  const [quantity, setQuantity] = useState(1)
  const breakPoint = useMediaQuery({ query: "(max-width: 999px)" });
  const { productId } = useParams();
  const dispatch = useDispatch();
  const cartItem = useSelector((state) =>
    state.cart.cartItems.find((item) => item.id === productId)
  );


  const { data, isError, isLoading, isSuccess } =
    useGetProductDescQuery(productId);

  if (isLoading) {
    return <h2>FETCHING DATA...</h2>;
  }

  const incrementQuantity = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
  };

  const decrementQuantity = () => {
    const newQuantity = Math.max(quantity - 1, 1);
    setQuantity(newQuantity);
  };

  const { picture, id, description, discount_price, price, title } = data;

  const handleAddToCart = () => {
    // Dispatch the addItemToCart action with the product data
    toast.success("product has been added to cart");
    dispatch(addItemToCart({ id, title, price, picture,quantity }));
  };

  if (isError) {
    return <h2>Error Loading product details...</h2>;
  }

  return (
    <Container key={id}>
      <Header />
      <ImageContainer>
        <ProductImg src={picture} />
      </ImageContainer>
      <h4>{title}</h4>
      <Divider />
      <BuySection>
        <h4>
          Price: <span>${price}</span>{" "}
        </h4>
        <Section>
          <h4>Quantity:</h4>
          <QuantityContainer>
            <div onClick={decrementQuantity}> - </div>
            <div>{quantity}</div>
            <div onClick={incrementQuantity}> + </div>
          </QuantityContainer>
        </Section>
        <Description>
          <h4>Description</h4>
          <p>{description}</p>
        </Description>
        <Button onClick={handleAddToCart}>Add to cart</Button>
      </BuySection>
      <ToastContainer />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  h4 {
    text-align: start;
    margin-left: 2rem;
  }

  div ~ h4 {
    align-self: flex-start;
  }
`;

const ImageContainer = styled.div`
  max-width: 350px;
  height: 350px;
  align-self: center ;
 
`;

const ProductImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`;

const Divider = styled.div`
  height: 1px;
  background: grey;
  width: 100%;
`;

const BuySection = styled.div`
  display: flex;
  flex-direction: column;

  span {
    margin-left: 2.5rem;
    color: #d72029;
  }

  h4 {
    text-align: start;
    font-weight: bold;
  }
`;
const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const QuantityContainer = styled.div`
  display: flex;
  gap: 0;
  margin-left: 1rem;

  div {
    border: 1px solid grey;
    cursor: pointer;
  }

  div: nth-child(odd) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 42px;
    height: 42px;
    color: #677279;
  }

  div: nth-child(even) {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 64px;
    height: 42px;
    font-weight: bold;
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
`;

const Description = styled.div`
  padding-bottom: 2rem;
  p {
    text-align: start;
    margin-left: 2rem;
  }
`;
export default ProductDes;
