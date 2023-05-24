import React from 'react'
import { Facebook, Instagram, Twitter, MailOutline, Phone, Room } from '@mui/icons-material';
import { Container, Left, Center, Right, Description, SocialContainer, SocialIcon, Logo, Title, List, ListItem, ContactItem, Payment} from './components.Styles/Footer.Styles'

const Footer = () => {
  return (
    <Container>
        <Left> 
            <Logo>TGDK</Logo>
            <Description>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer 
                turpis dolor, hendrerit in sem suscipit, consequat ultricies turpis. 
                Nam vitae lorem sed neque tincidunt mattis. Praesent viverra accumsan mi, non malesuada.
            </Description>
            <SocialContainer>
                <SocialIcon color='3B5999'>
                    <Facebook/>
                </SocialIcon>
                <SocialIcon color='E4405F'>
                    <Instagram/>
                </SocialIcon>
                <SocialIcon color='55ACEE'>
                    <Twitter/>
                </SocialIcon>
            </SocialContainer>
        </Left>
        <Center> 
            <Title>Useful Links</Title>
            <List>
                <ListItem>Home</ListItem>
                <ListItem>Cart</ListItem>
                <ListItem>Mens Fashion</ListItem>
                <ListItem>Woman Fashion</ListItem>
                <ListItem>Accessories</ListItem>
                <ListItem>Account</ListItem>
                <ListItem>Orders</ListItem>
                <ListItem>Wishlist</ListItem>
                <ListItem>Terms</ListItem>
            </List>
        </Center>
        <Right> 
        <Title>Contact</Title>
            <ContactItem>
                <Room style={{marginRight:"10px"}}/> 622 Dixie Path , South Tobinchester 98336
            </ContactItem>
            <ContactItem>
                <Phone style={{marginRight:"10px"}}/> +1 (555) 555-5555
            </ContactItem>
            <ContactItem>
                <MailOutline style={{marginRight:"10px"}} /> nathanchavezpromail@gmail.com
            </ContactItem>
            <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
    </Container>
  )
}

export default Footer