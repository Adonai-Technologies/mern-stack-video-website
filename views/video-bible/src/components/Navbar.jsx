import React from "react";
import styled from "styled-components";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';




const Container = styled.div`
 display: flex;
`;
const Wrapper = styled.div`
display: flex;
`;
const Search = styled.div`

`;
const Input = styled.input`

`;

const Button = styled.button`
  padding: 5px 15px;
  background-color: transparent;
  border: 1px solid #3ea6ff;
  color: #3ea6ff;
  border-radius: 3px;
  font-weight: 500;
  margin-top: 10px;
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
