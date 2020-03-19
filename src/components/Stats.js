import React from 'react';
import useStats from '../hooks/useStats';
import { StatGrid, StatBlock } from '../components/StyledStats';

export default function Stats({ url }) {
  const { stats, loading, error } = useStats(url);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Something went wrong</p>;
  return (
    <>
      <p>
        <small>
          Última actualización: <em>{stats.lastUpdate}</em>
        </small>
      </p>
      <StatGrid>
        <StatBlock>
          <p>{stats.confirmed.value}</p>
          <h3>Confirmados</h3>
        </StatBlock>
        <StatBlock>
          <p>{stats.deaths.value}</p>
          <h3>Decesos</h3>
        </StatBlock>
        <StatBlock>
          <p>{stats.recovered.value}</p>
          <h3>Recuperados</h3>
        </StatBlock>
      </StatGrid>
    </>
  );
}