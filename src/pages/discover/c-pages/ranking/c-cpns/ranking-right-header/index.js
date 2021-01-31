import React, { memo } from 'react'

import { useSelector, shallowEqual } from 'react-redux';

import { RankingRightHeaderWrapper } from './style';
import { formatMonthDay } from '@/utils/data-format';
import SongOperationBar from '@/components/song-operation-bar';


export default memo(function RankingRightHeader() {

  const { playList } = useSelector(state => ({
    playList: state.ranking.playList
  }), shallowEqual);

  const id = playList.tracks && playList.tracks[0].id
  return (
    <RankingRightHeaderWrapper>
      <div className="image">
        <img src={playList.coverImgUrl} alt="" />
        <span className="image_cover">封面</span>
      </div>
      <div className="info">
        <div className="title">{playList.name}</div>
        <div className="time">
          <i className="clock sprite_icon2"></i>
          <div>最近更新：{formatMonthDay(playList.updateTime)}</div>
          <div className="update-f">（{"每日更新:TODO"}）</div>
        </div>
        <SongOperationBar
          favorTitle={`${playList.subscribedCount}`}
          shareTitle={`${playList.shareCount}`}
          downloadTitle="下载"
          commentTitle={`${playList.commentCount}`} 
          id={id}
        />
      </div>
    </RankingRightHeaderWrapper>
  )
})
