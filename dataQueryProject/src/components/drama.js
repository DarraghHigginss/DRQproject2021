import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Logo from './logo.png';

class Drama extends React.Component {

  render() {
    return (
      <div className="App">
        <font color="white"><h1>Drama shows</h1></font>
        <CardGroup>
  <Card bg="dark" text="white">
  <a href="https://www.imdb.com/title/tt2356777/"><Card.Img src="https://cdn.playlists.net/images/playlists/image/medium/204793.jpg"/></a>
    <Card.Body>
      <Card.Title>True Detective</Card.Title>
      2014-Present
      <Card.Text>
      In True Detective, performances by Woody Harrelsen and Matthew McConaughey reel the viewer in, while the style, vision and direction make it hard to turn away.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt5290382/"><Card.Img src="https://m.media-amazon.com/images/I/81MLpeLGPWL._SS500_.jpg" /></a>
    <Card.Body>
      <Card.Title>Mindhunter</Card.Title>
      2017-2019
      <Card.Text>
      Mindhunter distinguishes itself in a crowded genre with ambitiously cinematic visuals and a meticulous attention to character development.
      Netflix has since decided to discontinue production of Mindhunter for unknown reasons </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt1856010/"><Card.Img src="https://m.media-amazon.com/images/I/817JPErU9BL._SS500_.jpg" /></a>
    <Card.Body>
      <Card.Title>House of Cards</Card.Title>
      2013-2018
      
      <Card.Text>
      Bolstered by strong performances -- especially from Kevin Spacey -- and surehanded direction, House of Cards is a slick, engrossing drama that may redefine how television is produced.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
{/*Second row of three card images on the page*/}
<CardGroup>
<Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt0141842/"><Card.Img  src="https://direct.rhapsody.com/imageserver/images/alb.105365953/500x500.jpg"/></a>
    <Card.Body>
      <Card.Title>The Sopranos</Card.Title>
      1999-2007
      <Card.Text>
      The Sopranos smartly runs an emotional gamut, offering detailed character work and riveting suspense while displaying a flair for both comedy and drama.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt0306414/"><Card.Img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSINWUNZiH5Cog261tLTc0XM4kyZzgVPyhmoaXqEeWdnhQI9QAi&s" /></a>
    <Card.Body>
      <Card.Title>The Wire</Card.Title>
      2002-2008
      <Card.Text>
      Though it takes its time getting started, The Wire is worth the wait, spinning a connective web of characters and delivering no-holds-barred commentary on some of America's unsettling societal problems.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt0804503/"><Card.Img  src="https://m.media-amazon.com/images/I/81hfj0tli3L._SS500_.jpg" /></a>
    <Card.Body>
      <Card.Title>Mad Men</Card.Title>
      2007-2015
      <Card.Text>
      Oozing evocative early 1960s ambiance, Mad Men is a sly, subversive look at the American workplace that radiates class, wit, and an undercurrent of disaffection.
      
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
      </div>
    );
  }
}

export default Drama;