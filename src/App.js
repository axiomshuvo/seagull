import React from 'react';
import AppHeader from './Component/AppHeader';
import AppFooter from './Component/AppFooter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        < AppHeader />
      </header>
      <section className="App-body" >  

      </section>
      <footer className="app-footer" >
        <AppFooter />
      </footer>

    </div>
  );
}

export default App;
