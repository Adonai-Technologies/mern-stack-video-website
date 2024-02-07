/* eslint-disable react/jsx-no-undef */
import styled from "styled-components";
import Navbar from "./components/Navbar.jsx";
import Menu from "./components/menu.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home  from "./pages/Home.jsx";
import Video  from "./pages/Video.jsx";


const Container = styled.div`display: flex;`;

const Main = styled.div`
  flex: 7;
  background-color: white;
`;

const Wrapper = styled.div`
    padding: 22px 96px;
`;



function App() {
  return (
    <Container>
      <BrowserRouter>
        <Menu />

        <Main>
          <Navbar />
          <Wrapper>
            <Routes>
              <Route path="/">
                  <Route index element={<Home/>}/>
                  <Route path="video"/>
                  <Route path=":id" element={<Video/>} />
                  </Route>
            </Routes>
          </Wrapper>
        </Main>
      </BrowserRouter>
    </Container>
  );
}

export default App;
