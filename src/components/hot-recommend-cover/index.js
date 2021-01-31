import React, { memo } from 'react'

import { getCount, getImageSize } from '@/utils/data-format';

import { HotRecommendCoverWrapper } from './style'


export default memo(function SongCover(props) {
  const { info = {} } = props;
  return (
    <HotRecommendCoverWrapper>
      <div className="cover-top">
        <img src={getImageSize(info.picUrl || info.coverImgUrl, 140)} alt={info.name} title={info.name}/>
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
      <div className="cover-bottom">
        {info.name}
      </div>
    </HotRecommendCoverWrapper>
  )
})
