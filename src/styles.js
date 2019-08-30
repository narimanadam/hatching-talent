import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html, body {
        position: relative;
        margin: 0;
        padding: 0;
        height: 100%;
        font-family: 'Raleway', sans-serif;
        background: #f3f1ef;
    }
    .App {
        position: relative;
        display: block;
        min-height: 100vh; /* will cover the 100% of viewport */
        overflow: hidden;
        padding-bottom: 400px;
    }
    .slick-prev {
        left: 3% !important;
        z-index: 1;
      }
      .slick-next {
        right: 3% !important;
        z-index: 1;
      }
      .main-colored {
        padding: 50px 0;
        background: ${props =>
          props.theme.main}; /* fallback for old browsers */
        background: -webkit-linear-gradient(to right, #f7ac06, #ffc544); /* Chrome 10-25, Safari 5.1-6 */
        background: linear-gradient(to right, #f7ac06, #ffc544);
      }
      .white-link {
        color: #fff;
        text-decoration: none;
        }
        .black-link {
            color: #333;
            text-decoration: none;
        }
    .message {
        border-radius: 5px;
        padding: 10px 15px;
        max-width: 600px;
    }
    .message-error {
        background: #C3272B;
        color: #fff;
        display: block;
        text-align: left;
        margin-bottom: 15px;
    }
    .message-success {
        background: #26C281;
        color: #fff;
        display: block;
        text-align: left;
        margin-top: 15px;
    }
    .list__def {
        margin-top: 50px;
        margin-bottom: 50px
    }
    .list__def__item {
        margin-bottom: 30px;
        text-align: left;
        list-style: none;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .list__def__term {
        margin-bottom: 10px;
    }
    .bg-gray {
        background: ${props => props.theme.lightGray};
    }
    .page__title {
        font-size: 26px;
        font-weight: normal;
        color: ${props => props.theme.black};
        margin-top: 30px;
        margin-bottom: 15px;
    }
    .page__subtitle {
        margin-bottom: 15px;
    }
    .slick-prev, .slick-next {
    font-size: 15px !important;
    }

    .slick-prev:before, .slick-next:before  {
        content: '' !important;
    }
`;
