import React, { memo } from 'react'

import { getCount, getSizeImage } from '@/utils/data-format';

import { SongCoverWrapper } from './style'


export default memo(function SongCover(props) {
  const { info = {} } = props;
  return (
    <SongCoverWrapper>
      <div className="cover-top">
        <img src={getSizeImage(info.picUrl || info.coverImgUrl, 140)} alt={info.name} title={info.name}/>
        <div className="cover sprite_covor">
          <div className="info sprite_covor">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">
        {info.name}
      </div>
      <div className="cover-source">
        by {info.copywriter || info.creator.nickname}
      </div>
    </SongCoverWrapper>
  )
})
