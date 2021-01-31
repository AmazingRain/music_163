import styled from 'styled-components';

export const PlayListWrapper = styled.div`
  position: relative;
  overflow-y: scroll;
  width: 553px;
  padding: 2px;

  &::-webkit-scrollbar {
    display: none;
  }
  
  .play-item {
    padding: 0 8px 0 25px;
    display: flex;
    position: relative;
    justify-content: space-between;
    align-items: center;
    height: 28px;
    line-height: 28px;
    color: #ccc;

    :hover {
      cursor: pointer;
      color: #fff;
      background-color: #000;
    }

    

    
    &.active {
      color: #fff;
      background-color: #000;

      ::before {
        content: "";
        position: absolute;
        left: 8px;
        width: 10px;
        height: 13px;
        background: url(${require("@/assets/img/playlist_sprite.png")}) -182px 0;
      }
    }

    .right {
      display: flex;
      align-items: center;

      .singer {
        width: 80px;
      }

      .duration {
        width: 45px;
      }

      .remove {
        display: inline-block;
        visibility: hidden;
        width: 13px;
        height: 13px;
        background-position: -51px 0;
      }
    }

    :hover .remove {
      visibility: visible;
    }
  }
`;