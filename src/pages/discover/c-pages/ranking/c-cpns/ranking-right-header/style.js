import styled from 'styled-components';

export const RankingRightHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 40px;

  .image {
    padding: 3px;
    border: 1px solid #ccc;
    position: relative;
    img {
      width: 150px;
      height: 150px;
    }

    .image_cover {
      background-position: -230px -380px;
    }
  }

  .info {
    margin-left: 30px;
    .title {
      color: #333;
      font-size: 20px;
      font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
    }

    .time {
      display: flex;
      align-items: center;
      color: #666;
      margin: 8px 0 30px;

      .clock {
        display: inline-block;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
        position: relative;
        top: -2px;
        margin-right: 3px;
      }

      .update-f {
        color: #999;
      }
    }

    .operator {
      display: flex;
      align-items: center;

      .play {
        display: flex;
        align-items: center;
        margin-right: 5px;

        .play-icon {
          display: inline-block;
          height: 31px;
          line-height: 31px;
          background-position: right -428px;

          .play {
            color: #fff;
            display: flex;
            align-items: center;
            padding: 0 7px 0 8px;
            background-position: 0 -387px;

            i {
              display: inline-block;
              width: 20px;
              height: 18px;
              margin: -2px 2px 0;
              background-position: 0 -1622px;
            }
          }
        }

        .add-icon {
          display: inline-block;
          width: 31px;
          height: 31px;
          margin-left: -3px;
          padding-right: 0;
          background-position: 0 -1588px;
          text-indent: -9999px;
        }
      }

      .item {
        display: inline-block;
        height: 31px;
        margin-right: 6px;
        padding-right: 5px;
        background-position: right -1020px;
        
        .icon {
          display: inline-block;
          height: 31px;
          line-height: 31px;
          padding: 0 7px 0 28px;
          font-family: simsun;
        }

        .favor-icon {
          background-position: 0 -977px;
        }

        .share-icon {
          background-position: 0 -1225px;
        }

        .download-icon {
          background-position: 0 -2761px;
        }

        .comment-icon {
          background-position: 0 -1465px;
        }
      }
    }
  }
`;