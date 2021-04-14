import React, { useState } from 'react';
import { Button } from '../button';
import { AiFillThunderbolt } from 'react-icons/ai';
import { GiCrystalBars } from 'react-icons/gi';
import { GiCutDiamond, GiRock } from 'react-icons/gi';
import { GiFloatingCrystal } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import {PricingSection,  PricingWrapper,  PricingHeading,  PricingContainer,  PricingCard,  PricingCardInfo,  PricingCardIcon,  PricingCardPlan,  PricingCardCost,  PricingCardLength,  PricingCardFeatures,  PricingCardFeature} from './PlansElements';
import Axios from 'axios'
import {db_url} from "../../App"
import { useHistory } from 'react-router-dom';


function Plans() {
  let history = useHistory();

  const [plan,setPlan] = useState(true);

  const updatePlan = (val) => {
    //console.log("updatePlan",val);
    const req_url = db_url+'/api/insertUserData'
    if(val === "Free")
    {
      alert("You are now subscribed to Free Plan")
    }
    else if(val === "Pro")
    {
      alert("You are now subscribed to Pro Plan")
    }
    //history.push('/plans')
    

    // Axios.post(req_url,{
    //     u_name: this.state.Name,
    //     u_mobile: parseInt(this.state.Mobile,10),
    //     u_email: this.state.Email,
    //     u_password: this.state.Password,
    //     u_age: parseInt(this.state.Age,10) 
    // }).then((res) => {
    //     // console.log("res is:",res)
    //     // console.log("res data is:",res.data.error)
    //     if(res.data.data === "Inserted")
    //     {
    //         alert("Registration Successful");
    //         this.props.history.push('/sign-in');
    //     }
    //     else{
    //         alert("Error while Registering is:"+res.data.error);
    //     }
    // })

    
  }

  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <PricingSection>
        <PricingWrapper>
          <PricingHeading>Our Membership Plans</PricingHeading>
          <PricingContainer>
            <PricingCard to='/plans'>
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
                <Button primary onClick={() => {updatePlan('Free')}} >Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
            <PricingCard to='/plans'>
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
                <Button primary onClick={() => {updatePlan('Pro')}}>Choose Plan</Button>
              </PricingCardInfo>
            </PricingCard>
          </PricingContainer>
        </PricingWrapper>
      </PricingSection>
    </IconContext.Provider>
  );
}
export default Plans;