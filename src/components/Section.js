import React from 'react'
import styled from 'styled-components'
import Slide from 'react-reveal/Slide';


const Section = ({ title, description, background_img, left_btn_text, right_btn_text, bottom_img }) => {

    return (
        <Wrap background_img={background_img}>
            <ItemText>
                <h1>{title}</h1>
                {description && <p>{description}</p>}

            </ItemText>

            <BottomPart>

                <Slide bottom>
                    <ButtonGroup>
                        {left_btn_text && <LeftButton>{left_btn_text}</LeftButton>}
                        {right_btn_text && <RightButton>{right_btn_text}</RightButton>}
                    </ButtonGroup>
                </Slide>
                {(bottom_img) ? <DownArrow src="images/down-arrow.svg"></DownArrow> : <DownArrow src=""></DownArrow>}

            </BottomPart>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    height:100vh;
    width:100vw;
    background-size:cover;
    background-position:center;
    background-repeat:no-repeat;
    background-image: url(${props => `images/${props.background_img}`});
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
`

const ItemText = styled.div`
    padding-top:15vh;
    text-align:center;
`

const ButtonGroup = styled.div`
    display:flex;
    justify-content:center;
    // margin-bottom:30px;
    // padding-top:30px;
    @media (max-width: 768px){
        flex-direction:column;
    }
`

const LeftButton = styled.div`
    background-color:rgba(23,26,32,0.8);
    width:256px;
    height:40px;
    color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    // opacity:0.9;
    text-transform: uppercase;
    font-size:12px;
    border-radius:100px;
    cursor:pointer;
    margin:8px;
`

const BottomPart = styled.div``

const RightButton = styled(LeftButton)`
    background-color:white;
    opacity:0.8;
    color:black;
    font-weight:bold;
`

const DownArrow = styled.img`
    margin-top:20px;
    margin-bottom:30px;
    height:40px;
    animation: animateBtn infinite 1.5s;
    cursor:pointer;
`