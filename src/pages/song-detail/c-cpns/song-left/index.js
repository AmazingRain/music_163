import React, { memo, useState } from 'react'


import { useSelector, shallowEqual } from 'react-redux';
import { getImageSize } from '@/utils/data-format';
import {
  SongInfoWrapper,
  SongInfoLeft,
  SongInfoRight
} from './style';
import SongOperationBar from '@/components/song-operation-bar';



export default memo(function SongInfo(props) {

  const [isSpread, setIsSpread] = useState(false);
  const { songInfo, lyricList, totalComment } = useSelector(state => ({
    songInfo: state.songDetail.songInfo,
    lyricList: state.songDetail.lyricList,
    playList: state.player.playList,
    totalComment: state.comment.total
  }), shallowEqual);

  const id = songInfo && songInfo.id;
  const songName = songInfo && songInfo.name;
  const picUrl = songInfo.al && songInfo.al.picUrl;
  const albumName = songInfo.al && songInfo.al.name;
  const singerName = songInfo.ar && songInfo.ar[0].name;

  const totalLyricCount = isSpread ? lyricList.length : 13;

  
  return (
    <SongInfoWrapper>
      <SongInfoLeft>
        <div className="image">
          <img src={getImageSize(picUrl, 130)} alt="" />
          <span className="cover image_cover"></span>
        </div>
        <div className="link">
          <i className="sprite_icon2"></i>
          <a target="_blank" href={`https://music.163.com/#/outchain/2/${id}`} rel="noopener noreferrer">生成外联播放器</a>
        </div>
      </SongInfoLeft>
      <SongInfoRight>
        <div className="header">
          <i className="sprite_icon2"></i>
          <h3 className="title">{songName}</h3>
        </div>
        <div className="singer">
          <span className="label">歌手：</span>
          <a href="/#" className="name">{singerName}</a>
        </div>
        <div className="album">
          <span className="label">所属专辑：</span>
          <a href="/#" className="name">{albumName}</a>
        </div>
        <SongOperationBar
          favorTitle="收藏"
          shareTitle="分享"
          downloadTitle="下载"
          commentTitle={`(${totalComment})`}
          id ={songInfo.id}
        />
        <div className="lyric">
          <div className="lyric-info">
            {
              lyricList.slice(0, totalLyricCount).map((item, index) => {
                return <p key={item.time + item.content} className="text">{item.content}</p>
              })
            }
          </div>
          <button className="lyric-control"
            onClick={e => setIsSpread(!isSpread)}>
            {isSpread ? "收起" : "展开"}
            <i className="sprite_icon2"></i>
          </button>
        </div>
      </SongInfoRight>
    </SongInfoWrapper>
  )
})
