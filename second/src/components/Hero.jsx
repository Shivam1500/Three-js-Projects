import styled from 'styled-components';
import Navbar from './Navbar';
import { MeshDistortMaterial, OrbitControls, Sphere } from '@react-three/drei';
import { Canvas } from '@react-three/fiber'



const Section = styled.div`
height:100vh;
display: flex;
flex-direction: column;
justify-content: space-between;
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
flex:2;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
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
width: 100px;
font-weight: 500;
border: none;
border-radius: 5px;
cursor: pointer;
padding: 10px;
background-color: #da4ea2;
color: white;
`;
const Right = styled.div`
flex: 3;
position: relative;
`;
const Img = styled.img`
width: 600px;
height:400px;
object-fit: contain;
position: absolute;
top: 0;
bottom: 0;
left: 0;
right: 0;
margin: auto;
animation: animate 2s infinite ease alternate;
@keyframes animate {
    100%{
        transform: translateY(20px);
    }
}
`;


const Hero = () => {
    return (
        <Section>
            <Navbar />
            <Container>
                <Left>
                    <Title>Think. Make. Solve.</Title>
                    <WhatWeDo>
                        <Line src="./image/line.png/" />
                        <Subtitle>What We Do</Subtitle>
                    </WhatWeDo>
                    <Desc>We enjoy creating delightful, human-centered digital experiences.</Desc>
                    <Button>Learn More</Button>
                </Left>
                <Right>
                    <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={1} />
                        <directionalLight position={[3, 2, 1]} />
                        <Sphere args={[1, 100, 200]} scale={2}>
                            <MeshDistortMaterial color="#5C469C" attach="material" distort={0.6} speed={3} />
                        </Sphere>
                    </Canvas>
                    <Img src="./image/moon.png" />
                </Right>
            </Container>
        </Section>
    )
}

export default Hero