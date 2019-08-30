import styled from "styled-components";

export const AccordionStyled = styled.div`
  .accordion {
    &__item {
      .accordion__header {
        background: #fcd509;
        &:after {
          border-top-color: #fcd509;
        }
      }
      &:nth-child(even) {
        .accordion__header {
          &.disabled {
            background: ${props => props.theme.darkGray};
            &:after {
              border-top-color: ${props => props.theme.darkGray};
            }
          }
        }
      }
      &:nth-child(odd) {
        .accordion__header {
          &.disabled {
            background: #585858;
            &:after {
              border-top-color: #585858;
            }
          }
        }
      }
    }
    &__header {
      position: relative;
      color: ${props => props.theme.white};
      padding: 30px 0;
      text-align: left;
      &:after {
        content: "";
        position: absolute;
        top: 100%;
        left: 50%;
        z-index: 9;
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 20px solid transparent;
      }
    }
    &__title {
      font-weight: normal;
      font-size: 26px;
    }
    &__subtitle {
      font-weight: bold;
      text-transform: uppercase;
      margin-bottom: 5px;
      font-size: 12px;
    }
    &__body {
      display: none;
      text-align: left;
      padding: 50px 0;
      transition: height 0.3s;
    }
    &__header.opened ~ .accordion__body {
      display: block;
    }
  }
`;
