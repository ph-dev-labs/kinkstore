import React, { useState } from "react";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useGetCategoryQuery } from "../redux/api/api";
import MenuOptions from "./MenuOptions";
import CloseIcon from "@mui/icons-material/Close";
import CartPage from "./CartPage";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/login/login";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginOutlinedIcon from '@mui/icons-material/LoginOutlined';

export default function Header({ shouldHide }) {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility
  const data = useGetCategoryQuery();
  const [isMenuClicked, setMenuClicked] = useState(false);
  const cartItems = useSelector((state) => state.cart.cartItems)
  const token = useSelector((state) => state.login.token)
  const dispatch = useDispatch()

  function handleLogin() {
    const navigationSide = token ? "/orderpage" : "/login"
    navigate(navigationSide);
  }




  function handleMenuToggle() {
    setMenuClicked(!isMenuClicked);
  }


  const handleLogout = () => {
    dispatch(logout())
    toast.success("Logout Successful")
  }

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <Container>
      {isMenuClicked && <MenuOptions toggle={handleMenuToggle} />}

      {/* The "shouldHide" flag is used to hide the HeaderText when the checkout page is rendered. */}
      {shouldHide ? (
        ""
      ) : (
        <HeaderText>
          <p>Free shipping Over $69 for US | Discreet Shipping and Billing</p>
        </HeaderText>
      )}
      <Navbar>
        <MainHeader>
          <section className="left">

            {/*  The "shouldHide" flag is used to hide the Menu icon when the checkout page is rendered. */}
            {shouldHide ? "" : <Menu onClick={handleMenuToggle} />}

            <Logo
              src="/images/ADS-1.png"
              onClick={() => {
                navigate("/");
              }}
            />

          </section>

          {/* "shouldHide" flag is used to hide the search, profile and cart icons.  */}
          {shouldHide ? (
            ""
          ) : (
            <section className="right">
              <Search /> 
              <Profile onClick={handleLogin} /> 
              {/* onClick event to toggle the CartPage */}
              <Row>
                <Cart onClick={toggleCart} />
                <Quantity>{cartItems.length}</Quantity>
              </Row>
           { token ?  <Logout onClick={handleLogout} />  : "" }
            </section>
          )}
        </MainHeader>
      </Navbar>
      {/* Render CartPage based on isCartOpen state */}
      {isCartOpen && (
        <CartPageContainer>
          <CartPage toggle={toggleCart} />
        </CartPageContainer>
      )}
      <ToastContainer />
    </Container>
  );
}

const Container = styled.div``;

const Navbar = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  // position: sticky;
  top: 18px;
  left: 0;
  right: 0;
  z-index: 100;
  background: white;
`;

const HeaderText = styled.div`
  display: flex;
  color: red;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgba(255, 0, 0, 0.3);
  
  p {
    text-align: center;
    line-height: 1.5;
    font-size: 1rem;
  }
`;

const MainHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: black;
  padding: .1rem;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  section.left {
    display: flex;
    color: inherit;
    justify-content: baseline;
    align-items: center;
  }

  section.right {
    display: flex;
    color: inherit;
    justify-content: space-between;
    align-items: center;
    margin-right: 4rem;
    transform: translateX(.7rem);
  }
`;

const Logo = styled.img`
  max-width: 100px;
  height: 80px;
  object-fit: cover;
  cursor: pointer;
`;

const CartPageContainer = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 999;
`;
const Menu = styled(MenuIcon)`
  cursor: pointer;
`;
const Search = styled(SearchIcon)`
  cursor: pointer;
`;
const Profile = styled(PersonOutlineIcon)`
  cursor: pointer;
  margin: 2rem;
`;
const Cart = styled(ShoppingCartOutlinedIcon)`
  cursor: pointer;
`;
const Close = styled(CloseIcon)`
  font-weight: bold;
  margin-right: 0.5rem;
  font-size: 2rem;
  cursor: pointer;
`;

const Logout = styled(LoginOutlinedIcon)`
cursor: pointer;
transform: translateX(.7rem);
`;

const Quantity = styled.div `
border-radius: 50%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
background-color: red;
height: 1.5rem;
width:1.5rem;
text-align: center;
color: white;
font-size: .7rem;
transform: translateY(-1.1rem);
margin-left: .7rem;
position: absolute;

`;

const Row = styled.div `
display: flex;
flex-direction: row;
`;

const H4 = styled.h3 `
color: red;
width: 3rem;
padding: .7rem;
`