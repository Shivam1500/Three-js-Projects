import styled from 'styled-components';
import { OrbitControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'
import Cube from './Cube';


const Section = styled.div`
height:100vh;
display: flex;
justify-content: center;
align-items: center;
scroll-snap-align: center;
`


const Container = styled.div`
height:100vh;
scroll-snap-align: center;
width: 1400px;
display: flex;
justify-content: space-between;
`

const Left = styled.div`
flex:1;
`;


const Title = styled.h1`
font-size: 70px;
`;


const WhatWeDo = styled.div`
display:flex;
align-items: center;
gap: 10px;
`;


const Line = styled.img`
height: 5px;
`;


const Subtitle = styled.h2`
color:#da4ea2;

`;


const Desc = styled.p`
font-size: 20px;
color: lightgrey;
`;


const Button = styled.button`
width: 110px;
font-weight: 500;
border: none;
border-radius: 5px;
cursor: pointer;
padding: 10px;
background-color: #da4ea2;
color: white;
`;
const Right = styled.div`
flex: 1;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
`;



const Who = () => {
    return (
        <Section>
            <Container>
                <Left>
                    <Canvas camera={{ fov: 25, position: [5, 5, 5] }}>
                        <OrbitControls enableZoom={false} autoRotate />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Cube />
                    </Canvas>
                </Left>
                <Right>
                    <Title>Think OutSide the Square space</Title>
                    <WhatWeDo>
                        <Line src="./image/line.png/" />
                        <Subtitle>Who We Are</Subtitle>
                    </WhatWeDo>
                    <Desc>a creative group of designers and developers with a passion for the arts</Desc>
                    <Button>See our works</Button>
                </Right>
            </Container>
        </Section>
    )
}

export default Who