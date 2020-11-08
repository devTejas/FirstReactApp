import React, { useState } from 'react';
import Counter from './Counter'
import CounterHooks from './CounterHooks'

export const ThemeContext = React.createContext()

function App() {
  console.log("Render App")
  const [theme, setTheme] = useState('pink')
  return (
    <ThemeContext.Provider value={{ backgroundColor: theme }}>
      Counter
      <Counter initialCount={0} />
      <br />
      CounterHooks
      <CounterHooks initialCount={0} />
      <br />
      <button onClick={() => setTheme(prevTheme => {
        console.log(prevTheme, theme);
        return prevTheme === 'red' ? 'blue' : 'red';
      })}>
        Toggle Theme
      </button>
    </ThemeContext.Provider>
  )
}

export default App;
