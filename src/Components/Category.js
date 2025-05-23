import React, { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Category = () => {
  const [open, setOpen] = useState(false);

  return (
    <Wrapper>
      <Hamburger onClick={() => setOpen(!open)}>
        <FaBars size={24} />
      </Hamburger>

      <List open={open}>
        <Slink to={"/cusine/Italian"} onClick={() => setOpen(false)}>
          <h4>Italian</h4>
        </Slink>
        <Slink to={"/cusine/American"} onClick={() => setOpen(false)}>
          <h4>American</h4>
        </Slink>
        <Slink to={"/cusine/Thai"} onClick={() => setOpen(false)}>
          <h4>Thai</h4>
        </Slink>
        <Slink to={"/cusine/Japanese"} onClick={() => setOpen(false)}>
          <h4>Japanese</h4>
        </Slink>
      </List>
    </Wrapper>
  );
};
// Styled Components

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  position: relative;
`;

const Hamburger = styled.div`
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

const List = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    z-index: 10;
    position: absolute;
    top: 40px;
    right: 0;
    background: #fff;
    padding: 1rem;
    border-radius: 10px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
    gap: 1rem;
    display: ${({ open }) => (open ? "flex" : "none")};
  }
`;

const Slink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
  text-decoration: none;
  cursor: pointer;
  transform: scale(0.8);

  h4 {
    color: black;
    font-size: 1rem;
    text-transform: uppercase;
    text-align: center;
  }

  &.active {
    padding: 10px;
    background: linear-gradient(to right, #f27121, #e94057);
    border-radius: 10px;

    h4 {
      color: white;
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;
    width: 100%;
  }
`;

export default Category;
