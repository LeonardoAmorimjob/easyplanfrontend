import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  padding: 0 30px;
`;
export const Conteudo = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    display: flex;
    align-items: center;
    img {
      width:94px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    a {
      font-weight: bold;
      color: #22c90c;
    }
  }
  aside {
    display: flex;
    align-items: center;
  }
`;
export const Perfil = styled.div`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #eee;

  div {
    text-align: right;
    margin-right: 10px;
    strong {
      display: flex;
      margin-right: 10px;
    }
      a {
        display: block;
        margin-top: 2px;
        font-size:16px;
        color: #22c90c;
      }

  }
  img {
    width: 32px;
    height: 32px;
    border-radius: 50%;
  }
`;
