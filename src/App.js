import React, {Fragment} from 'react';
import './App.css';

function App() {
  const name = 'chaewon';
  return(
    <>
      { name ===  'chaewon' ? 
        (<h1 className = 'notice'>{name}, welcome back</h1> // 이름이 chaewon인 경우 안내문
        ) : (<h1 className = 'notice'>{name}, Please register as a member</h1>) // 나머지 이름의 경우 안내문 
      }
    </>
  )
}

export default App;
