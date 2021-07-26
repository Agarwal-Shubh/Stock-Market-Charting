import { useSelector } from 'react-redux';
import { useRoutes } from 'react-router';
import './App.css';
import Header from './components/Header/Header';
import routes from './routes';

function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  let routing = useRoutes(routes(userInfo));
  return (
    <div className="App">
      <Header />
    {routing}
    </div>
  );
}

export default App;
