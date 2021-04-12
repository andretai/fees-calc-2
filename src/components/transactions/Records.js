import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography} from '@material-ui/core';
import { AddCircleOutline, RemoveCircleOutline } from '@material-ui/icons';

const useStyles = makeStyles(theme => ({
  paper: {
    marginBottom: '6px'
  },
  buy: {
    backgroundColor: '#4ecdc4'
  },
  buytag: {
    backgroundColor: '#3D9C95',
    height: '64px',
    display: 'table-cell',
    verticalAlign: 'middle',
    padding: '0 3px'
  },
  sell: {
    backgroundColor: '#ff6b6b'
  },
  selltag: {
    backgroundColor: '#C85555',
    height: '64px',
    display: 'table-cell',
    verticalAlign: 'middle',
    padding: '0 3px'
  },
  text: {
    color: '#ffffff'
  },
  info: {
    padding: '0 16px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  bold: {
    fontWeight: 700,
    marginRight: '6px'
  }
}));

const Records = React.forwardRef((props, ref) => {
  const classes = useStyles();
  const records = props.records;
  return (
    <>
      <hr style={{ margin: '24px 96px' }}></hr>
      {
        records.length === 0 ? <Typography style={{ textAlign: 'center' }}>no transactions found.</Typography> : null
      }
      {
        records.map(record => 
          <Grid container key={record.id} 
            className={`${classes.paper} ${record.type === 'buy' ? classes.buy : classes.sell}`}>
            <Grid item xs={1}>
              {record.type === 'buy' ? 
                <div className={`${classes.buytag}`}>
                  <AddCircleOutline className={`${classes.text} `}/>
                </div>
                :
                <div className={`${classes.selltag}`}>
                  <RemoveCircleOutline className={`${classes.text} `}/>
                </div>
              }
            </Grid>
            <Grid item xs={11} className={classes.info}>
              <div>
                <Typography variant="body1" className={`${classes.text} ${classes.bold}`}>{record.name}<br></br></Typography>
                <Typography variant="caption" className={classes.text}>{record.code}</Typography>
              </div>
              {/* <div style={{ flexGrow: 1 }}></div> */}
              <div style={{ display: 'flex' }}>
                <Typography variant="body1" className={`${classes.text} ${classes.bold}`}>RM {parseFloat(record.price).toFixed(3)}</Typography>
                <Typography variant="caption" className={classes.text}>x{record.quantity}</Typography>
              </div>
            </Grid>
          </Grid>
        )
      }
    </>
  )
});

export default Records;
