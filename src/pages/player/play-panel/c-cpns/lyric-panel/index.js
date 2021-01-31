import React, { memo, useRef, useEffect } from 'react'
import { useSelector, shallowEqual } from 'react-redux';
import classNames from 'classnames';

import { PannelWrapper } from './style';



export default memo(function LyricPanel() {
  const { lyricList, currentLyricIndex } = useSelector(state => ({
    lyricList: state.player.lyricList,
    currentLyricIndex: state.player.currentLyricIndex
  }), shallowEqual);

  const panelRef = useRef();

  useEffect(() => {
    if (currentLyricIndex > 0 && currentLyricIndex < 3) return;
    const ele = panelRef.current;
    const to = (currentLyricIndex - 3) * 32;
    const distance = to - ele.scrollTop;
    ele.scrollTop = ele.scrollTop + distance;
   

  }, [currentLyricIndex]);

 
  return (
    <PannelWrapper ref={panelRef}>
      <ul className="lrc-content">
        {
          lyricList.map((item, index) => {
            return (
              <li key={item.content + item.time}
                className={classNames("lrc-item", { "active": index === currentLyricIndex })}>
                {item.content}
              </li>
            )
          })
        }
      </ul>
    </PannelWrapper>
  )
})
