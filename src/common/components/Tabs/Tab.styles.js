import styled from "@emotion/styled";

export const TabsStyled = styled.div`
  // display: grid;
  // grid-template-columns: 1fr 5fr;
  // height: 100%;
  .tab {
    &__list {
      display: inline-block;
      text-align: left;
      border-bottom: none;
      background: #fff;
      color: #333;
      font-weight: bold;
      margin-top: 24px;
      margin-bottom: 24px;
      padding-left: 24px;
    }

    &__title {
      position: relative;
      text-align: left;
      padding-right: 16px;
      padding-left: 16px;
      padding-bottom: 16px;
      font-size: 14px;
      vertical-align: middle;
      transition: 0.3s;
      display: inline-block;

      &:after {
        content: "";
        position: absolute;
        width: 0;
        background: #ffc544;
        height: 4px;
        bottom: 0;
        left: 0;
        right: 0;
        transition: 0.3s;
      }

      &.active {
        color: #ffc544;
      }

      &.active:after {
        width: 100%;
      }

      &:hover {
        cursor: pointer;
      }
    }

    &__content-wrapper {
      position: relative;
      height: 100%;
      margin-top: 24px;
      margin-bottom: 24px;
      // background: #fff;
      padding-left: 24px;
      padding-right: 24px;
    }

    &__icon {
      margin-right: 10px;
      display: inline-block;
      vertical-align: middle;
    }

    &__content {
      position: relative;
      width: 100%;
      height: 100%;
      display: none;
      text-align: left;
      background: ${props => props.theme.lightGray};


      &.visible {
        display: block;
      }

      // &__header {
      //   position: relative;
      //   font-weight: normal;
      //   padding-bottom: 10px;
      //   margin-bottom: 20px;
      //   font-size: 22px;

      //   &:after {
      //     content: "";
      //     position: absolute;
      //     bottom: 0;
      //     left: 0;
      //     height: 1px;
      //     width: 150px;
      //     background: ${props => props.theme.darkGray};
      //   }
      // }

      &__desc {
        font-size: 14px;
        margin-bottom: 15px;
      }

      &__list {
        margin-bottom: 20px;
        padding-left: 30px;
        list-style-type: square;

        &-item {
          margin-bottom: 16px;
          margin-top: 16px;
          font-size: 16px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

export const TabsHorizontal = styled(TabsStyled)`
  margin-top: 20px;

  .tab {
    &__list {
      border-right: none;
      border-bottom: 1px solid ${props => props.theme.lightGray};
      width: 100%;
    }

    &__title {
      position: relative;
      width: 25%;
      text-align: center;
      font-weight: 500;

      &:after {
        content: "";
        position: absolute;
        top: auto;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        height: 2px;
        width: 0;
        background: ${props => props.theme.main};
        transition: 0.3s;
      }

      &:hover:after {
        width: 100%;
      }

      &.active:after {
        width: 100%;
        height: 2px;
      }
    }

    &__content {
      background: transparent;

      &:after {
        border-right: transparent;
      }
    }
  }
`;
