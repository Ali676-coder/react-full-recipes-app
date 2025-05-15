import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
const Cusine = () => {
  // States
  let params = useParams();
  const [cusine, setCusine] = useState([]);

  // Get Recipes Function
  const getCusine = async (name) => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&cuisine=${name}`
    );
    const recipes = await data.json();
    setCusine(recipes.results);
  };

  // Render Recipe Function
  useEffect(() => {
    getCusine(params.type);
  }, [params.type]);

  return (
    <Grid
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {cusine.map((item) => {
        return (
          <Card key={item.id}>
            <Link to={`/Recipe/${item.id}`}>
              <img src={item.image} alt="logo" />
              <h4>{item.title}</h4>
            </Link>
          </Card>
        );
      })}
    </Grid>
  );
};
// Styled Componentss
const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
  padding: 20px;
  a {
    text-decoration: none;
  }
`;
const Card = styled.div`
  img {
    width: 100%;
    border-radius: 7px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  a {
    text-decoration: none;
  }
  h4 {
    text-align: center;
    padding: 0.7rem;
  }
`;
export default Cusine;
