import styled from "styled-components";

const Form = styled.form`
  width: 100%;
  .form {
    &__group {
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
      background: ${props => props.theme.white};
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
    list-style: none;
    .list__search-results__item {
      padding: 10px 15px;
      border-bottom: 1px solid ${props => props.theme.grey};
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
        background: ${props => props.theme.white};
        outline: none;
        :focus {
          box-shadow: none;
          outline: none;
        }
      }
    }
  }
`;
const DarkForm = styled(Form)`
  .form {
    &__group {
      position: relative;
    }
    &__label {
      display: block;
      &-text {
        text-transform: uppercase;
        margin-bottom: 5px;
        font-size: 12px;
        margin-left: 10px;
      }
    }
    &__field {
      background: ${props => props.theme.darkGray};
      color: ${props => props.theme.white};
      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: ${props => props.theme.white};
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: ${props => props.theme.white};
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        color: ${props => props.theme.white};
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: ${props => props.theme.white};
      }
    }
    &__textarea {
      background: ${props => props.theme.darkGray};
      color: ${props => props.theme.white};
      font-size: 16px;
      padding-left: 15px;
      margin-bottom: 15px;
      padding-top: 15px;
      height: 200px;
      width: 100%;
      resize: none;
      &:focus {
        outline: none;
      }
      ::-webkit-input-placeholder {
        /* Chrome/Opera/Safari */
        color: ${props => props.theme.white};
      }
      ::-moz-placeholder {
        /* Firefox 19+ */
        color: ${props => props.theme.white};
      }
      :-ms-input-placeholder {
        /* IE 10+ */
        color: ${props => props.theme.white};
      }
      :-moz-placeholder {
        /* Firefox 18- */
        color: ${props => props.theme.white};
      }
    }
  }
  .input-range {
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .input-range__slider {
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: #ffc546;
    border: 1px solid #ffc546;
    border-radius: 100%;
    cursor: pointer;
    display: block;
    height: 1rem;
    margin-left: -0.5rem;
    margin-top: -0.65rem;
    outline: none;
    position: absolute;
    top: 50%;
    -webkit-transition: box-shadow 0.3s ease-out,
      -webkit-transform 0.3s ease-out;
    transition: box-shadow 0.3s ease-out, -webkit-transform 0.3s ease-out;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out;
    transition: transform 0.3s ease-out, box-shadow 0.3s ease-out,
      -webkit-transform 0.3s ease-out;
    width: 1rem;
    &:active {
      -webkit-transform: scale(1.3);
      transform: scale(1.3);
    }
  }
  .input-range__slider:focus {
    box-shadow: 0 0 0 5px rgba(63, 81, 181, 0.2);
  }
  .input-range--disabled .input-range__slider {
    background: #cccccc;
    border: 1px solid #cccccc;
    box-shadow: none;
    -webkit-transform: none;
    transform: none;
  }

  .input-range__slider-container {
    -webkit-transition: left 0.3s ease-out;
    transition: left 0.3s ease-out;
  }

  .input-range__label {
    color: #aaaaaa;
    font-family: "Helvetica Neue", san-serif;
    font-size: 0.8rem;
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    white-space: nowrap;
  }

  .input-range__label--min,
  .input-range__label--max {
    bottom: -1.4rem;
    position: absolute;
  }

  .input-range__label--min {
    left: 0;
  }

  .input-range__label--max {
    right: 0;
  }

  .input-range__label--value {
    position: absolute;
    top: -1.8rem;
  }

  .input-range__label-container {
    left: -50%;
    position: relative;
  }
  .input-range__label--max .input-range__label-container {
    left: 50%;
  }

  .input-range__track {
    background: #686768;
    border-radius: 0.3rem;
    cursor: pointer;
    display: block;
    height: 0.3rem;
    position: relative;
    -webkit-transition: left 0.3s ease-out, width 0.3s ease-out;
    transition: left 0.3s ease-out, width 0.3s ease-out;
  }
  .input-range--disabled .input-range__track {
    background: #686768;
  }

  .input-range__track--background {
    left: 0;
    margin-top: -0.15rem;
    position: absolute;
    right: 0;
    top: 50%;
  }

  .input-range__track--active {
    background: #ffc546;
  }

  .input-range {
    height: 1rem;
    position: relative;
    width: 100%;
  }

  /*# sourceMappingURL=react-input-range.css.map*/
`;

const InputFieldStyle = styled.input`
  border: none;
  height: 40px;
  line-height: 40px;
  font-size: 16px;
  padding-left: 15px;
  width: 100%;
  background: ${props => props.theme.white};
  outline: none;
  :focus {
    box-shadow: none;
    outline: none;
  }
`;

export { Form, DarkForm, InputFieldStyle };
