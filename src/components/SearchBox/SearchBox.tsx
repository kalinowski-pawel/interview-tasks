import React, { useState, useEffect } from 'react';
import { SimpleButton } from '@@components';

import styles from './SearchBox.module.scss';

const DEBOUNCE_DELAY = 300;
const OPTIONS = [
  'New York',
  'Los Angeles',
  'Chicago',
  'Houston',
  'Phoenix',
  'Philadelphia',
  'San Antonio',
  'San Diego',
  'Dallas',
  'San Jose',
];

const SearchBox = () => {
  const [phrase, setPhrase] = useState<string | null>(null);
  const [resultPhrases, setResultPhrases] = useState<string[]>(OPTIONS);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhrase(event.target.value);
  };
  const renderResults = () => {
    return resultPhrases.map((element) => (
      <div key={element} style={{ paddingLeft: '4px' }}>
        {element}
      </div>
    ));
  };

  const debouncedSearch = (callback: () => void, delay = DEBOUNCE_DELAY) => {
    const timeout = setTimeout(() => {
      callback();
    }, delay);
    return () => clearTimeout(timeout);
  };

  useEffect(() => {
    if (phrase && phrase?.length > 2) {
      debouncedSearch(() => {
        const results = OPTIONS.filter((option) => option.toLowerCase().includes(phrase.toLowerCase()));
        setResultPhrases(results);
      });
    } else if (phrase === '') {
      setResultPhrases(OPTIONS);
    }
  }, [phrase]);

  return (
    <div className={styles.container}>
      <div className={styles.container__content}>
        <label htmlFor="search-input">Search for a city:</label>
        <div className={styles.container__content__wrapper}>
          <input type="text" onChange={handleChange} id="search-input" />
        </div>
        <div className={styles.container__content__box}>{renderResults()}</div>
      </div>
      <div className={styles.container__footer}>
        <SimpleButton onClick={() => console.debug('clicked')} />
      </div>
    </div>
  );
};

export default SearchBox;
