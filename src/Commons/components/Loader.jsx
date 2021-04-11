import { LinearProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  indicator: {
    position: 'fixed',
    height: theme.spacing(1),
    width: '100vw',
    '& .MuiLinearProgress-bar': {
      borderRadius: '50%',
    },
  },
}));

const Loader = () => {
  const classes = useStyles();
  return <LinearProgress color="secondary" className={classes.indicator} />;
};

export default Loader;
