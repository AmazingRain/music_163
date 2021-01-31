import React, { memo } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { getImageSize } from '@/utils/data-format';
import { getSongDetailAction, changePlayListAction } from '@/pages/player/store';

import { TopRankingWrapper } from './style';

export default memo(function TopRanking(props) {
  const { info } = props;
  const { tracks = [] } = info;
  const { playList = [] } = useSelector(state => ({
    playList: state.player.playList
  }), shallowEqual)

  const dispatch = useDispatch();

  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  const addPlayList = (item) => {
    playList.push(item);
    dispatch(changePlayListAction(playList));
  }

  const backTop = () => {
    document.documentElement.scrollTop = '0'
  }

  return (
    <TopRankingWrapper>
      <div className="header">
        <div className="image">
          <NavLink
            to={`/discover/ranking`}
            onClick={() => backTop()}
          >
            <img src={getImageSize(info.coverImgUrl)} alt="" />
          </NavLink>
        </div>
        <div className="info">
          <a href="/todo">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <ul className="list">
        {
          tracks.slice(0, 10).map((item, index) => {
            return (
              <li key={item.id} className="list-item">
                <div className="rank">{index + 1}</div>
                <div className="info">
                  <span className="name text-nowrap">
                    <NavLink to={`/discover/song?id=${item.id}`}>
                      {item.name}
                    </NavLink>
                  </span>
                  <div className="operate">
                    <button className="btn sprite_02 play" onClick={e => playMusic(item)}></button>
                    <button className="btn sprite_icon2 addto" onClick={e => addPlayList(item)}></button>
                    <button className="btn sprite_02 favor"></button>
                  </div>
                </div>
              </li>
            )
          })
        }
      </ul>
      <div className="footer">
        <NavLink
          to={`/discover/ranking`}
          onClick={() => backTop()}
        >
          查看全部
        </NavLink>
      </div>
    </TopRankingWrapper>
  )
})