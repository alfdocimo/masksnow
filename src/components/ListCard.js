import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { bpMaxSM } from '../lib/breakpoints';
import Img from 'gatsby-image';

export const InfoCardWrapper = styled.div`
  color: #16356f;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-content: center;
  align-items: center;
  font-family: 'Oswald', sans-serif;
  max-width: 940px;
  flex-wrap: wrap;
  margin: 0.5em auto;
`;

export const InfoCardRight = styled.div`
  &&& {
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-width: 300px;
    max-width: 400px;
    position: relative;
    h2 {
      // font-size should be 3em to match the CTA buttons but it's wrong for some reason
      font-size: 2.5em;
      font-weight: bold;
      color: rgb(13, 50, 95);
    }
    p {
    ma
    }
  }
`;

export const InfoCardLink = styled(Link)`
  margin: 0.5em 0 0 0.5em;
  font-size: 1.5em;
  text-transform: uppercase;
  &:hover {
    color: #1d72aa;
    text-decoration: underline;
  }
  &::before {
    content: '\\25ba';
    color: #b03619;
    text-decoration: none;
    display: inline-block;
    margin: 0 10px 0 0;
  }
`;

export const InfoCardAnchor = styled.a`
  margin: 0.5em 0 0 0.5em;
  font-size: 1.5em;
  text-transform: uppercase;
  &:hover {
    color: #1d72aa;
    text-decoration: underline;
  }
  &::before {
    content: '\\25ba';
    color: #b03619;
    text-decoration: none;
    display: inline-block;
    margin: 0 10px 0 0;
  }
`;

export const TextLink = styled.a`
  margin: 0.5em 0 0 0.5em;
  font-size: 1.5em;
  &:hover {
    color: #1d72aa;
    text-decoration: underline;
  }
`;

export const StyledLink = styled(Link)`
  margin: 0.5em 0 0 0.5em;
  font-size: 1.5em;
  &:hover {
    color: #1d72aa;
    text-decoration: underline;
  }
`;

export const InfoCard = ({ image, link, children }) => {
  return (
    <InfoCardWrapper>
      {link ? (
        <Link to={link}>
          <Img
            fluid={image}
            alt="#MasksNOW logo"
            style={{
              objectFit: 'contain',
              margin: '0 auto',
              width: image.presentationWidth,
            }}
          />
        </Link>
      ) : (
        <Img
          fluid={image}
          alt="#MasksNOW logo"
          style={{
            objectFit: 'contain',
            margin: '0 auto',
            width: image.presentationWidth,
          }}
        />
      )}

      {children}
    </InfoCardWrapper>
  );
};

export const WarningText = styled.span`
  color: #b03619;
  font-style: italic;
  margin: -0.5em 0 0 2.5em;
`;

export const AdditionalInfoText = styled.span`
  font-style: italic;
  margin: ${props => (props.hasLeftSpacing ? '0 0.5em' : 0)};
`;

export const InfoBannerWrapper = styled.div`
  // font-size should be 3em to match the CTA buttons but it's wrong for some reason
  font-size: 2em;
  font-family: 'Oswald', sans-serif;
  font-weight: bold;
  text-align: center;
  color: whitesmoke;
  max-width: 940px;
  width: ${({ stretchAcross }) => (stretchAcross ? '137%' : '100%')};
  background-color: #b03619;
  clip-path: polygon(100% 0, 97% 50%, 100% 100%, 0% 100%, 3% 50%, 0% 0%);
  margin: ${({ stretchAcross }) => (stretchAcross ? '0 -37%' : '32px auto')};
  padding: 0 0.5em;
  ${bpMaxSM} {
    font-size: 1.75em;
  }
`;
export const InfographicBanner = ({ children, stretchAcross }) => {
  return (
    <InfoBannerWrapper stretchAcross={stretchAcross}>
      {children}
    </InfoBannerWrapper>
  );
};

export const DownloadCardWrapper = styled.div`
  color: #16356f;
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-family: 'Oswald', sans-serif;
  max-width: 200px;
  flex-wrap: wrap;
  margin: 0.5em;
  padding: 1em;
  float: right;
  border: 1px solid #16356f;
  //transition: transform 500ms ease-in-out;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  &:hover {
    transform: rotate(0.02turn);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  ${bpMaxSM} {
    float: none;
    margin: 0.5em auto;
  }
`;

export const DownloadIcon = ({ image, file, children }) => {
  return (
    <a href={file}>
      <DownloadCardWrapper>
        <h2>{children}</h2>
        <Img
          fluid={image}
          alt="#MasksNOW logo"
          style={{
            objectFit: 'contain',
            margin: '0 auto',

            width: image.presentationWidth,
          }}
        />
        <InfographicBanner stretchAcross={true}>Download</InfographicBanner>
      </DownloadCardWrapper>
    </a>
  );
};
