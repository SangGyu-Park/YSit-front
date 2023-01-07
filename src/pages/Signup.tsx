import {useState, useEffect} from 'react';
import axios from 'axios';

const Signup = () => {
    const [message, setMessage] = useState('')

    useEffect(() => {
        axios.get('/api/register')
        .then(response => setMessage(response.data))
        .catch(error => console.log(error))
    }, []);

      return (
      <div> 
        <h1>회원가입 페이지</h1>
        <p>선생님 회원가입 창입니다 {message}</p>
      </div>
    );
  };
  
  export default Signup;