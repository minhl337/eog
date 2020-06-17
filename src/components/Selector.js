import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  button: {
    display: 'block',
    color: 'white',
  },
}));

export default function ControlledOpenSelect() {
  const classes = useStyles();
  const [age, setAge] = React.useState('');
  const [open, setOpen] = React.useState(false);

  const handleChange = event => {
    setAge(event.target.value);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div className={classes.root}>
      <Button className={classes.button}>HI</Button>
      <Button className={classes.button}>HI</Button>
      <Button className={classes.button}>HI</Button>
      <Button className={classes.button}>HI</Button>
      <Button className={classes.button}>HI</Button>
      <Button className={classes.button}>HI</Button>
    </div>
  );
}
