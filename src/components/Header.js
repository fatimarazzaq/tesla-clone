import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { useState } from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
    const [show, setShow] = useState(false);
    const cars = useSelector((state) => state.car.cars)
    console.log(cars)

    return (
        <>
            <Container>
                <a>
                    <img src="/images/logo.svg" alt="logo" />
                </a>
                <Menu>
                    {
                        cars.map((item, index) => (
                            <a href='#' key={index}>{item}</a>

                        ))
                    }
                </Menu>
                <RightMenu>
                    <a href='#'>Shop</a>
                    <a href='#'>Account</a>
                    <HamBurg onClick={() => setShow(true)}><MenuIcon /></HamBurg>
                </RightMenu>

            </Container>


            <SideMenu show={show}>
                <CrossIcon>
                    <CloseIcon onClick={() => setShow(false)} />
                </CrossIcon>

                {
                    cars.map((item, index) => (
                        <li><a href='#' key={index}>{item}</a></li>

                    ))
                }
                <li><a href='#'>Solar Roofs</a></li>
                <li><a href='#'>Solar Panels</a></li>
                <li><a href='#'>Existing Inventory</a></li>
                <li><a href='#'>Used Inventory</a></li>
                <li><a href='#'>Trade-In</a></li>
                <li><a href='#'>Test Drive</a></li>
                <li><a href='#'>Insurance</a></li>
                <li><a href='#'>Cybertruck</a></li>
            </SideMenu>


        </>
    )
}

export default Header


const Container = styled.div`
   min-height:60px;
   position:fixed;
   display:flex;
   justify-content:space-between;
   align-items:center;
    width:100%;
    padding:0px 25px;
    top:0;
    left:0;
    right:0;
`

const CrossIcon = styled.div`
    margin:15px 0px;
    margin-top:8px;
    display:flex;
    justify-content:flex-end;
    align-items:center;
    cursor:pointer;
    div{
    }
`


const Menu = styled.div`
    a{
        margin:0px 5px;
        cursor:pointer;
        padding:2px 6px;
        border-radius:15px;
    }
    a:hover{
        background-color:#ffffff5c;

    }
    @media (max-width:768px){
        a{
            display:none !important;

        }
    }
`


const RightMenu = styled.div`
    display:flex;
    align-items:center;
    a{
        margin:0px 5px;
        cursor:pointer;
        padding:2px 6px;
        border-radius:15px;

    }
    a:hover{
        background-color:#ffffff5c;
    }

`


const SideMenu = styled.div`
    z-index:1000;
    width:300px;
    position:fixed;
    right:0px;
    top:0px;
    bottom:0px;
    padding:20px;
    background-color:white;
    text-align:left;
    display:flex;
    flex-direction:column;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.2s;
    li{
        list-style-type:none;
        padding:8px 15px;
        border-radius:20px ;
        cursor:pointer;
    }
    li:hover{
        background-color:rgba(0,0,0,0.1);
    }
    li a{
        text-decoration:none;
    }
   
`



const HamBurg = styled.div`
display: none;
margin-left: 4px;
cursor: pointer;
@media (max-width:768px){
    display:flex;
    }

`