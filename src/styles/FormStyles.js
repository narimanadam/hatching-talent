import styled from "@emotion/styled";

const Form = styled.form`
  padding: ${props => (props.hasBgColor ? "24px" : "")};
  width: 100%;
  display: flex;
  flex-direction: ${props => (props.inline ? "row" : "column")};
  // justify-content: flex-end;
  align-items: flex-end;
  background-color: ${props => (props.hasBgColor ? "#fff" : "")};
  border-radius: 16px;
  border: ${props => (props.hasBgColor ? "1px solid #efefef" : "")};
  box-shadow: ${props => (props.hasBgColor ? "2px 3px 3px #eee" : "")};
  .form {
    &__group {
      width: 100%;
      margin-bottom: 15px;
      &.inline {
        display: inline-block;
      }
      &.radio {
        position: relative;
      }
    }
    &__label {
      display: block;
      text-transform: uppercase;
      margin-bottom: 5px;
      font-size: 12px;
      font-weight: bold;
    }
    &__field {
      border: none;
      height: 40px;
      line-height: 40px;
      font-size: 16px;
      padding-left: 15px;
      width: 100%;
      background: #fff;
      outline: none;
      :focus {
        box-shadow: none;
        outline: none;
      }
    }
  }

  .list__search-results {
    position: relative;
    top: -15px;
    background: #fff;
    border-top: 1px solid #efefef;
    .list__search-results__item {
      padding: 10px 15px;
      border-bottom: 1px solid #6c6e72;
      &:last-child {
        border-bottom: none;
      }
    }
  }

  .react-datepicker {
    &-wrapper {
      width: 100%;
    }
    &__input-container {
      input {
        border: none;
        height: 40px;
        line-height: 40px;
        font-size: 16px;
        padding-left: 15px;
        width: 100%;
        background: #fff;
        outline: none;
        :focus {
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
`;

export { Form };
