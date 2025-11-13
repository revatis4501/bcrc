import React from 'react'
import Breadcrumb from '../components/Breadcrumb';
import Events from '../components/events';

const Eventspage = () => {
  return (
    <div>
          <Breadcrumb Title="Latest Events" page="events" />
          <Events/>
    </div>
  );
}

export default Eventspage
