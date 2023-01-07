import {useState, useEffect} from 'react';
import axios from 'axios';


const Home = () => {
  const [hello, setHello] = useState('')

  useEffect(() => {
      axios.get('/api/hello')
      .then(response => setHello(response.data))
      .catch(error => console.log(error))
  }, []);

    return (
      <div>
        <h1>홈</h1>
        <p>가장 먼저 보여지는 페이지입니다.</p>
        <p>{hello}</p>
      </div>
    );
  };
  
  export default Home;