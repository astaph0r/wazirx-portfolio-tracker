import logo from './logo.svg';
import { Header } from "./Components/Header";
import { Portfolio } from './Components/Portfolio';
import './App.css';

function App() {
  const coins = [
    {
      image: "https://via.placeholder.com/100x100",
      title: "ABCD",
      difficulty: "Hard",
      time: "20",
      servings: "12",
      author: "ANDKSK",
      rating: "3.0"
    },
    {
      image: "https://via.placeholder.com/100x100",
      title: "EFCFFF",
      difficulty: "Easy",
      time: "20",
      servings: "12",
      author: "ANDKSK",
      rating: "3.0"
    }

  ];

  return (
    <>
    <Header logo={logo}/>
    <Portfolio coins={coins}/>
    </>
  );
}

export default App;
