import React, { memo, useEffect } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux';

import { getRecommendAction } from '../../store/actionCreators';
import { HotRecommendWrapper } from './style';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import HotRecommendCover from '@/components/hot-recommend-cover';


export default memo(function HotRecommend() {

  const { hotRecommends } = useSelector(state => ({
    hotRecommends: state.recommend.hotRecommends
  }), shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRecommendAction(8))
  }, [dispatch])

  return (
    <div>
      <HotRecommendWrapper>
        <ThemeHeaderRCM title="热门推荐" keywords={['华语', '流行', '摇滚', '民谣', '电子']} />
        <div className="recommend-list">
          {
            hotRecommends.map((item, index) => {
              return (
                <HotRecommendCover key={item.id} info={item} />
              )
            })
          }
        </div>
      </HotRecommendWrapper>
    </div>
  )
})
