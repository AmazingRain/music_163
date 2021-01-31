import React, { memo, useEffect, useState } from 'react'

import { BackTopWrapper } from './style';
export default memo(function BackTop() {
  const [isShow, setIsShow] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', hadnleScroll);
  }, [])

  const hadnleScroll = (e) => {
    const windowHeight = document.documentElement.clientHeight || document.body.clientHeight;
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    scrollTop > windowHeight ? setIsShow(true) : setIsShow(false);
  };

  const backTop = () => {
    let timer = setInterval(() => {
      let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
      var speed = Math.floor(-scrollTop / 2);
      document.documentElement.scrollTop = scrollTop + speed;
      if (scrollTop === 0) {
        clearInterval(timer);
      } 
    }, 30);
  };
  return (
   <BackTopWrapper
    className="backtop_img" 
    isShow={isShow}
    onClick={() => backTop()}
  />
  )
})
