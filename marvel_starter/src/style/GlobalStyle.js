import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
    font-family: "Roboto Condensed", sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

ul,
li,
dl {
    list-style-type: none;
    margin: 0;
    padding: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
    &:hover {
        text-decoration: none;
        color: inherit;
    }
}

p {
    margin: 0;
    padding: 0;
}

img {
    display: block;
    max-width: 100%;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0; 
}

.app {
    width: min(95%, 1100px);
    margin: 0 auto;
    padding: 50px 0 50px 0;
    position: relative;

 
    .bg-decoration {
        display:block;
        box-shadow:none;
        max-width:100%;
        img {
 
        
        }
    }
}

main {
    margin-top: 50px;
    position: relative;
}

.pulse {
    animation: pulse 1.5s ease-in-out .5s infinite
}

@keyframes pulse {
    0% {
        opacity: 1
    }
    50% {
        opacity: .4
    }
    100% {
        opacity: 1
    }
}
// BUTTONS
.button {
    min-width: 101px;
    color: #fff;
    text-align: center;
    text-transform: uppercase;
    font-size: 14px;
    transition: 0.3s transform;
    border: none;
    background-color: transparent;
    cursor: pointer;

    @media (max-width: 1144px) {
      font-size: 12px;
    }
    &__long {
        display: block;
        width: 170px;
        margin: 45px auto 0 auto;
    }
    .inner {
        position: relative;
        background-color: #9F0013;
        line-height: 18px;
        padding: 0 18px;
        transition: none;
        &::before {
            border-color: #9F0013 transparent;
            border-style: solid;
            border-width: 0 0 10px 10px;
            content: "";
            display: block;
            position: absolute;
            left: 0;
            top: -10px;
            transition: none;
        }
        &::after {
            border-color: #9F0013 transparent;
            border-style: solid;
            border-width: 0 0 10px 10px;
            content: "";
            display: block;
            position: absolute;
            right: 0;
            bottom: -10px;
            transform: rotate(180deg);
            transition: none;
        }
    }
    &__main,
    &__secondary {
        &:hover {
            color: #fff;
        }
    }
    &__secondary {
        .inner {
            background-color: #5C5C5C;
            &::before {
                border-color: #5C5C5C transparent;
                transition: none;
            }
            &::after {
                border-color: #5C5C5C transparent;
                transition: none;
            }
        }
    }
    &::before {
        content: "";
        display: block;
        height: 10px;
        margin-left: 10px;
        transition: none;
    }
    &::after {
        content: "";
        display: block;
        height: 10px;
        margin-right: 10px;
        transition: none;
    }
    &.button__main::before,
    &.button__main::after {
        background-color: #9F0013;
    }
    &.button__secondary::before,
    &.button__secondary::after {
        background-color: #5C5C5C;
    }
    &:hover {
        transform: translateY(-5px);
    }
    &:disabled {
        filter: grayscale(.5);
    }
}
`;

export default GlobalStyle;
