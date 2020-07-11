import React from "react";
import { Global, css } from "@emotion/core";

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      html,
      body {
        height: 100%;
        position: relative;
        margin: 0;
        padding: 0;
        font-family: "Raleway", sans-serif;
        // background: #f6f6f6;
      }

      li {
        list-style: none;
      }
      .App {
        position: relative;
        display: block;
        min-height: 100vh; /* will cover the 100% of viewport */
        overflow: hidden;
      }
      .slick-prev {
        left: 3% !important;
        z-index: 1;
      }
      .slick-next {
        right: 3% !important;
        z-index: 1;
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
        background: #c3272b;
        color: #fff;
        display: block;
        text-align: left;
        margin-bottom: 15px;
      }
      .message-success {
        background: #26c281;
        color: #fff;
        display: block;
        text-align: left;
        margin-top: 15px;
      }
      .list__def {
        margin-top: 50px;
        margin-bottom: 50px;
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
        background: "lightGray";
      }
      .page__title {
        font-size: 26px;
        font-weight: normal;
        color: #333;
        margin-top: 30px;
        margin-bottom: 15px;
      }
      .page__subtitle {
        margin-bottom: 15px;
      }
      .slick-prev,
      .slick-next {
        font-size: 15px !important;
      }

      .slick-prev:before,
      .slick-next:before {
        content: "" !important;
      }
    `}
  />
);
