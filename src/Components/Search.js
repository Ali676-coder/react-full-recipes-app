import React from "react";
import { FaSearch } from "react-icons/fa";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

const Search = () => {
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    navigate("/searched/" + input);
    setInput("");
  };

  return (
    <FormStyle onSubmit={submitHandler}>
      <div>
        <FaSearch />
        <SearchInput
          onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
        />
      </div>
    </FormStyle>
  );
};

// Styled Components
const FormStyle = styled.form`
  div {
    position: relative;
    display: flex;
    padding-right: 1rem;
    margin: 0 40px;
  }
  svg {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translate(100%, -50%);
    color: white;
  }
`;
const SearchInput = styled.input`
  background: linear-gradient(45deg, #494949, #313131);
  color: white;
  padding: 5px 3rem;
  border: none;
  outline: none;
  height: 50px;
  font-size: 1.2rem;
  width: 100%;
  border-radius: 10px;
  @media (max-width: 768px) {
    font-size: 1rem;
    height: 40px;
  }
`;
export default Search;
