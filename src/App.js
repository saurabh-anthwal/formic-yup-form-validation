
import './App.css';
import SignUp from './component/SignUp';

function App() {
  return (
    <div className="container mt-3">
      <div className='row'>
        <div className='col-md-5'>
          <SignUp/>
        </div>
        <div className='col-md-7'>
          <img className='img-fluid w-100' src="https://cdn.pixabay.com/photo/2018/03/26/14/07/space-3262811_960_720.jpg" alt="" />
        </div>
      </div>
      
    </div>
  );
}

export default App;
