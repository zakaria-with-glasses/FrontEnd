import { createGlobalStyle } from "styled-components";

export const Root = createGlobalStyle`
    html{
        --primary-bg-color: rgba(0, 0, 2, 0.895);
        --secondary-bg-color: rgba(0, 0, 0, 0.2);
        --third-bg-color: rgba(0, 0, 0, 35%);
        --primary-blue: #90BAF1;
        --primary-red: #f73636;
        --secondary-red: #ff4646;
        --primary-text-color: #e8e8e8;
        font-size: 14px;
    }
`;
