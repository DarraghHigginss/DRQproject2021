import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Logo from './logo.png';

class Action extends React.Component {

  render() {
    return (
      <div className="App">
        <font color="white"><h1>Action Based Shows</h1></font>
        {/*Hard coded shows in cards */}
        <CardGroup>
  <Card bg="dark" text="white">
  <a href="https://www.imdb.com/title/tt5675620/"><Card.Img  src="http://ayanahaviv.com/wp-content/uploads/2014/11/34-The-Punisher.jpg"/></a>
    <Card.Body>
      <Card.Title>The Punisher</Card.Title>
      2017-2019
      <Card.Text>
      A rocky start can't keep The Punisher from pushing the boundaries of Marvel's TV universe with a fresh take on the comics-derived action thriller.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt2442560/"><Card.Img  src="https://i.guim.co.uk/img/media/b4671b518cf9f81e4343c5921a6210141fd9f8fa/257_238_4027_2416/master/4027.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=b53840860e0a93ea62327d62d68b562f" /></a>
    <Card.Body>
      <Card.Title>Peaky Blinders</Card.Title>
      2013-Present
      <Card.Text>
      An epic following of a gangster family of Irish Traveller origin set in Birmingham, England, in 1919, several months after the end of the First World War in November 1918.
      The story centres on the Peaky Blinders gang ,their ambitious and highly cunning boss Tommy Shelby.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt3749900/?ref_=fn_al_tt_1"><Card.Img  src="https://cdn.playlists.net/images/playlists/image/medium/216980.jpg" /></a>
    <Card.Body>
      <Card.Title>Gotham</Card.Title>
      2014-2019
      <Card.Text>
      High production values, a talented cast, and an appealingly stylized approach to the Batman mythos help Gotham overcome its occasionally familiar themes.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
{/*Second row of cards */}
<CardGroup>
<Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt1312171/"><Card.Img  src="https://assets1.ignimgs.com/2018/12/10/the-umbrella-academy-button-1544446297113.jpg"/></a>
    <Card.Body>
      <Card.Title>Umbrella Academy</Card.Title>
      2019-Present
      <Card.Text>
      On one day in 1989, 43 infants are inexplicably born to random, unconnected women who showed no signs of pregnancy the day before. Seven are adopted by billionaire industrialist Sir Reginald Hargreeves, who creates the Umbrella Academy and prepares his "children" to save the world.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt2306299/"><Card.Img  src="https://e-cdns-images.dzcdn.net/images/cover/3e365b38bc51efaf25081697bd5f7162/500x500.jpg" /></a>
    <Card.Body>
      <Card.Title>Vikings</Card.Title>
      2013-Present
      <Card.Text>
      Vikings makes up for its lack of historical accuracy with a heaping helping of violence, romance, and striking visuals.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt0455275/"><Card.Img  src="https://direct.rhapsody.com/imageserver/images/alb.144399536/500x500.jpg" /></a>
    <Card.Body>
      <Card.Title>Prison Break</Card.Title>
      2005-2017
      <Card.Text>
      Prison Break is confident pulp with a crackerjack premise that spreads thinly enough to smooth over the show's more lunkheaded flourishes.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>

      
      </div>
    );
  }
}

export default Action;