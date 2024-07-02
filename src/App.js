import './App.css';
import Buttons from './components/Buttons';
import Screen from './components/Screen';

function App() {
  return (
    <div className='w-full h-screen bg-zinc-800 text-center'>
        <h1 className='text-white'>Counter</h1>
        <div className='w-[40%] mx-auto '>
          <Screen/>
          <div className='flex justify-between gap-4'>
          <Buttons msg={"+"}/>
          <Buttons msg={"-"}/>
          </div>
        </div>
    </div>
  )
}

export default App;
