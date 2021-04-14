import React from 'react';
import { Button } from '../button/index';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {
  PricingSection,
  PricingWrapper,
  PricingHeading,
  PricingContainer,
  PricingCard,
  PricingCardInfo,
  PricingCardIcon,
  PricingCardPlan,
  PricingCardCost,
  PricingCardLength,
  PricingCardFeatures,
  PricingCardFeature
} from './PlansElements';




function Plans() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Membership Plans</PricingHeading>
          <PricingContainer>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiRock />
                </PricingCardIcon>
                <PricingCardPlan>Free Pack</PricingCardPlan>
                <PricingCardCost>$0</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>10% Discount</PricingCardFeature>
                  <PricingCardFeature>$Pre-Order</PricingCardFeature>
                  <PricingCardFeature>Free Delivery</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/sign-up'>
              <PricingCardInfo>
                <PricingCardIcon>
                  <GiCutDiamond />
                </PricingCardIcon>
                <PricingCardPlan>Pro Pack</PricingCardPlan>
                <PricingCardCost>$1.99</PricingCardCost>
                <PricingCardLength>per month</PricingCardLength>
                <PricingCardFeatures>
                  <PricingCardFeature>25% Discount</PricingCardFeature>
                  <PricingCardFeature>$Pre-Order</PricingCardFeature>
                  <PricingCardFeature>$Free Delivery</PricingCardFeature>
                  <PricingCardFeature>24/7 Support</PricingCardFeature>
                </PricingCardFeatures>
                <Button primary>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Plans;