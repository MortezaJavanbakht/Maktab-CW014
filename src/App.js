import Input from './Component/Input/Input'
import './App.css';

function App() {
  return (
    <div className="App">
      <Input name='email' type='email'  />
      <Input name='name' type='text'  />
      <Input name='address' type='text'  />

    </div>
  );
}

export default App;
