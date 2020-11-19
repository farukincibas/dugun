import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import history from './history';
import DatePicker from './DatePicker';
import CountryTelSelect from './CountriesAutoComplete';
import CostPerPersonAutoComplete from './CostPerPersonAutoComplete';
import NumberofGuestAutoComplete from './NumberofGuestAutoComplete';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import EmailOutlinedIcon from '@material-ui/icons/EmailOutlined';
import PhoneEnabledOutlinedIcon from '@material-ui/icons/PhoneEnabledOutlined';
import InputAdornment from '@material-ui/core/InputAdornment';
import { useLocation } from "react-router-dom";



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








function PurchaseOrder(props) {
  const classes = useStyles();
  const location = useLocation();

  const myparam = location.state.detail;
  //console.log(myparam);

  function submit(event) {
    event.preventDefault();
    console.log("SUBMIT", myparam);
    history.push({ pathname: '/SuccessPurchase', state: { successDetail: myparam } });
  }


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [costPerPerson, setCostPerPerson] = useState();
  const [numberofGuest, setNumberofGuest] = useState();

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>


        <form className={classes.form}
          onSubmit={submit.bind(this)}
          autoComplete="off"
        >
          <h3 style={{ float: "left", color: "#1A1A1A" }}>Ücretsiz fiyat teklifi al</h3>
          <Grid container spacing={2}>
            <Grid item xs={12} >
              <TextField
                name="Name"
                variant="outlined"
                required
                fullWidth
                id="Name"
                label="Ad Soyad"
                onChange={() => { setName(window.event.target.value); }}
                value={name}
                autoFocus
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" variant="outlined">
                      <PermIdentityOutlinedIcon></PermIdentityOutlinedIcon>
                    </InputAdornment>
                  ),
                }}
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
                onChange={() => { setEmail(window.event.target.value); }}
                value={email}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" variant="outlined">
                      <EmailOutlinedIcon></EmailOutlinedIcon>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>

            <Grid item xs={12} sm={4}>
              <CountryTelSelect></CountryTelSelect>
            </Grid>
            <Grid item xs={12} sm={8}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="tel"
                label="Telephone"
                name="tel"
                inputProps={{ maxLength: 10 }}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end" variant="outlined">
                      <PhoneEnabledOutlinedIcon></PhoneEnabledOutlinedIcon>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>




            <Grid item xs={12}>
              <DatePicker ></DatePicker>
            </Grid>


            <Grid item xs={12}>
              <CostPerPersonAutoComplete></CostPerPersonAutoComplete>
            </Grid>

            <Grid item xs={12}>
              <NumberofGuestAutoComplete></NumberofGuestAutoComplete>
            </Grid>

            <Grid item xs={12}>
              <TextField
                variant="outlined"
                fullWidth
                id="message"
                label="Mesaj(Opsiyonel)"
                name="message"
                onChange={() => { setMessage(window.event.target.value); }}
                value={message}
                InputProps={{
                  inputComponent: TextareaAutosize,
                  rows: 3
                }}
              />
            </Grid>

            <Grid item xs={12}>
              <h4 style={{ color: "#5F5F5F", fontSize: 15 }}>
                <Checkbox required value="allowUsersDeal" color="primary" />
                <a style={{ textDecoration: "underline" }}>Kullanıcı sözleşmesi</a>  ve <a style={{ textDecoration: "underline" }}>pazarlama izni</a> metinlerini okudum ve kabul ediyorum.
            </h4>

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




class Purchase extends React.Component {
  render() {
    return <PurchaseOrder></PurchaseOrder>;
  }
}

export default Purchase