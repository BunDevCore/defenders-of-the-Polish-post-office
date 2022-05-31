import styled from "styled-components";

export const NavigationBar = styled.nav`
  background: ${props => props.theme.navbar_background};
  height: var(--navbar-height);
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-between;
  z-index: 1000;
  //padding: 1rem;
`;

export const NavigationIcon = styled.div`
  --img-margin: 0.25rem;
  align-self: center;
  cursor: pointer;
  position: relative;
  height: calc(var(--navbar-height) - calc(2 * var(--img-margin)));
  margin: var(--img-margin);
  aspect-ratio: 1/1;

  img {
    object-fit: contain;
  }
`;

export const NavigationRightSide = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
`;

export const NavigationItem = styled.a`
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  height: 100%;
  line-height: var(--navbar-height);
  cursor: pointer;
  tab-index: 0;
  color: ${props => props.theme.navbar_text};
  filter: ${props => props.theme.type === "light" ? "brightness(100%)" : "brightness(90%)"};

  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(0%)" : "brightness(100%)"};
  }

  :focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }
`;

export const NavigationIconBox = styled.div`
  --img-margin: 1.5rem;
  align-self: center;
  cursor: pointer;
  position: relative;
  height: calc(var(--navbar-height) - calc(2 * var(--img-margin)));
  margin: var(--img-margin) 0.25rem;
  aspect-ratio: 1/1;

  img {
    object-fit: contain;
  }
`;

export const NavigationTheme = styled.div`
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  height: 100%;
  line-height: var(--navbar-height);
  cursor: pointer;
  tab-index: 0;
  color: ${props => props.theme.navbar_theme_icon};
  filter: ${props => props.theme.type === "light" ? "brightness(80%)" : "brightness(100%)"};
  transition-duration: 400ms;

  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(100%)" : "brightness(80%)"};
  }

  :focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }
`;

export const NavigationLang = styled.button`
  padding-right: 0.75rem;
  padding-left: 0.75rem;
  height: 100%;
  line-height: var(--navbar-height);
  cursor: pointer;
  color: ${props => props.theme.navbar_text};
  filter: ${props => props.theme.type === "light" ? "brightness(100%)" : "brightness(100%)"};
  border: none;
  background-color: transparent;
  
  :is(:hover, :focus-visible) {
    filter: ${props => props.theme.type === "light" ? "brightness(0%)" : "brightness(80%)"};
  }

  :focus-visible {
    outline: royalblue solid 2px;
    outline-offset: -2px;
  }
`;