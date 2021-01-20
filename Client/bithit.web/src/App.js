import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import { Route } from 'react-router';
import Profile from './components/Profile';
import Test from './Test.js'
export default () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
    </Layout>
  );
}
