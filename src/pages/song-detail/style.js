import styled from 'styled-components';

export const SongDetailWrapper = styled.div`
  .content {
    display: flex;
    
    background: url(${require('@/assets/img/wrap-bg.png')}) repeat-y;
  }
`;


export const SongDetailLeft = styled.div`
  width: 710px;
`;


export const SongDetailRight = styled.div`
  width: 270px;
  padding: 20px 40px 40px 30px;
`;