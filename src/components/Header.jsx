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

export default function Header() {
  const navigate = useNavigate();
  const [isCartOpen, setIsCartOpen] = useState(false); // State to manage cart visibility
  const data = useGetCategoryQuery();
  const [isMenuClicked, setMenuClicked] = useState(false);

  function handleLogin() {
    navigate("/login");
  }

  function handleMenuToggle() {
    setMenuClicked(!isMenuClicked);
  }

  // Function to toggle cart visibility
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <>
      {isMenuClicked && <MenuOptions toggle={handleMenuToggle} />}

      <HeaderText>
        <p>Free shipping Over $69 for US | Discreet Shipping and Billing</p>
      </HeaderText>
      <Navbar>
        <MainHeader>
          <section className="left">
            <Menu onClick={handleMenuToggle} />
            <Logo src="/images/ADS-1.png"  onClick={()=>{navigate("/")}}/>
          </section>
          <section className="right">
            <Search />
            <Profile onClick={handleLogin} />
            {/* onClick event to toggle the CartPage */}
            <Cart onClick={toggleCart} />
          </section>
        </MainHeader>
      </Navbar>
      {/* Render CartPage based on isCartOpen state */}
      {isCartOpen && (
        <CartPageContainer>
          <CartPage toggle={toggleCart} />
        </CartPageContainer>
      )}
    </>
  );
}

const Navbar = styled.div`
  display: flex;
  height: fit-content;
  flex-direction: column;
  position: sticky;
  top: 0;
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
  padding: 1rem;
  position: sticky;
  left: 0;
  right: 0;
  section.left {
    display: flex;
    color: inherit;
    justify-content: baseline;
    align-items: center;
    gap: 2rem;
  }

  section.right {
    display: flex;
    color: inherit;
    justify-content: space-between;
    width: 30%;
    align-items: center;
  }
`;

const Logo = styled.img`
  max-width: 100px;
  height: 40px;
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
