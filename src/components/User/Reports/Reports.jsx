import React from 'react';
import Bmi from './Bmi';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Header from '../../Landing/Header/Header';
import Background from '../../Landing/Background/Background';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

const Reports = () => {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div>
        <Header />
        <Background /><br /><br /><br /><br />
        <Box sx={{ width: '95%', margin: 'auto', backgroundColor: 'rgba(255, 255, 255, 0.4)', border: '2px solid rgba(0, 0, 0, 0.18)', borderRadius: '12px'}}>
            <AppBar position="static" style={{color: 'black', borderRadius: '12px', backgroundColor: 'rgba(255, 255, 255, 0.9)', boxShadow: '0 8px 32px 0 rgba(255, 0, 204, 0.37)', backdropFilter: 'blur( 5px )', border: '2px solid rgba(0, 0, 0, 0.18)'}}>
                <Tabs
                    value={value}
                    onChange={handleChange}
                    variant="scrollable"
                    scrollButtons
                    allowScrollButtonsMobile
                    indicatorColor="primary"
                    textColor="inherit"
                    aria-label="full width tabs example"
                >
                    <Tab label="BMI Calculator" {...a11yProps(0)} style={{fontWeight: 'bolder'}}/>
                    <Tab label="Body Fat Calculator" {...a11yProps(1)} style={{fontWeight: 'bolder'}} />
                    <Tab label="BMR Calculator" {...a11yProps(2)} style={{fontWeight: 'bolder'}} />
                    <Tab label="Ideal Weight Calculator" {...a11yProps(3)} style={{fontWeight: 'bolder'}} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Bmi />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                Item Two
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                Item Three
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                Item Four
                </TabPanel>
            </SwipeableViews>
        </Box>
    </div>
  )
}

export default Reports;