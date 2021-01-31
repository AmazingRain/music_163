import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { getTopListAction } from '../../store/actionCreators';

import ThemeHeaderRCM from '@/components/theme-header-rcm';
import TopRanking from '@/components/top-ranking';
import { RankingListWrapper } from './style';



export default memo(function RankingList() {
  const { soaringList, newSongList, originalList } = useSelector(state =>({
    soaringList: state.recommend.soaringList,
    newSongList: state.recommend.newSongList,
    originalList: state.recommend.originalList
  }), shallowEqual)

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopListAction(0))
    dispatch(getTopListAction(2))
    dispatch(getTopListAction(3))
  }, [dispatch])

  return (
    <RankingListWrapper>
      <ThemeHeaderRCM title="榜单"/>
      <div className="tops">
        <TopRanking info={soaringList}/>
        <TopRanking info={newSongList}/>
        <TopRanking info={originalList}/>
      </div>
    </RankingListWrapper>
  )
})
