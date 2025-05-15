import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Link } from "react-router-dom";
const Searched = () => {
  // State
  const [searchedRecipes, setSearchedRecipes] = useState([]);
  const params = useParams();

  // Get Recipes Function By Keyword Search
  const getSearched = async (name) => {
    try {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?apiKey=${process.env.REACT_APP_API_KEY}&query=${name}`
      );
      const recipes = await data.json();
      setSearchedRecipes(recipes.results);
    } catch (error) {
      setSearchedRecipes([]);
    }
  };

  // Render Recipe Function
  useEffect(() => {
    getSearched(params.search);
  }, [params.search]);
  return (
    <>
      {searchedRecipes && searchedRecipes.length > 0 ? (
        <Grid>
          {searchedRecipes.map((item) => (
            <Card key={item.id}>
              <Link to={`/Recipe/${item.id}`}>
                <img src={item.image} alt="logo" />
                <h4>{item.title}</h4>
              </Link>
            </Card>
          ))}
        </Grid>
      ) : (
        <Message>No results found for this search !</Message>
      )}
    </>
  );
};

// Styled Components
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  grid-gap: 3rem;
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
const Message = styled.p`
  color: grey;
  text-align: center;
  font-size: 1.5rem;
  padding: 2rem;
`;
export default Searched;
