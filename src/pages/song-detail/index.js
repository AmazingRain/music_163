import React, { memo, useEffect } from 'react'
import { useDispatch } from 'react-redux';

import {
  SongDetailWrapper,
  SongDetailLeft,
  SongDetailRight
} from './style';

import SongInfo from './c-cpns/song-left';
import ReleventPlayList from './c-cpns/song-right';
import Comment from '@/components/comment';

import {
  getSongDetailAction,
  getLyricAction,
  getSimilarPlaylistAction,
  getSimilarSongAction
} from './store/actionCreators';



export default memo(function SongDetail(props) {
  const [, id] = props.location.search.split('=');
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSongDetailAction(id));
    dispatch(getLyricAction(id));
    dispatch(getSimilarPlaylistAction(id));
    dispatch(getSimilarSongAction(id));
  }, [dispatch, id]);
  return (
    <SongDetailWrapper>
      <div className="content wrap-v2">
        <SongDetailLeft>
          <SongInfo />
          <div style={{ padding: '47px 30px 40px 39px' }}>
            { id && <Comment id={id}/> }
          </div>
        </SongDetailLeft>
        <SongDetailRight>
          <ReleventPlayList />
        </SongDetailRight>
      </div>
    </SongDetailWrapper>
  )
})
