import styled, { css } from 'styled-components';

interface ContainerProps {
  size?: 'small' | 'large';
  location: string;
}

export const Container = styled.div<ContainerProps>`
  background: #5636d3;
  padding: 30px 0;

  header {
    width: 1120px;
    margin: 0 auto;
    padding: ${({ size }) => (size === 'small' ? '0 20px ' : '0 20px 150px')};
    display: flex;
    align-items: center;
    justify-content: space-between;

    nav {
      display: flex;

      ${props =>
        props.location === '/' &&
        css`
          div {
            & + div {
              hr {
                display: none;
              }
            }
          }
        `}

      ${props =>
        props.location === '/import' &&
        css`
          div:first-of-type {
            hr {
              display: none;
            }
          }
        `}

      div {
        & + div {
          margin-left: 32px;
        }

        a {
          color: #fff;
          text-decoration: none;
          font-size: 16px;
          transition: opacity 0.2s;

          &:hover {
            opacity: 0.6;
          }
        }

        hr {
          background-color: #ff872c;
          height: 2px;
          border: none;
          margin-top: 10px;
        }
      }
    }
  }
`;
