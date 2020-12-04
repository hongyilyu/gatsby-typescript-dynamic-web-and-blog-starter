import { css } from 'styled-components';

export const themeVariables = css`
  .light-mode {
    --mui-background-default: #fafafa;
    --mui-background-paper: #fff;
    --mui-text-secondary: #424242;
    --colour-background: #f7fafc;
    --colour-on-background: #1a202c;
    --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 0.05);
    --box-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
  }
  .dark-mode {
    --mui-background-default: #303030;
    --mui-background-paper: #424242;
    --mui-text-secondary: #7986cb;
    --colour-background: #1a202c;
    --colour-on-background: #f7fafc;
    --box-shadow-lg: 0 10px 15px -3px rgba(0, 0, 0, 0.1),
      0 4px 6px -2px rgba(0, 0, 0, 5);
    --box-shadow-xl: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 4);
  }
`;
