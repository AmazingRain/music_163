import React, { memo, Fragment } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { ReleventPlayListWrapper, ReleventSongsWrapper } from './style';
import ThemeHeaderDetail from '@/components/theme-header-detail';
import { getImageSize } from '@/utils/data-format';

import { 
  getSongDetailAction, 
  // changePlayListAction 
} from '@/pages/player/store';


export default memo(function ReleventPlayList() {

  const { releventSongs, releventPlayList } = useSelector(state => ({
    releventSongs: state.songDetail.releventSongs,
    releventPlayList: state.songDetail.releventPlayList,
    playList: state.player.playList
  }), shallowEqual);

  const dispatch = useDispatch();

  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  };

  // const addPlayList = (item) => {
  //   console.log(item);
  //   playList.push(item);
  //   dispatch(changePlayListAction(playList));
  // }
  return (
    <Fragment>
      <ReleventPlayListWrapper isShow={releventPlayList.length === 0 ? false : true}>
        <ThemeHeaderDetail title="包含这首歌的歌单" />
        <div className="play-list">
          {
            releventPlayList.map((item, index) => {
              return (
                <div className="play-list-item" key={item.id}>
                  <a className="image" href="/#">
                    <img src={getImageSize(item.coverImgUrl, 50)} alt="" />
                  </a>
                  <div className="info text-nowrap">
                    <a href="#/" className="name">{item.name}</a>
                    <div className="auchor">
                      by
                    <a href="#/" className="nickname">{item.creator.nickname}</a>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
      </ReleventPlayListWrapper>

      <ReleventSongsWrapper>
        <ThemeHeaderDetail title="想似歌曲" />
        <div className="songs">
          {
            releventSongs.map((item, index) => {
              return (
                <div className="song-item" key={item.id}>
                  <div className="info">
                    <div className="title">
                      <NavLink to={`/discover/song?id=${item.id}`}>
                        {item.name}
                      </NavLink>
                    </div>
                    <div className="artist">
                      <a href="#/">{item.artists[0].name}</a>
                    </div>
                  </div>
                  <div className="operate">
                    <button
                      className="item sprite_icon3 play"
                      onClick={() => playMusic(item.id)}
                    />
                    {/* <button 
                      className="item sprite_icon3 add"
                      onClick={() => addPlayList(item)}
                    /> */}
                  </div>
                </div>
              )
            })
          }
        </div>
      </ReleventSongsWrapper>
    </Fragment>
  )
})
