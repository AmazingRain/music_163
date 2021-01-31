import styled from 'styled-components';

export const CommentListWrapper = styled.div`
  margin-top: 10px;
  .list-title {
    height: 25px;
    margin-top: 20px;
    padding-bottom: 5px;
    color: rgb(51, 51, 51);
    border-bottom: 1px solid rgb(207, 207, 207);
  }
  .list-item {
    display: flex;
    padding: 10px 0;
    border-top: 1px dotted rgb(204, 204, 204);
    .logo {
      width: 50px;
      height: 50px;
    }

    .list-item-content {
      width: 583px;
      margin-left: 8px;
      font-size: 12px;
      line-height: 20px;

        .user {
          color: #0c73c2;
        }


        .content-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 7px;
          .time {
            font-size: 12px;
            color: rgb(153, 153, 153);
          }

          .more {
            .like {
              display: inline-block;
              width: 15px;
              height: 14px;
              margin-right: 5px;
              vertical-align: -2px;
              background-position: -150px 0px;
            }
          }
        }
    }
  }
`;