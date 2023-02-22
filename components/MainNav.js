import { Container, Nav, Navbar } from "react-bootstrap";
import  Link  from "next/link";

export default function MainNav() {
   return (
     <>
      <Navbar bg="dark" variant="dark" className='fixed-top'>
         <Container>
            <Navbar.Brand >Movie Catalogue App</Navbar.Brand>
            <Nav className="me-auto">
               <Link href="/" passHref legacyBehavior><Nav.Link>Movies</Nav.Link></Link>
               <Link href="/about" passHref legacyBehavior><Nav.Link>About</Nav.Link></Link>
            </Nav>
         </Container>
      </Navbar>
      <br/><br/>
     </>
   );
}