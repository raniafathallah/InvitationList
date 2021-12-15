import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import AddToList from './components/AddToList';

export interface IState {
  people: {
      name: string
      age: number
      img: string
      note?: string
  }[]
}


function App() {

  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "LeBron James",
      age: 35,
      img:  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAGwASAMBIgACEQEDEQH/xAAaAAADAQEBAQAAAAAAAAAAAAACAwQBAAUG/9oACAEBAAAAABCWEd5p2okzjIW2SVMeeechxVO3i8qb1JH0gDpYWCm3lWNkXQRvW9IzafMXrJGoVjz5ktPIza5WzUs3z251SjSCda9tHz5PwnsI/FJ2m0mj/8QAGAEBAQEBAQAAAAAAAAAAAAAAAQACBAP/2gAKAgIQAxAAAACM6YR0Y3UIxqitYNtU55Tq1ROeU640OsaxOPSXH//EACkQAAICAQIGAgEFAQAAAAAAAAECAAMREjEEEBMhIjJBUXEjM1JhgaH/2gAIAQEAAT8AKgd5qGZffrJAPjGxyGIREb4mTC5IlrhO0J+hD+IEJnRadFsbQppIm8GBAhtcsdonDqYvC1xaUGwnTWGsGcQgVuVpIqY/1Ku1axG55gM4tv1IG7gSxA1bgbkGVnFa5Owld1W2oQOI/EV17xeMR/VGMFiPtkH6M4ioNWzfIEoQMxZjhQILnjHsCR8RmTsenicLmw6ZchVj4kxX4nOlaxiVLe3soEtHg4/oykaAqFPYD/sGIihlAhpP8pw64sMdAScjeCpAfWDAEsGQYeyFiNl7TQIG0tiNcAJTxNaEjMPF1McfMN5B8hOvAcqTLLHPgT2B5WjyBmCDkgmYrY5zK+mv2Y2qzav/AExEAGIDsI/u355BBZlZ5VtocRlIOVEQWE+pgOlYzSofJj/uN+eVXtOMANcW0jeC/ENxMUFjF7CX9RBlfU8rLjXgJgsY2oBtTamIyxhEFZ+4qAQQQYKkGWk6ycygE2BjsIDkOfswdxFyIoggjNhZb7yn1aVd0/0wb8hBBH3E/8QAGxEBAAIDAQEAAAAAAAAAAAAAAQIQABEgEnH/2gAIAQIBAT8AXmVlKPDvIz9OuYOpnMBZGNjUzXn5YZ//xAAdEQACAwACAwAAAAAAAAAAAAABAgAQEQMgEiFx/9oACAEDAQE/AAKy0FmCKCsBtVGe+hm9jFsrXGd8vtlp/9k=",
      note: "Allegeric to staying on the same team",
    },
    {
      name: "Kobe Bryant",
      age: 42,
      img: "https://www.bing.com/th?id=OIP.zGMzCB9Y8T_AUGSWs4UofgHaEK&w=192&h=108&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
      ,note: "Allegeric to staying on the same team"
    }
    ,
    {
      name: "Rohin Asin",
      age: 21,
      img:"https://www.bing.com/th?id=OIP.bDp_0cx7Q2Gc951WpJNWBgHaLF&w=67&h=102&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2"
    , note: "Allegeric to staying on the same team"
    }
  ])

  return (
    <div className="App">
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList setPeople={setPeople} people={people}/>
    </div>
  );
}

export default App;
