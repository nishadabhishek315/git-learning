import './App.css';
import { useGetAllPostQuery } from './services/post';

function App() {
  const responseInfo = useGetAllPostQuery();

  console.log("response Info : ", responseInfo);
  return (
    <div className="App">
      <h1>Hello World</h1> 
    </div>
  );
}

export default App;

// comment