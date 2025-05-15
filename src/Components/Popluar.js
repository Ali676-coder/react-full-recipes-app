import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { Link } from "react-router-dom";
const Popular = () => {
  // States
  const [popular, setPopular] = useState([]);
  // Fetch Random Recipes Function

  const getPopular = async () => {
    const check = localStorage.getItem("popular");
    if (check) {
      setPopular(JSON.parse(check));
    } else {
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_API_KEY}&number=8`
      );
      const data = await api.json();
      localStorage.setItem("popular", JSON.stringify(data.recipes));
      setPopular(data.recipes);
    }
  };
  // Render Random Recipes
  useEffect(() => {
    getPopular();
  }, []);

  return (
    <div className="popular">
      <Wrapper>
        <h3>Popular Picks</h3>
        <Splide
          options={{
            perPage: 4,
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
          {popular &&
            popular.length > 0 &&
            popular.map((recipe) => {
              return (
                <SplideSlide key={recipe.id}>
                  <Card>
                    <Link to={`/Recipe/${recipe.id}`}>
                      <p>{recipe.title}</p>
                      <img src={recipe.image} alt="logo" />
                      <Gradient />
                    </Link>
                  </Card>
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
  min-height: 9rem;
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
export default Popular;
