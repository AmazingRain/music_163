import React, { memo, useEffect, useRef, useState, useCallback } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { Slider } from 'antd';
import { PlaybarWrapper, Control, PlayInfo, Operator } from './style';
import { getImageSize, formatDate, getPlayMusicUrl } from '@/utils/data-format';

import { getSongDetailAction, changeSequenceAction, changeCurrentSongBySequenceAction, changeCurreentLyricIndexAction, changeSoundSizeAction, changeIsShowPlayPannelAction } from '../store/actionCreators';

export default memo(function PlayBar() {

  const [currentTime, setCurrentTime] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isChanging, setIsChanging] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSoundSizeZero, setisSoundSizeZero] = useState(false);
  const [isShowSoundSize, setIsShowSoundSize] = useState('hidden');

  const { currentSong, sequence, playList, lyricList, currentLyricIndex, soundSize } = useSelector(state => ({
    currentSong: state.player.currentSong,
    sequence: state.player.sequence,
    playList: state.player.playList,
    lyricList: state.player.lyricList,
    currentLyricIndex: state.player.currentLyricIndex,
    soundSize: state.player.soundSize,
    isShowPlayPanel: state.player.isShowPlayPanel
  }), shallowEqual)


  const picUrl = (playList.length && currentSong.al && currentSong.al.picUrl) || '';
  const singerName = (currentSong.ar && currentSong.ar[0].name) || '未知歌手';
  const duration = currentSong.dt || 0;
  const showDuration = formatDate(duration, 'mm:ss');
  const showCurrentTime = formatDate(currentTime, 'mm:ss');
  const dispatch = useDispatch();
  const audioRef = useRef();

  useEffect(() => {
    dispatch(getSongDetailAction(1808492017));
  }, [dispatch])


  useEffect(() => {
    audioRef.current.src = getPlayMusicUrl(currentSong.id);
    // 播放按钮
    audioRef.current.play().then(res => {
      setIsPlaying(true);
    }).catch(err => {
      setIsPlaying(false);
    });
  }, [currentSong])

  const playMusic = useCallback(() => {
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  }, [isPlaying]);



  const timeUpdate = (e) => {
    let currentTime = e.target.currentTime;
    if (!isChanging) {
      setCurrentTime(currentTime * 1000);
      setProgress(currentTime * 1000 / duration * 100);
    }


    let i = 0;
    for (; i < lyricList.length; i++) {
      let lyricItem = lyricList[i];
      if (currentTime * 1000 < lyricItem.time) {
        break;
      }
    }
    // console.log(currentTime * 1000);
    // console.log(lyricList[currentLyricIndex - 1]);
    if (currentLyricIndex !== i - 1) {
      // console.log(lyricList[i - 1]);

      dispatch(changeCurreentLyricIndexAction(i - 1));
    }
  };


  const sliderChangeSong = useCallback(value => {
    setIsChanging(true);
    const currentTime = value / 100 * duration;
    setCurrentTime(currentTime);
    setProgress(value);
  }, [duration]);

  const sliderAfterChangeSong = useCallback(value => {
    // 最后得到的结果要为毫秒
    const currentTime = value / 100 * duration / 1000;
    // 提前设置currentTime的时间，解决先退回当前播放的位置，再到刚改变的位置
    setCurrentTime(currentTime * 1000);
    audioRef.current.currentTime = currentTime;
    setIsChanging(false);
    // console.log(currentTime);
    if (!isPlaying) {
      playMusic();
    }
  }, [duration, isPlaying, playMusic]);

  const changeSequence = () => {
    let currentSequence = sequence + 1;
    if (currentSequence > 2) {
      currentSequence = 0;
    }
    dispatch(changeSequenceAction(currentSequence));
  };

  const changeMusic = (type) => {
    dispatch(changeCurrentSongBySequenceAction(type))
  };

  const hadnleMusicEnded = () => {
    if (sequence === 2) {   // 单曲循环
      audioRef.current.currentTime = 0;
      audioRef.current.play();
    } else {
      dispatch(changeCurrentSongBySequenceAction(1));
    }
  };

  // 音量变化
  const sliderChangeSound = (value) => {
    value === 0 ? setisSoundSizeZero(true) : setisSoundSizeZero(false);
    dispatch(changeSoundSizeAction(value));
    audioRef.current.volume = value / 100;
  };

  const isShowChangeSoundSize = () => {
    isShowSoundSize === 'hidden' ? setIsShowSoundSize('block') : setIsShowSoundSize('hidden');
  };

  // 打开playPanel
  const openPlayPanel = () => {
    dispatch(changeIsShowPlayPannelAction(true));
  };

  return (
    <PlaybarWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <Control isPlaying={isPlaying}>
          <button className="sprite_playbar prev" onClick={e => changeMusic(-1)} />
          <button className="sprite_playbar play" onClick={playMusic} />
          <button className="sprite_playbar next" onClick={e => changeMusic(1)} />
        </Control>
        <PlayInfo>
          <div className="image">
            <NavLink to={`/discover/song?id=${currentSong.id}`}>
              <img src={getImageSize(picUrl, 35)} alt="" />
            </NavLink>
          </div>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{singerName}</span>
            </div>
            <div className="progress">
              <Slider
                value={progress}
                tipFormatter={null}
                onChange={sliderChangeSong}
                onAfterChange={sliderAfterChangeSong}
              />
              <div className="time">
                <span className="now-time">{showCurrentTime}</span>
                <span className="divider">/</span>
                <span className="total-time">{showDuration}</span>
              </div>
            </div>
          </div>
        </PlayInfo>
        <Operator sequence={sequence} isSoundSizeZero={isSoundSizeZero} isShowSoundSize={isShowSoundSize}>
          <div className="left">
            <button className="sprite_playbar btn favor"></button>
            <button className="sprite_playbar btn share"></button>
          </div>
          <div className="right sprite_playbar">
            <div className="sprite_playbar sound-size">
              <Slider 
                vertical 
                tipFormatter={null} 
                value={soundSize}
                onChange={sliderChangeSound}
              />
            </div>
            <button className="sprite_playbar btn volume" onClick={isShowChangeSoundSize}></button>
            <button className="sprite_playbar btn loop" onClick={e => changeSequence()}></button>
            <button className="sprite_playbar btn playlist" onClick={openPlayPanel}>{playList.length}</button>
          </div>
        </Operator>
      </div>
      {/* onVolumeChange={} */}
      <audio ref={audioRef} onTimeUpdate={timeUpdate} onEnded={hadnleMusicEnded}  />
    </PlaybarWrapper>
  )
})
