import styled from 'styled-components';

export const RankingListWrapper = styled.div`
  padding: 0 40px;

  .play-title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 5px;
    border-bottom: 2px solid #c20c0c;

    .left {
      display: flex;
      align-items: flex-end;

      .title {
        font-size: 20px;
        font-family: "Microsoft Yahei", Arial, Helvetica, sans-serif;
      }

      .count {
        margin-bottom: 5px;
        margin-left: 20px;
      }
    }

    .right {
      .count {
        color: #c20c0c;
      }
    }
  }


  .play-list {
    table {
      width: 100%;
      border: 1px solid #d9d9d9;

      thead {
        th {
          height: 34px;
          line-height: 34px;
          background-image: url(${require("@/assets/img/sprite_table.png")});
          color: #666;
          border: 1px solid #ddd;
          border-width: 0 0 1px 1px;
          padding-left: 10px;
        }

        .ranking {
          width: 78px;
          border-left: none;
        }

        .duration {
          width: 91px;
        }

        .singer {
          width: 173px;
        }
      }

      tbody {
        td {
          padding: 6px 10px;
        }

        tr:nth-child(2n) {
          background-color: #fff;
        }

        tr:nth-child(2n+1) {
          background-color: #f7f7f7;
        }

       

        .rank-num {
          display: flex;
          justify-content:center;

          .num {
            width: 25px;
            height: 18px;
            text-align: center;
            color: #999;
          }

        }

        .song-name {
          display: flex;
          position: relative;
          align-items: center;
          img {
            width: 50px;
            height: 50px;
            margin-right: 10px;
          }

          .play {
            width: 17px;
            height: 17px;
            background-position: 0 -103px;
          }

          .add {
            position: absolute;
            right: 0;
            width: 17px;
            height: 17px;
            margin-left: 10px;
            background-position: 0 -700px;
          }

          .name {
            margin-left: 10px;
          }
        }
      }
    }
  }
`;