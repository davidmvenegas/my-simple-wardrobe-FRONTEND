import { css } from "styled-components";

export const mobile = (i) => {
    return css`
        @media only screen and (max-width: 480px) {
            ${i}
        }
    `
}