import React from 'react'
import styled from 'styled-components'
import Section from './Section'

const Home = () => {
    const car_data = [
        {
            id: 1,
            title: "Model S",
            description: "Order Online for Touchless Delivery",
            background_img: "model-s.jpg",
            left_btn_text: "Custom Order",
            right_btn_text: "Existing Inventory",
            bottom_img: "show"
        },
        {
            id: 2,
            title: "Model X",
            description: "Order Online for Touchless Delivery",
            background_img: "model-x.jpg",
            left_btn_text: "Custom Order",
            right_btn_text: "Existing Inventory",
            bottom_img: "show"
        },
        {
            id: 3,
            title: "Model Y",
            description: "Order Online for Touchless Delivery",
            background_img: "model-y.jpg",
            left_btn_text: "Custom Order",
            right_btn_text: "Existing Inventory",
            bottom_img: "show"
        },

        {
            id: 4,
            title: "Model 3",
            description: "Order Online for Touchless Delivery",
            background_img: "model-3.jpg",
            left_btn_text: "Custom Order",
            right_btn_text: "Existing Inventory",
            bottom_img: "show"
        },
        {
            id: 5,
            title: "Lowest Cost Solar Panels in America",
            description: "Money-back guarantee",
            background_img: "solar-panel.jpg",
            left_btn_text: "Order Now",
            right_btn_text: "Learn More",
            bottom_img: "show"
        },
        {
            id: 6,
            title: "Solar for New Roofs",
            description: "Solar Roof Costs Less Than a New Roof",
            background_img: "solar-roof.jpg",
            left_btn_text: "Order Now",
            right_btn_text: "Learn More",
            bottom_img: "show"
        },
        {
            id: 7,
            title: "New Interior",
            description: "Money-back guarantee",
            background_img: "new-interior.jpg",
            left_btn_text: "Order Now",
            right_btn_text: "Learn More",
            bottom_img: "show"
        },
        {
            id: 8,
            title: "Accessories",
            description: "",
            background_img: "accessories.jpg",
            left_btn_text: "Shop Now",
            right_btn_text: "",
            bottom_img: ""
        }
    ]
    return (
        <Container>
            {
                car_data.map((item) => <Section
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    background_img={item.background_img}
                    left_btn_text={item.left_btn_text}
                    right_btn_text={item.right_btn_text}
                    bottom_img={item.bottom_img}
                />)
            }


        </Container>
    )
}

export default Home


const Container = styled.div`
    height:100vh;
`