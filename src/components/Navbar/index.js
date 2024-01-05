import { Link as LinkR } from "react-router-dom";
import styled, { useTheme } from "styled-components";
import { DiCssdeck } from "react-icons/di";
import { FaBars } from 'react-icons/fa';
import { useState } from "react";
import { Bio } from "../../data/constants";


const Nav = styled.div`
  background-color: ${({ theme }) => theme.card_light};
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;
  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    cursor: pointer;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 50%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`;

const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled(LinkR)`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;
    &:hover {
      color: ${({ theme }) => theme.primary};
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

const GitHubButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.6s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;

const MobileMenu = styled.div`
    // display: flex;
    margin-top: 300px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
    position: absolute;
    top: 80;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light + 99};
    transition: all 0.6s ease-in-out;
    transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    display: ${({ open }) => (open ? 'flex' : 'none')};
    z-index: ${({ open }) => (open ? '-1' : '1')};
  `;

const MobileMenuLinks = styled(LinkR)`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  &:hover {
    background: ${({ theme }) => theme.white};
    color: ${({ theme }) => theme.primary};  
    padding: 8px 16px;
    border-radius: 20px;
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;



function Navbar() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  return (
    <Nav>
      <NavContainer>
        <NavLogo to="/">
          <p style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20;', cursor: 'pointer' }}>
            <DiCssdeck size="3rem" /> <Span>Portfolio</Span>
          </p>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setOpen(!open)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink to="/">About</NavLink>
          <NavLink to='skills'>Skills</NavLink>
          <NavLink to='projects'>Projects</NavLink>
          <NavLink to='contact'>Contact</NavLink>
        </NavItems>
        <ButtonContainer>
          <GitHubButton href={Bio.github} target="_blank">Github Profile</GitHubButton>
        </ButtonContainer>
      </NavContainer>
      {
        open && (
          <MobileMenu open={open}>
            <MobileMenuLinks to="/" onClick={() => {
              setOpen(!open)
            }}>About</MobileMenuLinks>
            <MobileMenuLinks to='skills' onClick={() => {
              setOpen(!open)
            }}>Skills</MobileMenuLinks>
            <MobileMenuLinks to='projects' onClick={() => {
              setOpen(!open)
            }}>Projects</MobileMenuLinks>
            <MobileMenuLinks to='contact' onClick={() => {
              setOpen(!open)
            }}>Contact</MobileMenuLinks>
            <GitHubButton style={{
              padding: '10px 16px',
              background: `${theme.primary}`,
              color: 'white', width: 'max-content',
            }}
              href={Bio.github}
              target="_blank"

              onClick={() => {
                setOpen(!open)
              }}
            >
              Github Profile
            </GitHubButton>
          </MobileMenu>
        )
      }
    </Nav>
  );
}

export default Navbar;
