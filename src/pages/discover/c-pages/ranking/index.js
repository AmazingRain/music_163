import React, { memo, useEffect } from 'react'

import { useDispatch } from "react-redux";
import { getTops } from './store/actionCreators';


import {
  RankingWrapper,
} from './style';

import RankingLeft from './c-cpns/ranking-left';
import RankingRightHeader from './c-cpns/ranking-right-header';
import RankingRightList from './c-cpns/ranking-right-list';

export default memo(function Ranking() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTops());
  }, [dispatch])

  return (
    <RankingWrapper className="wrap-v2">
      <div className="ranking-left">
        <RankingLeft/>
      </div>
      <div className="ranking-right">
        <RankingRightHeader/>
        <RankingRightList/>
      </div>
    </RankingWrapper>
  )
})
