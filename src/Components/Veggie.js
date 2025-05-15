import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import { Link } from "react-router-dom";
const Veggie = () => {
  // States
  const [veggie, setVeggie] = useState([]);
  // Fetch Random Recipes Function

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8&tags=vegetarian`
      );
      const data = await api.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  // Render Random Recipes
  useEffect(() => {
    getVeggie();
  }, []);
  return (
    <div>
      <Wrapper>
        <h3>Vegetarian Picks</h3>
        <Splide
          options={{
            perPage: 3,
            gap: "1rem",
            arrows: false,
            pagination: false,
            breakpoints: {
              1024: {
                perPage: 3,
              },
              768: {
                perPage: 2,
              },
              480: {
                perPage: 1,
              },
            },
          }}
        >
          {veggie &&
            veggie.length > 0 &&
            veggie.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Link to={`/Recipe/${recipe.id}`}>
                    <Card>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt="logo" />
                      <Gradient />
                    </Card>
                  </Link>
                </SplideSlide>
              );
            })}
        </Splide>
      </Wrapper>
    </div>
  );
};

// Styled Components
const Wrapper = styled.div``;
const Card = styled.div`
  min-height: 8rem;
  overflow: hidden;
  width: 100%;
  border-radius: 7px;
  position: relative;

  img {
    margin-top: 10px;
    border-radius: 7px;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    top: 50%;
    transform: translate(-50%);
    width: 100%;
    color: #ddd;
    text-align: center;
    font-weight: 400;
    font-size: 0.8rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Gradient = styled.div`
  z-index: 3;
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;

export default Veggie;
