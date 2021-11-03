import React, { useState } from 'react'
import Display from './components/Display';
import Input from './components/Input'
import ErrorBoundary from './components/ErrorBoundary';
import { useLazyQuery } from '@apollo/client'
import { FETCH_POKEMON } from './queries'
import ErrorDisplay from './components/ErrorDisplay';

function App() {
  const [text, setText] = useState('')
  const [fetch, { data, loading }] = useLazyQuery(FETCH_POKEMON)
  const reset = () => setText('')

  return (
    <main>
      <ErrorBoundary
        reset={reset}
        ErrorComponent={ErrorDisplay}
      >
        <Input
          text={text}
          setText={setText}
          fetch={fetch}
        />
        <Display
          data={data}
          loading={loading}
          text={text}
        />
      </ErrorBoundary>
    </main>
  );
}

export default App;
