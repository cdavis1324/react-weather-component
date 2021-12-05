import React from 'react';
import {
  CardContent,
  Typography,
  ListItem,
  Toolbar,
  Tabs
} from '@material-ui/core';

import Icon from '@mdi/react';
import {
  mdiCloud
} from '@mdi/js';

import styles from './WeatherForecast.module.css';

const rainDropSVG = 'M9.81 15.25c0 .92.23 1.78.7 2.57s1.1 1.43 1.9 1.9c.8.47 1.66.71 2.59.71.93 0 1.8-.24 2.61-.71a5.3 5.3 0 0 0 1.92-1.9c.47-.8.71-1.65.71-2.57 0-.6-.17-1.31-.52-2.14-.35-.83-.77-1.6-1.26-2.3-.44-.57-.96-1.2-1.56-1.88-.6-.68-1.65-1.73-1.89-1.97l-1.28 1.29c-.62.6-1.22 1.29-1.79 2.08-.57.79-1.07 1.64-1.49 2.55-.44.91-.64 1.7-.64 2.37z'
const ForecastItem = (props: {id: number}) => {
  const { id } = props;
  return (
    <ListItem
      className={styles['forecast-item']}
    >
      <Typography align='center' variant='subtitle1' component='div'>
        7am
      </Typography>
      <Icon path={mdiCloud} size={1}/>
      <Typography align='center' variant='subtitle1' component='div'>
       50°f
      </Typography>
      <div
        className={styles['forecast-precipitation']}
      >
        <Icon path={rainDropSVG} size={1}/>
        <Typography align='center' variant='subtitle1' component='span'>
          0%
      </Typography>
      </div>
    </ListItem>
  );
}
const WeatherForecast = () => {
  return (
    <CardContent
    >
        <Tabs scrollButtons='on' variant='scrollable' value={false}>
          <ForecastItem id={1} />
          <ForecastItem id={2} />
          <ForecastItem id={3} />
          <ForecastItem id={4} />
          <ForecastItem id={5} />
          <ForecastItem id={6} />
          <ForecastItem id={7} />
          <ForecastItem id={8} />
        </Tabs>
    </CardContent>
  );
};

export default WeatherForecast;
