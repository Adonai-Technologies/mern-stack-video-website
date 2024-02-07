import React from "react";
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';




const Container = styled.div`
  posistion: sticky;
  top: 0;
  height: 56px;
  background-color:#f9f9f9;
  `;

const Wrapper = styled.div`
     display: flex;
     align-items: center;
     height:100%;
     padding: 0px 20px;
     justify-content: flex-end;
     posistion: relative;
`;


const Search = styled.div`
  width:30%;
  position: absolute;
  left:0;
  right:0;
  margin: auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding: 5px;
  border: 2px solid gray;
  border-radius: 50px;
`;


const Input = styled.input`
   border:none;
   background-color: transparent;
   width: 100%;
   `;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
       <Search>
        <Input placeholder='Search'/>
           <SearchIcon/>
       </Search>

        <Button><AccountCircleIcon/>
         SIGN IN
      </Button>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
