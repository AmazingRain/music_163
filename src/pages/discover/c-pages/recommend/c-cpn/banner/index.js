import React, { memo, useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'antd';

import { getBannerAction } from '../../store/actionCreators';

import {
  BannerWrapper,
  BannerLeft,
  BannerRight,
  BannerControl
} from './style';
export default memo(function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const { banners } = useSelector(state => ({
    banners: state.recommend.banners
  }), shallowEqual);
  const dispatch = useDispatch();
 

  const bannerRef = useRef();
  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch]);
  // 使用useCallback，有缓存
  const bannerChange = (from, to) => {
    setTimeout(() => {
      setCurrentIndex(to);
    }, 0)
  };

  // 背景图片模糊，先判断是否存在，如果存在再取图片
  const bgImageUrl = banners[currentIndex] && banners[currentIndex].imageUrl;
  // 如果图片url中含有?imageView，则只加上模糊程度即可
  const bgImage = bgImageUrl && bgImageUrl.indexOf('?imageView') === -1 ? (bgImageUrl + '?imageView&blur=40x20') : (bgImageUrl + '&blur=40x20');
  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange}>
            {
              banners.map((item, index) => {
                // 对跳转的链接进行判断，如果url不为空，则跳到各区播放页面，否则跳转到指定的路径
                 // url不为空，则在新标签页打开
                // let hreftUrl, targetMethod;
                // if (!item.url) {
                //   hreftUrl = `https://music.163.com/#/song?id=${item.targetId}`;
                //   targetMethod = '_self'
                // } else {
                //   hreftUrl = item.url;
                //   targetMethod = '_blank';
                // }
                return (
                  // <a className="banner-item" key={item.imageUrl} href={hreftUrl} target={targetMethod}>
                  //   <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  // </a>
                  <NavLink to={`/discover/song?id=${item.targetId}`} className="banner-item" key={item.imageUrl}>
                    <img className="image" src={item.imageUrl} alt={item.typeTitle} />
                  </NavLink>
                )
              })
            }
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <BannerControl className="control">
            <button className="btn left" onClick={e => bannerRef.current.prev()}></button>
            <button className="btn right" onClick={e => bannerRef.current.next()}></button>
          </BannerControl>
        </BannerRight>
      </div>
    </BannerWrapper>
  )
})
