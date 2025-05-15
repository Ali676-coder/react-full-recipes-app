import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Recipe = () => {
  // State
  let params = useParams();
  const [details, setDetails] = useState({});
  const [activeTab, setActiveTab] = useState("instructions");

  // Fetch Recipes Information Function
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_API_KEY}&number=9`
    );
    const dataDetails = await data.json();
    setDetails(dataDetails);
  };

  // Render Recipes Info
  useEffect(() => {
    fetchDetails();
  }, [params.id]);

  return (
    <DetailWrapper>
      <Title>
        <h2>{details.title}</h2>
        <img src={details.image} alt="logo" />
      </Title>
      <Info>
        <TwoButton>
          <Button
            className={activeTab === "instructions" ? "active" : ""}
            onClick={() => setActiveTab("instructions")}
          >
            التعليمات
          </Button>
          <Button
            className={activeTab === "ingredients" ? "active" : ""}
            onClick={() => setActiveTab("ingredients")}
          >
            المكونات
          </Button>
        </TwoButton>
        {activeTab === "instructions" && (
          <Information>
            <h3 dangerouslySetInnerHTML={{ __html: details.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: details.instructions }}></h3>
          </Information>
        )}

        {activeTab === "ingredients" && (
          <ul>
            {details.extendedIngredients &&
              details.extendedIngredients.map((ingredient) => (
                <li key={ingredient.id}>{ingredient.original}</li>
              ))}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
};

// Styled Components
const DetailWrapper = styled.div`
  margin: 3rem auto;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }

  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }

  ul {
    margin-top: 1.5rem;
    padding-left: 1.5rem;
  }

  li {
    font-size: 1rem;
    line-height: 2rem;
    list-style: disc;
  }
`;

const Title = styled.div`
  flex: 1;
  img {
    width: 100%;
    max-width: 400px;
    border-radius: 15px;
    object-fit: cover;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  @media (max-width: 768px) {
    img {
      max-width: 100%;
    }

    h2 {
      text-align: center;
    }
  }
`;

const Info = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`;

const TwoButton = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  padding: 0.8rem 1.5rem;
  border: 2px solid #313131;
  background: white;
  color: #313131;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #eee;
  }
`;

const Information = styled.div`
  h3 {
    font-size: 1rem;
    line-height: 1.8rem;
    margin-bottom: 1rem;
  }
`;

export default Recipe;
