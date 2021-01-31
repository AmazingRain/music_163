import React, { memo, useEffect,  useState } from 'react';
import { NavLink } from "react-router-dom";

import { useDispatch, useSelector, shallowEqual } from 'react-redux';

import { headerLinks } from "@/api/local-data";

import { Input } from "antd";
import { SearchOutlined } from '@ant-design/icons';

import {
  HeaderWrapper,
  HeaderLeft,
  HeaderRight
} from "./style";

import { handleMatchKeywords } from '@/utils/match-keyword';
import { searchResultAction, changeIsShowResultAction } from '@/pages/song-detail/store';

export default memo(function Header() {

  const [inputValue = '', setInputValue] = useState('');

  const { isShowSearchResult, searchResutSongs } = useSelector(state => ({
    isShowSearchResult: state.songDetail.isShowSearchResult,
    searchResutSongs: state.songDetail.searchResutSongs
  }), shallowEqual);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(searchResultAction(inputValue));
  }, [inputValue, dispatch]);

  const showItem = (item, index) => {
    if (index < 3) {
      return (
        <NavLink to={item.link}>
          {item.title}
          <i className="sprite_01 icon"></i>
        </NavLink>
      )
    } else {
      return <a href={item.link} target="_blank" rel="noopener noreferrer">{item.title}</a>
    }
  }

  const search = (e) => {
    const { value } = e.target;
    setInputValue(value);
    dispatch(changeIsShowResultAction(true));
    if(value.length === 0) {
      dispatch(changeIsShowResultAction(false));
    }
  };

  return (
    <HeaderWrapper>
      <div className="wrap-v1 content">
        <HeaderLeft>
          <a className="logo sprite_01" href="#/">网易云音乐</a>
          <div className="select-list">
            {
              headerLinks.map((item, index) => {
                return (
                  <div className="select-item" key={item.title}>
                    {showItem(item, index)}
                  </div>
                )
              })
            }
          </div>
        </HeaderLeft>
        <HeaderRight isShow={isShowSearchResult}>
          <Input 
            className="search" 
            placeholder="音乐" 
            prefix={<SearchOutlined />}
            value={inputValue}
            onChange={(e) => search(e)} 
          />
          <div className="center">创作者中心</div>
          <div className="">登录</div>
          <div className="search-result">
            <ul className="song">
              {
                searchResutSongs.map((item, index) => {
                  return (
                    <li key={item.id}>
                      <span className="songName text-nowrap" >
                        <NavLink 
                          to={`/discover/song?id=${item.id}`} 
                          dangerouslySetInnerHTML={{__html: handleMatchKeywords(item.name, [inputValue])}}
                        > 
                        </NavLink>
                      </span>
                      <span className="text-nowrap singer">
                        {
                          item.artists && item.artists.map((artist, index) => {
                            return (
                              <span key={artist.id} dangerouslySetInnerHTML={{__html: handleMatchKeywords(artist.name, [inputValue])}}>
                              </span>
                            )
                          })
                        }
                      </span>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})
