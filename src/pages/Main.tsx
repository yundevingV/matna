import React from 'react';
import matna_background from '../assets/image/matna_background.svg';
import styled from 'styled-components';
import Header from '../components/common/Header';
import Search from '../components/home/Search';

const Container = styled.div`
  height: 4280px;
`;

const ImageContainer = styled.div`
  /* Set a fixed height for the container */
  height: 1080px;
  overflow: hidden; /* Hide overflow content */
  background-image: url(${matna_background});
  background-position: center; /* Center the background image */
  @media (max-width: 1200px) {
    width: 1280px;
  }
`;

const ContentContainer = styled.div`
  position: absolute;
  top: 500px;
  width: 100vw;
  height: 3200px;
  border-radius: 100px 100px 0px 0px;
  background-color: #fff;
`;

const SearchContainer = styled.div`
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
  position: absolute;
  top: 300px;
  width: 100%; /* Make sure it spans the width of ImageContainer */
  height: auto; /* Let it adjust to content height */
`;

export default function Main() {
  return (
    <>
      <Container>
        <Header />
        <ImageContainer>
          <SearchContainer>
            <Search />
          </SearchContainer>
        </ImageContainer>
        <ContentContainer>x</ContentContainer>
      </Container>
    </>
  );
}
