import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';



const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function Test() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
        Ücretsiz fiyat teklifi al
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                autoComplete="fname"
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Ad Soyad"
                autoFocus
              />
            </Grid>
            
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="E-posta"
                name="email"
                autoComplete="email"
              />
            </Grid>

            <Grid item xs={12} sm={3}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="tel"
                label="TelFirst"
                name="tel"
                autoComplete="tel"
              />
            </Grid>
            <Grid item xs={12} sm={9}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="tel2"
                label="TelSecond"
                name="tel2"
                autoComplete="tel2"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="weddingDate"
                label="Düğün Tarihi"
                name="weddingDate"
                autoComplete="weddingDate"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="cost"
                label="Kişi başı bütçe"
                name="cost"
                autoComplete="cost"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="numberofGuest"
                label="Davetli Sayısı"
                name="numberofGuest"
                autoComplete="numberofGuest"
              />
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="message"
                label="Mesaj(Opsiyonel)"
                name="message"
                autoComplete="message"
              />
            </Grid>

            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowUsersDeal" color="primary" />}
                label="Kullanıcı sözleşmesi ve pazarlama izni metinlerini okudum ve kabul ediyorum."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            style={{ color: "white", backgroundColor: "#DB0962" }}
            className={classes.submit}
          >
            Ücretsiz teklif al
          </Button>
         
        </form>
      </div>
      
    </Container>
  );
}
