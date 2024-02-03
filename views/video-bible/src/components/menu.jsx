import React from "react";
import styled from "styled-components";
import videoBible from "../img/logo4.png";
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsBaseballIcon from '@mui/icons-material/SportsBaseball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import QuizIcon from '@mui/icons-material/Quiz';
import LightModeIcon from '@mui/icons-material/LightMode';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled.div`
  flex: 1;
  background-color: ${({theme}) => theme.bg}
  height: 100vh;
  color: ${({theme}) => theme.text};
  font-size: 14px;
  position: sticky;
  top:0;
`;

const Wrapper = styled.div`
  padding: 16px 26px;
`;

const Logo = styled.div`
  display: flex;
  align-item: center;
  gap: 5px;
  font-weight: bold;
  margin-bottom: 25px;
`;

const Img = styled.img`
  height: 25px;
`;

const Item = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  padding: 7.5px 0;
`;

const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid ${({theme}) => theme.soft};
`;

const Login = styled.div`

`;
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border:1px solid #3ea6ff;
color:#3ea6ff;
border-radius: 3px;
font-weight:500;
margin-top:10px;
cursor:pointer;
display:flex;
align-items:center;
gap:5px;
`;



const Menu = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <Img src={videoBible} />
          VideoBible
        </Logo>
        <Item>
            <HomeIcon/>
            Home
        </Item>
        <Item>
            <ExploreIcon/>
           Explore
        </Item>
        <Item>
            <SubscriptionsIcon/>
           Subscription
        </Item>
        <Hr/>

        <Item>
            <VideoLibraryIcon/>
            Library
        </Item>
        <Item>
            <HistoryIcon/>
            History
        </Item>
     <Hr/>
     <Login>
      Sign in to like videos,comment, and subscribe
      </Login>
      <Button><AccountCircleIcon/>SIGN IN</Button>
        <Item>
            <LibraryMusicIcon/>
            Music
        </Item>
        <Item>
            <NewspaperIcon/>
            News
        </Item>
        <Item>
            <SportsBaseballIcon/>
            Sports
        </Item>

        <Item>
            <SportsEsportsIcon/>
            Gaming
        </Item>

        <Item>
            <LocalMoviesIcon/>
           Movies
        </Item>

        <Item>
            <LiveTvIcon />
            Live
        </Item>
   <Hr/>
       
        <Item>
            <SettingsIcon/>
            Settings
        </Item>

        <Item>
            <FlagIcon/>
            Report
        </Item>

        <Item>
            <QuizIcon/>
            Help
        </Item>
        
        <Item>
            <LightModeIcon/>
            Light Mode
        </Item>

      </Wrapper>
    </Container>
  );
};

export default Menu;
