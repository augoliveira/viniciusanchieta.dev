'use client';
import styled from 'styled-components';

export const HeaderContainer = styled.header`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 10;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);
  padding-left: 0;
  border-left: unset;
  background: unset;
  border-bottom: 2px solid var(--border-second-color);

  a {
    color: var(--text-primary);
  }

  @media (min-width: 995px) {
    display: flex;
    justify-content: space-around;
    padding: 1rem 0;
    align-items: center;
    box-shadow: var(--background-second) 0px 10px 30px 1px;
  }

  @media (min-width: 2000px) {
    display: flex;
    justify-content: space-evenly;
  }

  .mobile-content {
    position: relative;
    z-index: 10;
    margin-right: -15px;
    padding: 15px;
    border: 0;
    background-color: transparent;
    color: inherit;
    text-transform: none;
    transition-timing-function: linear;
    transition-duration: 0.15s;
    transition-property: opacity, filter;
    span {
      color: var(--first-color);
    }

    > img {
      width: 230px;
      @media (max-width: 500px) {
        width: 120px;
      }
    }

    @media (max-width: 994px) {
      margin: 0.8rem 1rem 1rem;
    }
  }
`;

export const MobileIcon = styled.div`
  display: none;
  @media (max-width: 994px) {
    display: block;
    position: absolute;
    top: 1.045rem;
    right: 1rem;
    cursor: pointer;
  }
`;

interface Click {
  readonly click: boolean;
}

export const NavMenu = styled.div<Click>`
  @media (max-width: 994px) {
    height: 100vh;
    width: 100vw;
    background: var(--background);
    z-index: 10;
    display: ${({ click }) => (click ? 'block' : 'none')};
    opacity: 0.95;
  }
  ul {
    display: flex;
    gap: 1.2rem;
    justify-content: center;
    align-items: center;

    a {
      gap: 4px;
      font-size: 1.2rem;
      font-weight: 600;
      color: var(--text-primary);
      height: 1rem;
      cursor: pointer;

      span {
        line-height: 1.08;
        white-space: nowrap;
        position: relative;

        &:before {
          content: '';
          height: 2px;
          width: auto;
          background-color: var(--first-color);
          border-radius: 0px 0px 4px 4px;
          position: absolute;
          bottom: -6px;
          left: 0px;
          right: 0px;
          opacity: 0;
          transform-origin: left center;
          transform: scaleX(0);
          transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
          visibility: hidden;
        }
      }
      &:hover {
        color: var(--first-color);
        span:before {
          transform: scaleX(1);
          visibility: visible;
          opacity: 1 !important;
          width: 100%;
        }
      }
    }

    @media (max-width: 994px) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding-top: 5rem;
      gap: 2rem;
    }
  }
`;
