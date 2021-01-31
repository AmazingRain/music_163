import styled from 'styled-components';

export const BackTopWrapper = styled.div`
  display: ${props => {
    return props.isShow ? 'block' : 'none';
  }};
  position: fixed;
  left: 50%;
  margin-left: 500px;
  bottom: 160px;
  width: 49px;
  height: 44px;
  background-position: -265px -47px;
`;