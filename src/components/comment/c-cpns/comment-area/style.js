import styled from 'styled-components';

export const CommentAreaWrapper = styled.div`
  display: flex;
  margin-top: 20px;
  .img {
    width: 50px;
    height: 50px;
  }

  .content {
    display: block;
    margin-left: 8px;

    .content-main {
      box-sizing: border-box;
      width: 578px;
      height: 80px;
      textarea {
        width: 100%;
        height: 100%;
        padding: 5px 6px 6px;
        border: 1px solid #cdcdcd;
        border-radius: 2px;
        line-height: 19px;
        resize: none;
      }
    }

    .content-footer {
      display: flex;
      justify-content: space-between;
      padding-top: 5px;
      .icons {
        height: 18px;
        
        i {
          display: inline-block;
          width: 18px;
          height: 18px;
          cursor: pointer;
        }

        .smile {
          background-position: -40px -490px;
        }
        .at {
          margin-left: 10px;
          background-position: -60px -490px;
        }
      }

      .btn {
        width: 46px;
        height: 25px;
        color: #fff;
        text-align: center;
        line-height: 25px;
        background-position: -84px -64px;
      }
    }
  }

`;