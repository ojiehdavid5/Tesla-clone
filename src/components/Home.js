import React from 'react';
import styled from 'styled-components';
import Section from './Section';

function Home() {
    return(
        <Container>
            <Section
            title='Model S'
            description='Order Online For Touchless Delivery'
            backgroundImg="model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            
            />
            <Section
                        title='Model y'
                        description='Order Online For Touchless Delivery'
                        backgroundImg="model-y.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"

                        
            
            />
            <Section
                        title='Model 3'
                        description='Order Online For Touchless Delivery'
                        backgroundImg="model-3.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
            
            
            />
            <Section
                        title='Model x'
                        description='Order Online For Touchless Delivery'
                        backgroundImg="model-x.jpg"
                        leftBtnText="Custom Order"
                        rightBtnText="Existing Inventory"
            
            
            />
            <Section
                        title='Lowest Cost Solar Panels in America'
                        description='Money Back Guarantee'
                        backgroundImg="solar-panel.jpg"
                        leftBtnText="Order now"
                        rightBtnText="Learn More"
            
            
            />
            <Section
                        title='Solar for New Roofs'
                        description='Solar Costs Less Than a New Roof Plus Solar Panel'
                        backgroundImg="solar-roof.jpg"
                        leftBtnText="Order now"
                        rightBtnText="Learn More"
            
            
            />
            <Section
                        title='Accesories'
                        description=''
                        backgroundImg="accessories.jpg"
                        leftBtnText="Shop now"
            
            
            />

        </Container>

    )
}

export default Home;

const Container=styled.div`
height:100vh;
// z-index:1;


`