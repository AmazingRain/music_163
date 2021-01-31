import styled from 'styled-components';

export const ReleventPlayListWrapper = styled.div`  
  display: ${props => props.isShow ? 'block' : 'none'};
  margin-bottom: 40px;
  .play-list {
    .play-list-item {
      display: flex;
      align-items: center;
      margin-top: 15px;
      width: 200px;

      .image {
        width: 50px;
        height: 50px;
      }

      .info {
        margin-left: 10px;
        .name {
          font-size: 14px;
          color: #000;
        }

        .auchor {
          color: #999;

          .nickname {
            color: #666;
            margin-left: 5px;
          }
        }
      }
    }
  }
`;


export const ReleventSongsWrapper = styled.div`
  .songs {
    .song-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 12px;

      .info {
        .title {
          a {
            color: #666;
          }
        }

        .artist {
          a {
            color: #999;
          }
        }
      }

      .operate {
        .item {
          display: inline-block;
          width: 10px;
          height: 11px;
        }

        .play {
          background-position: -69px -455px;
          margin-right: 10px;
        }

        .add {
          background-position: -87px -454px;
        }
      }
    }
  }
`;