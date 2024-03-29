import React, { useEffect, useState } from 'react';
import { ClassificationList } from './ClassificationList';
import { useFetch } from '../hooks/useFetch';
import { ArtList } from './ArtList';

export const Arts = () => {
  const [selectedClassification, setSelectedClassification] = useState('');

  const classificationUrl = `https://api.harvardartmuseums.org/classification/?apikey=${process.env.REACT_APP_API_KEY}&&page=3`;

  const { data: classifications, fetchData } = useFetch(classificationUrl);

  useEffect(() => {
    const fetchDataAsync = async () => {
      await fetchData();
    };

    fetchDataAsync();
  }, []);

  const handleClick = (classification) => {
    setSelectedClassification(classification.name);
  };

  return (
    <main>
      <ClassificationList
        classifications={classifications}
        handleClick={handleClick}
        selectedClassification={selectedClassification}
      />
      <ArtList
        url={
          selectedClassification
            ? `https://api.harvardartmuseums.org/object/?apikey=${process.env.REACT_APP_API_KEY}&size=9&hasimage=1&person=any&sort=random&q=classification:${selectedClassification}`
            : `https://api.harvardartmuseums.org/object/?apikey=${process.env.REACT_APP_API_KEY}&size=9&hasimage=1&person=any&sort=random`
        }
      />
    </main>
  );
};
