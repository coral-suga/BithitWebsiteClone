import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Layout from './components/Layout';
import { Route } from 'react-router';
import Profile from './components/Profile';
import Test from './Test.js'
import Discography from './components/Discography';
import AlbumDetail from './components/AlbumDetail';
import AlbumInfo from './components/AlbumInfo';
import Schedule from './components/Schedule';
import TourComponent from './components/TourComponent';
export default () => {
  return (
    <Layout>
      <Route exact path='/' component={Home} />
      <Route path='/profile' component={Profile} />
      <Route path='/discography' component={Discography} />
      <Route path='/detailAlbum' component={AlbumDetail} />
      <Route path='/albumInfo' component={AlbumInfo} />
      <Route path='/schedule' component={Schedule} />
      <Route path='/tour' component={TourComponent} />
    </Layout>
  );
}
