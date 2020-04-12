import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import {
  InfoCard,
  InfoCardAnchor,
  InfoCardLink,
  InfoCardRight,
  InfographicBanner,
  StyledLink,
  TextLink,
  WarningText,
  AdditionalInfoText,
} from '../components/ListCard';

const InfographicPage = () => {
  const data = useStaticQuery(graphql`
    query {
      pattern: file(
        relativePath: { eq: "infographic/infographic-pattern-01.png" }
      ) {
        ...bannerImage150
      }
      clippers: file(
        relativePath: { eq: "infographic/infographic-scissors-01.png" }
      ) {
        ...bannerImage150
      }
      mask: file(relativePath: { eq: "infographic/infographic-mask-01.png" }) {
        ...bannerImage150
      }
      volunteer: file(
        relativePath: { eq: "infographic/infographic-volunteer-01.png" }
      ) {
        ...bannerImage150
      }
      question: file(
        relativePath: { eq: "infographic/infographic-question-01.png" }
      ) {
        ...bannerImage150
      }
    }
  `);
  return (
    <>
      <InfoCard image={data.volunteer.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Volunteer</h2>
          <InfoCardLink to={'/volunteer'}>I WANT TO SEW MASKS</InfoCardLink>
          <InfoCardAnchor
            href={
              'https://rosiesews.freshdesk.com/support/solutions/articles/61000260572-i-don-t-know-how-to-sew-can-i-still-help-'
            }
          >
            I CAN'T SEW, BUT I WANT TO HELP
          </InfoCardAnchor>
        </InfoCardRight>
      </InfoCard>
      <InfographicBanner>After You Sign Up</InfographicBanner>
      <InfoCard image={data.pattern.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Get The Pattern</h2>
          <AdditionalInfoText hasLeftSpacing>
            (or use any pattern of your choosing)
          </AdditionalInfoText>
          <InfoCardAnchor href={'/docs/CFCMask_3_27.pdf'}>
            3-LAYER FACE MASK
          </InfoCardAnchor>
          <InfoCardAnchor href={'/docs/CFC_Pocket_Mask_3_28.pdf'}>
            POCKET FACE MASK
          </InfoCardAnchor>
          <InfoCardAnchor href={'/docs/CFCMask_cover_4_7.pdf'}>
            MASK COVER *NEW*
          </InfoCardAnchor>
          <InfoCardAnchor href={'/docs/CFC_Tshirt_Mask_4_8.pdf'}>
            T-SHIRT FACE MASK
          </InfoCardAnchor>
          <WarningText>*PERSONAL USE ONLY</WarningText>
        </InfoCardRight>
      </InfoCard>
      <InfoCard image={data.clippers.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Make Masks!</h2>
          <InfoCardLink to={'/patterns/3-layer-pattern'}>
            WATCH 3-LAYER MASK VIDEO
          </InfoCardLink>
          <InfoCardLink to={'/patterns/pocket-pattern'}>
            WATCH POCKET MASK VIDEO
          </InfoCardLink>
          <InfoCardLink to={'/patterns/mask-cover'}>
            WATCH MASK COVER VIDEO *NEW*
          </InfoCardLink>
          <InfoCardLink to={'/patterns/t-shirt-mask-pattern'}>
            WATCH T-SHIRT MASK VIDEO
          </InfoCardLink>
          <WarningText>*PERSONAL USE ONLY</WarningText>
        </InfoCardRight>
      </InfoCard>
      <InfoCard image={data.mask.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Donate Masks</h2>
          <StyledLink to={'/groups-directory'}>
            {`YOUR STATE LEAD WILL EMAIL YOU WITH`}
            <br />
            {`DIRECTIONS ABOUT HOW & WHERE`}
          </StyledLink>
          <TextLink
            href={
              'https://rosiesews.freshdesk.com/support/solutions/articles/61000268414-can-i-use-a-different-pattern-than-what-you-provide-'
            }
          >
            {`EVERY MASK MADE WILL BE DONATED`}
            <br />
            {`NO MATTER WHAT PATTERN YOU USE`}
          </TextLink>
        </InfoCardRight>
      </InfoCard>
      <InfoCard image={data.question.childImageSharp.fluid}>
        <InfoCardRight>
          <h2>Get Help</h2>
          <TextLink href={'https://rosiesews.freshdesk.com/support/home'}>
            {`FIND ANSWERS TO ALL YOUR QUESTIONS AT OUR KNOWLEDGE BASE`}
          </TextLink>
        </InfoCardRight>
      </InfoCard>
    </>
  );
};

export default InfographicPage;
