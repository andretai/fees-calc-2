import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction, Typography} from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  buy: {
    backgroundColor: '#4ecdc4'
  },
  sell: {
    backgroundColor: '#ff6b6b'
  },
  text: {
    color: '#ffffff'
  }
}));

const Records = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const records = props.records;
  return (
    <>
      {
        records.map(record => 
          <ListItem key={record.id} className={record.type === 'buy' ? classes.buy : classes.sell}>
            <ListItemIcon>
              {record.type === 'buy' ? 
                <Typography variant="button" className={classes.text}>buy</Typography>
                :
                <Typography variant="button" className={classes.text}>sell</Typography>
              }
            </ListItemIcon>
            <ListItemText>
              <Typography variant="button" className={classes.text}>{record.name}-</Typography>
              <Typography variant="caption" className={classes.text}>{record.code}</Typography>
            </ListItemText>
            <ListItemSecondaryAction>
              <Typography variant="button" className={classes.text}>RM {parseFloat(record.price).toFixed(3)}x</Typography>
              <Typography variant="caption" className={classes.text}>{record.quantity}</Typography>
            </ListItemSecondaryAction>
          </ListItem>
        )
      }
    </>
  )
});

export default Records;
