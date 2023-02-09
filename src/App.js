
import './App.css';
import Profile from './profile/Profile';
import logo from './imgreact.jpg';

function App() {
  const alertme=(fullname)=>{
        alert(fullname)
  }
 const fullname='soumaya'
 const bio="inspiring is to be a full stack developper"
 const profession="a student baccalaureat and fullstack development"
 
  return (
    <div className="App">
      <Profile fullname={fullname} bio={bio}profession={profession} alertme={alertme}> <img src={logo}  alt='imgreact.jpg'/> 
       </Profile>
      
    </div>
  );
}

export default App;
