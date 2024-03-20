import React from 'react';
import styled from 'styled-components'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Section({title,description,backgroundImg, leftBtnText, rightBtnText}) {
    AOS.init()
    console.log({
        duration : 50000
    });
    return(
        <Wrap bgImage={backgroundImg}> 

            <ItemText data-aos="fade-up" data-aos-anchor-placement="center-center"  data-aos-duration="2000">
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>

            <Buttons>

            <ButtonGroup data-aos="fade-up" data-aos-anchor-placement="center-center"  data-aos-duration="2000">
                <LeftButton>
            {leftBtnText}
                </LeftButton>


                {
                    rightBtnText &&
                    <RightButton>
                        {rightBtnText}
                    </RightButton>
                }
            </ButtonGroup>
            <DownArrow src="/images/down-arrow.svg"/>



            </Buttons>
        </Wrap>

    )
}

export default Section;


const Wrap=styled.div`
z-index:10;
width:100vw;
height:100vh;
//  background-color:orange;
background-size: cover;
background-position:center;
background-repeat:no-repeat;
background-image: url('/images/model-s.jpg');
display:flex;
flex-direction: column;
justify-content:space-between;// vertical
align-items:center;//horizontal
background-image:${props=>`url("/images/${props.bgImage}")`};



`

const ItemText=styled.div`
// z-index:-1;
padding-top:10vh;
text-align:center;
`


const ButtonGroup=styled.div`
display:flex;
margin-bottom:30px;
@media(max-width:768px){
    flex-direction:column;
}


`
const LeftButton=styled.div`
background-color:rgba(23,26,32,0.8);
height:40px;
width:256px;
color:white;
display:flex;
justify-content:center;
align-items:center;
border-radius:100px;
opacity:0.85;
text-transform:uppercase;
font-size:12px;
cursor:pointer;
margin:8px;



`

const RightButton=styled(LeftButton)`
background-color:white;
color:black;
opacity:0.6;


`

const DownArrow=styled.img`
height:20px;
animation:animateDown infinite 1s;
overflow-x:hidden;



`

const Buttons=styled.div`


`