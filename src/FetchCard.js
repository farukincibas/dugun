
import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import Grid from '@material-ui/core/Grid';
import history from './history';
import Box from '@material-ui/core/Box';

class Cards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []

    };
  }

  componentDidMount() {
    fetch("https://private-anon-916ddd0f5e-duguncomapis.apiary-mock.com/companies")
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result

          });
        },

        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }


  render() {
    const { error, isLoaded, items } = this.state;

    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <>
          {items.map(item => (
            <Grid  key={item.id}
              container
              direction="row"
              justify="center"
              alignItems="center"
             
            >
              <Card  style={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: 260 }}
                    image={item.imageUrl}
                    title="Düğün Case"
                  ><h4 style={{ position: "absolute", bottom: 110, left: 15, color: "white" }}>{item.district.name}</h4></CardMedia>
                  <CardContent>
                    <Typography style={{ textAlign: "left" }} variant="body2" color="textSecondary" component="p">
                      {item.listingDataBrief[1].label} {item.listingDataBrief[1].value} - {item.listingDataBrief[0].label} {item.listingDataBrief[0].value}
                    </Typography>
                    <Typography style={{ textAlign: "left" }} variant="h5" gutterBottom>
                      {item.name}
                    </Typography>
                    <Typography style={{ textAlign: "left" }} >
                      <div style={{display:"flex",alignItems:"center"}}>
                      <Rating name="read-only" value={item.score} readOnly />
                      <Box ml={2}>{item.commentCount}</Box>
                      </div>
                      
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="large" variant="outlined" color="secondary">
                    İNCELE
             </Button>
                  <Button size="large" variant="contained" onClick={() => history.push({pathname:'/Purchase',state:{detail:item}})} style={{ color: "white", backgroundColor: "#DB0962" }}>
                    ÜCRETSİZ TEKLİF AL
             </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </>

      );
    }
  }
}





export default Cards


