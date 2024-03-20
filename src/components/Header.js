import React from 'react';

import styled from 'styled-components'
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";

function Header() {
    return(
        <Container>
            <a href='github.com'> 
                <img src='/images/logo.svg' alt=""/>
                
                </a>
                <Menu>
                    <p><a href='github.com'>Model s</a></p>
                    <p><a href='github.com'>Model 3</a></p>
                    <p><a href='github.com'>Model x</a></p>
                    <p><a href='github.com'>Model y</a></p>

                </Menu>

                <RightMenu>
                    <a href='github.com'>Shop</a>
                    <a href='github.com'>Tesla Account</a>
                    <CustomMenu/>
                </RightMenu>
            <BugerNav>
                <CloseWrapper>
                <CustomClose/>

                </CloseWrapper>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>
                <li><a href='#'>Existing inventory</a></li>


            </BugerNav>


        </Container>

    )
}

export default Header;


const Container=styled.div`
min-height:60px;
position:fixed;
display :flex;
align-items:center;
justify-content:space-between;
padding:0 20px;
top:0;
left:0;
right:0;
z-index:1;



`
const Menu=styled.div`
display:flex;
align-items:center;
justify-content:center;
flex:1;



a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;

}
@media(max-width:768px){
    display:none;
}

`

const RightMenu=styled.div`
display:flex;
align-items:center;
a{
    font-weight:600;
    text-transform:uppercase;
    margin-right: 10px;
    flex-wrap:nowrap;

}



`
const CustomMenu=styled(IoMenuSharp)`
cursor:pointer;



`

const BugerNav=styled.div`
position:fixed;
top:0;
right:0;
bottom:0;
background-color:white;
width:300px;
z-index:100;
list-style:none;
padding:20px;
display:flex;
flex-direction:column;
// justify-content:space-between;
text-align:start;

li{
    padding:15px 0;
    border-bottom:2px solid rgba(0,0,0,.2)
}

a{
    font-weight:600;
}


`


const CustomClose=styled(IoClose )`


`

