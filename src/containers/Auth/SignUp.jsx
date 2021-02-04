import React from "react";
import * as Yup from "yup";
import AppFormField from "../../components/Form/AppFormField";
import SubmitButton from "../../components/Form/SubmitButton";
import AppForm from "../../components/Form/AppForm";
import Grid from "@material-ui/core/Grid";
import Block from "../../components/Block/Block";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const useStyles = makeStyles((theme) => ({
  button: {
    padding: theme.button.padding,
  },
}));

const SignUp = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <Block lg={6} md={8} sm={10} xs={11}>
      <AppForm
        initialValues={{ fname: "", lname: "", email: "", password: "" }}
        onSubmit={async (values) => {
          await new Promise((resolve) => setTimeout(resolve, 500));
          alert(JSON.stringify(values, null, 2));
        }}
        validationSchema={validationSchema}
      >
        <Grid container spacing={2}>
          <Grid item md={6} sm={12} xs={12}>
            <AppFormField
              name="fname"
              label="Email First Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <AppFormField
              name="lname"
              label="Email Last Name"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <AppFormField
              name="email"
              label="Email Address"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item md={12} sm={12} xs={12}>
            <AppFormField
              name="password"
              label="Enter Password"
              type="password"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <Button
              onClick={() => history.push("/login")}
              variant="contained"
              color="primary"
              fullWidth
              className={classes.button}
            >
              Login
            </Button>
          </Grid>
          <Grid item md={6} sm={12} xs={12}>
            <SubmitButton title="SignUp" fullWidth />
          </Grid>
        </Grid>
      </AppForm>
    </Block>
  );
};

export default SignUp;
