
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import AllPoll from '../components/AllPoll';
import UserPoll from '../components/UserPoll';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // backgroundColor: theme.palette.background.paper,
  },
}));

function MainTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }

  return (
    <div className={classes.root}>
        <Tabs value={value} onChange={handleChange} variant="fullWidth">
          <Tab label="All Polls" />
          <Tab label="My Polls" />
        </Tabs>
      {value === 0 &&
                    <TabContainer>
                       <AllPoll></AllPoll>
                    </TabContainer>
                                     }
      {value === 1 && 
                  <TabContainer>
                     <UserPoll></UserPoll>
                   </TabContainer>
                             }
    </div>
  );
}

export default MainTabs;
