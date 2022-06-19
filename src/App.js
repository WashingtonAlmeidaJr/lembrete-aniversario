import React, { useState } from 'react';
import data from './data';
import List from './List';
function App() {

  const [people,setPeople]=useState(data)

  return (
    <main>
      <section className="container">
        <h3> {people.length} aniversariantes hoje</h3>

        {/* people prop é igual ao estado de people */}
        <List people={people}/>
        <button onClick={()=>setPeople([])}>Limpar lista</button>
      </section>
    </main>

  )
}
export default App;
