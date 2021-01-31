import React, { Fragment, memo, Suspense, useEffect } from "react";
import { renderRoutes } from 'react-router-config';

import {  useDispatch } from 'react-redux';

import { changeIsShowPlayPannelAction } from './pages/player/store';
import { changeIsShowResultAction } from './pages/song-detail/store';
import routes from './router';

import Header from './components/header';
import Footer from './components/footer';
import Player from './pages/player';
import BackTop from './components/back-top';


function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    // 鼠标移开播放歌单或搜索结果时，将其隐藏
    document.getElementById('router-wrapper').onclick = function() {
      dispatch(changeIsShowPlayPannelAction(false));
      dispatch(changeIsShowResultAction(false));
    }
  }, [dispatch])

  return (
    <Fragment>
      <Header />
      <div id="router-wrapper">
        <Suspense fallback={<h1>loading...</h1>}>
          {renderRoutes(routes)}
        </Suspense>
      </div>
      <Footer />
      <Player />
      <BackTop />
    </Fragment>
  )
}

export default memo(App);

