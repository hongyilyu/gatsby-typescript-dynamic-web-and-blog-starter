import { RouteComponentProps } from '@reach/router';
import React, { useEffect, useState } from 'react';
import StandardLayout from '../layouts/standard.layout';

type DashboardProps = RouteComponentProps<{ results: string }>;

const Dashboard: React.FC<DashboardProps> = ({ results = 2 }) => {
  const [person, setPerson] = useState();
  useEffect(() => {
    fetch(`https://randomuser.me/api?results=${results}`)
      .then((x) => x.json())
      .then((x) => setPerson(x));
  }, [results]);

  return (
    <StandardLayout>
      <div>
        <pre>{JSON.stringify(person, null, 2)}</pre>
      </div>
    </StandardLayout>
  );
};

export default Dashboard;
