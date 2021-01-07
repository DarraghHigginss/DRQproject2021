import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';


class Comedy extends React.Component {

  render() {
    return (
      <div className="App">
        
          
          <font color="white"><h1>Comedy Shows</h1></font>
        <CardGroup>
  <Card bg="dark" text="white">
  <a href="https://www.imdb.com/title/tt2467372/?ref_=nv_sr_srsg_0"><Card.Img src="https://i1.sndcdn.com/artworks-000498558402-2hsq2f-t500x500.jpg"/></a>
    <Card.Body>
      <Card.Title>Brooklyn Nine Nine</Card.Title>
      2013-Present
      <Card.Text>
      Led by the surprisingly effective pairing of Andy Samberg and Andre Braugher, Brooklyn Nine-Nine is a charming, intelligently written take on the cop show format.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt0472954/?ref_=nv_sr_srsg_0"><Card.Img src="https://m.media-amazon.com/images/I/81yYNXBEeGL._SS500_.jpg" /></a>
    <Card.Body>
      <Card.Title>It's Always Sunny In Philadelphia</Card.Title>
      2005-Present
      <Card.Text>
      t's Always Sunny's winning formula keeps the laughs rolling and the stomachs turning in a thirteenth season that's topical, triumphant, and toxic in the best way.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt2575988/"><Card.Img src="https://m.media-amazon.com/images/I/81pwdcZYqDL._SS500_.jpg" /></a>
    <Card.Body>
      <Card.Title>Silicon Valley</Card.Title>
      2014-2019
      <Card.Text>
      Silicon Valley is a relevant, often hilarious take on contemporary technology and the geeks who create it that benefits from co-creator Mike Judge's real-life experience in the industry
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
{/*Second row of cards*/}
<CardGroup>
<Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt0367279/"><Card.Img  src="https://vignette.wikia.nocookie.net/arresteddevelopment/images/8/81/Arrested_Development-_And_That%27s_Why..._You_Always_Leave_a_Note.jpg/revision/latest?cb=20140104220252"/></a>
    <Card.Body>
      <Card.Title>Arrested Development</Card.Title>
      2003-2019
      <Card.Text>
      Arrested Development puts an ambitiously complex, brilliantly fast-paced spin on dysfunctional family comedy, anchored by the efforts of a tremendously talented ensemble.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt8064302/"><Card.Img  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBHuAsblFukdx09YVf9YWLSpUKTYsyeQ3Vbw&usqp=CAU" /></a>
    <Card.Body>
      <Card.Title>Dead To Me</Card.Title>
      2000-Present
      <Card.Text>
      Playing an exaggerated version of himself, Larry David proves that his comic genius is at full force both behind and in front of the camera.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card bg="dark" text="white">
    <a href="https://www.imdb.com/title/tt0121955/"><Card.Img  src="https://static.spin.com/files/2019/06/SouthParkBLU_cover-1561756748-compressed.jpg" /></a>
    <Card.Body>
      <Card.Title>South Park</Card.Title>
      1997-Present
      <Card.Text>
      South Park deploys blisteringly insightful gags in its most serialized season yet -- mining thoughtful laughs from nostalgia, political correctness, and the trolling phenomenon.
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
      </div>
    );
  }
}

export default Comedy;