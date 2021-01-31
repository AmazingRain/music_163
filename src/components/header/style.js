import styled from "styled-components";

export const HeaderWrapper = styled.div`
  height: 75px;
  background-color: #242424;
  font-size: 14px;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #C20C0C;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    text-indent: -9999px;
  }

  .select-list {
    display: flex;
    line-height: 70px;

    .select-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
      }

      :last-of-type a {
        position: relative;
        ::after {
          position: absolute;
          content: "";
          width: 28px;
          height: 19px;
          background-image: url(${require("@/assets/img/sprite_01.png")});
          background-position: -190px 0;
          top: 20px;
          right: -15px;
        }
      }

      &:hover a, .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        transform: translate(-50%, 0);
        background-position: -226px 0;
      }
    }
  }
`;

export const HeaderRight = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  color: #ccc;
  font-size: 12px;

  
  .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }

    
  }

  .center {
    width: 90px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    margin: 0 16px;
  }

  .search-result {
    display: ${props => {
      return props.isShow === false ? 'none' : 'block';
    }};
    overflow-y: scroll;
    position: absolute;
    top: 59px;
    left: 0;
    z-index: 2;
    box-sizing: border-box;
    width: 240px;
    height: 150px;
    border: 1px solid #bebebe;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 7px #555;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.9);

    &::-webkit-scrollbar {
      width: 0;
    }

    .song {
      color: #000;
      padding: 11px 10px;
      overflow: hidden;
      li {
        display: flex;
        justify-content: space-between;
        height: 20px;
        line-height: 17px;
        margin-bottom: 4px;
        border-bottom: 1px solid #e2e2e2;
        
        .singer {
          width: 80px;
        }
        .songName {
          width: 130px;
          
        }
        
      }
    }
  }

`;