import React from 'react';
import SubTasks from './SubTasks/SubTasks';

const tasks = (props) => {
   return (
     <div style={{marginLeft: 300}}>
        <SubTasks type = "Today" />
        <SubTasks type = "Tomorrow" />
        <SubTasks type = "Upcoming" />
        <SubTasks type = "Someday" />
     </div>
   );
};

export default tasks;
