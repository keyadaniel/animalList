import './App.css';
import Animal from './components/Animal'

function App() {
  let dataArr = [
    {id:2,name:'Ed ', location:'Lake'},
    {id:10,name: 'John ', location:'Water'},
  ]

  let listItem = dataArr.map((val)=> {
    return (
      <li key={val.id}>
        Name: {val.name}
        location: {val.location}
      </li>
    );
  });

  return (
    <div className='App'>
    {/*<ul>{listItem}</ul>*/}
    <Animal />
    </div>
  );
}

export default App;
