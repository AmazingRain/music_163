import React, { memo, useEffect } from 'react';
import classNames from "classnames";
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { RankingLeftWrapper } from './style';

import { getRanking, changeCurrentIndex } from '../../store/actionCreators';
import { getImageSize } from '@/utils/data-format';

export default memo(function RankingLeft() {

  const { topList, currentIndex } = useSelector(state => ({
    topList: state.ranking.topList,
    currentIndex: state.ranking.currentIndex
  }), shallowEqual);
  
  const dispatch = useDispatch();
  useEffect(() => {
    const id = (topList[currentIndex] && topList[currentIndex].id);
    if (!id) return;
    dispatch(getRanking(id))
  }, [currentIndex, dispatch, topList]);

  const hanldeItemClick = (index) => {
    dispatch(changeCurrentIndex(index));
    const id = topList[currentIndex].id;
    dispatch(getRanking(id));
    document.documentElement.scrollTop = '0';
  }
  
  
  return (
    <RankingLeftWrapper>
      {
        topList.map((item, index) => {
          let header;
          if (index === 0 || index === 4) {
            header = <div className="header">{index === 0 ? "云音乐特色榜" : "全球媒体榜"}</div>
          }
          return (
            <div key={item.id}>
              {header}
              <div className={classNames("item", { "active": index === currentIndex })}
                onClick={e => hanldeItemClick(index)}>
                <img src={getImageSize(item.coverImgUrl, 40)} alt="" />
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="update">{item.updateFrequency}</div>
                </div>
              </div>
            </div>
          )
        })
      }
    </RankingLeftWrapper>
  )
})
