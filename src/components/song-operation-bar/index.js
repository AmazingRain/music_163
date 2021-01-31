import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { 
  getSongDetailAction, 
} from '@/pages/player/store';
import { OperationBarWrapper } from './style';

export default memo(function SongOperationBar(props) {
  const { favorTitle, shareTitle, downloadTitle, commentTitle, id } = props;


  const dispatch = useDispatch();

  const playMusic = (id) => {
    if(!id) return;
    dispatch(getSongDetailAction(id));
  };

  return (
    <OperationBarWrapper>
      <span 
        className="play"
        onClick={() => playMusic(id)}
      >
        <div className="play-icon sprite_button">
          <span className="play sprite_button">
            <i className="sprite_button"></i>
            <span>播放</span>
          </span>
        </div>
      </span>
      <button className="item sprite_button">
        <i className="icon favor-icon sprite_button">{favorTitle}</i>
      </button>
      <button className="item sprite_button">
        <i className="icon share-icon sprite_button">{shareTitle}</i>
      </button>
      <button className="item sprite_button">
        <i className="icon download-icon sprite_button">{downloadTitle}</i>
      </button>
      <button className="item sprite_button">
        <i className="icon comment-icon sprite_button">{commentTitle}</i>
      </button>
    </OperationBarWrapper>
  )
})
