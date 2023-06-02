import styled from 'styled-components';

const Section = styled.div`
  display: flex;
  justify-content: center;
`
const Container = styled.div`
      width: 1400px;
      /* background-color: rebeccapurple; */
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 10px 0px;
`

const Links = styled.div`
 display: flex;
 align-items: center;
 gap: 50px;

`
const Icons = styled.div`
display:flex;
align-items: center;
gap: 30px;
`


const Logo = styled.img`
height: 50px;`;


const Icon = styled.img`
width: 20px;
cursor: pointer;
`;


const Button = styled.button`
width: 100px;
border: none;
border-radius: 5px;
cursor: pointer;
padding: 10px;
background-color: #da4ea2;
color: white;
`;


const List = styled.ul`
   display: flex;
   gap: 20px;
   list-style: none;
`;




const ListItem = styled.li`
cursor: pointer;
`;


const Navbar = () => {
    return (
        <Section>
            <Container>
                <Links>
                    <Logo>Hey dev</Logo>
                    <List>
                        <ListItem>Home</ListItem>
                        <ListItem>Studio</ListItem>
                        <ListItem>Works</ListItem>
                        <ListItem>Contact</ListItem>
                    </List>
                </Links>
                <Icons>
                    <Icon src="./image/search.png" />
                    <Button>Hire Now</Button>
                </Icons>
            </Container>
        </Section>
    )
}

export default Navbar