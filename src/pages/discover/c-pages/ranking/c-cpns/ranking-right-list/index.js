import React, { memo } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { RankingListWrapper } from './style';
import { getImageSize, formatMinuteSecond } from '@/utils/data-format';
import { getSongDetailAction, changePlayListAction } from '@/pages/player/store';

export default memo(function RankingRightList() {
  const { rankingList, playList } = useSelector(state => ({
    rankingList: state.ranking.playList,
    playList: state.player.playList
  }), shallowEqual);

  const { tracks = [] } = rankingList;

  const dispatch = useDispatch();
  const playMusic = (id) => {
    dispatch(getSongDetailAction(id));
  };

  const addPlayList = (item) => {
    playList.push(item);
    dispatch(changePlayListAction(playList));
  }
  return (
    <RankingListWrapper>
      <div className="play-title">
        <div className="left">
          <h3 className="title">歌曲列表</h3>
          <div className="count">{rankingList.trackCount}首歌</div>
        </div>
        <div className="right">
          <span>播放：</span>
          <span className="count">{rankingList.playCount}</span>
          <span>次</span>
        </div>
      </div>
      <div className="play-list">
        <table>
          <thead>
            <tr className="header">
              <th className="ranking"></th>
              <th className="title">标题</th>
              <th className="duration">时长</th>
              <th className="singer">歌手</th>
            </tr>
          </thead>
          <tbody>
            {
              tracks.map((item, index) => {
                return (
                  <tr className="" key={item.id}>
                    <td>
                      <div className="rank-num">
                        <span className="num">{index + 1}</span>
                      </div>
                    </td>
                    <td>
                      <div className="song-name">
                        {
                          index < 3 ?
                            (<img src={getImageSize(item.al.picUrl, 50)} alt="" />) : null
                        }
                        <span
                          className="play sprite_table"
                          onClick={() => playMusic(item.id)}
                        ></span>
                        <span className="name">
                          <NavLink to={`/discover/song?id=${item.id}`}>
                            {item.name}
                          </NavLink>
                        </span>
                        <span
                          className="add sprite_icon2"
                          onClick={() => addPlayList(item)}
                        ></span>
                      </div>
                    </td>
                    <td>{formatMinuteSecond(item.dt)}</td>
                    <td>{item.ar[0].name}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
      </div>
    </RankingListWrapper>
  )
})
