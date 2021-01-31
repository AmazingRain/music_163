import React, { memo, useEffect, useRef } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { getNewAlbumAction } from '../../store/actionCreators';

import { Carousel } from 'antd';
import ThemeHeaderRCM from '@/components/theme-header-rcm';
import AlbumCover from '@/components/album-cover';
import { AlbumWrapper } from './style';




export default memo(function NewAlbum() {
  const { newAlbums } = useSelector(state => ({
    newAlbums: state.recommend['newAlbums']
  }), shallowEqual)

  const dispatch = useDispatch();
  const carouselRef = useRef();
  useEffect(() => {
    dispatch(getNewAlbumAction(10))
  }, [dispatch])

  return (
    <AlbumWrapper>
      <ThemeHeaderRCM title="新碟上架" />
      <div className="content">
        <button className="arrow arrow-left sprite_02" onClick={e => carouselRef.current.prev()}></button>
        <div className="album">
          <Carousel ref={carouselRef} dots={false}>
            {
              [0, 1].map(item => {
                return (
                  <div key={item} className="page">
                    {
                      newAlbums.slice(item * 5, (item + 1) * 5).map(item2 => {
                        return (
                          <AlbumCover key={item2.id} info={item2}/>
                        )
                      })
                    }
                  </div>
                )
              })
            }
          </Carousel>
        </div>
        <button className="arrow arrow-right sprite_02" onClick={e => carouselRef.current.next()}></button>
      </div>
    </AlbumWrapper>
  )
})
