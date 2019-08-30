import styled from "styled-components";

const TabsStyled = styled.div`
  margin-bottom: 30px;
  .tab {
    &__list {
      display: inline-block;
      text-align: left;
      border-right: 1px solid ${props => props.theme.lightGray};
      border-bottom: none;
    }
    &__title {
      position: relative;
      text-align: left;
      height: 50px;
      padding-right: 20px;
      font-size: 14px;
      display: ${props => (props.horizontal ? "inline-block" : "block")};
      vertical-align: middle;
      color: ${props => props.theme.darkGray};
      transition: 0.3s;
      &:after {
        content: "";
        position: absolute;
        height: 0;
        background: ${props => props.theme.main};
        width: 3px;
        top: 0;
        right: 0;
        transition: 0.3s;
      }
      &.active {
        color: ${props => props.theme.main};
      }
      &.active:after {
        height: 100%;
      }
      &:hover {
        cursor: pointer;
      }
    }
    &__content-wrapper {
      position: relative;
      height: 100%;
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
      padding: 30px 20px;
      &:after {
        content: "";
        position: absolute;
        top: 15px;
        left: -15px;
        width: 0;
        height: 0;
        border-top: 15px solid transparent;
        border-bottom: 15px solid transparent;

        border-right: 15px solid ${props => props.theme.lightGray};
      }
      &.visible {
        display: block;
      }
      &__header {
        position: relative;
        font-weight: normal;
        padding-bottom: 10px;
        margin-bottom: 20px;
        font-size: 22px;
        &:after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          height: 1px;
          width: 150px;
          background: ${props => props.theme.darkGray};
        }
      }
      &__desc {
        font-size: 14px;
        margin-bottom: 15px;
      }
      &__list {
        margin-bottom: 20px;
        padding-left: 30px;
        list-style-type: square;
        &-item {
          margin-bottom: 10px;
          font-size: 14px;
          &:last-child {
            margin-bottom: 0;
          }
        }
      }
    }
  }
`;

const TabsHorizontal = styled(TabsStyled)`
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

export { TabsStyled, TabsHorizontal };
