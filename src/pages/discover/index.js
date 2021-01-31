import React, { memo } from 'react'
import { NavLink } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import { dicoverMenu } from '@/api/local-data';

import { DiscoverWrapper, TopMenu } from './style';


export default memo(function Discover(props) {
  // 得到 discover 的子路由
  const { route } = props;
  // console.log(route);
  return (
    <DiscoverWrapper>
      {/* 子菜单 */}
      <div className="top">
        <TopMenu className="wrap-v1">
          {
            dicoverMenu.map((item, index) => {
              return (
                <div className="item" key={item.title}>
                  <NavLink to={item.link}>{item.title}</NavLink>
                </div>
              )
            })
          }
        </TopMenu>
      </div>
      {/* 渲染对应的内容 */}
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  )
})
