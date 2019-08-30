import styled from "styled-components";

const JobThumbnailStyled = styled.div`
  padding-bottom: 15px;
  padding-top: 15px;
  border-bottom: 1px solid ${props => props.theme.lightGray};
  text-align: left;
  &:last-child {
    border-bottom: none;
  }
  .grid-thumb {
    &__img-wrapper {
      display: inline-block;
      vertical-align: middle;
      padding-right: 15px;
    }
    &__img {
      width: 60px;
    }
    &__info {
      display: inline-block;
      vertical-align: middle;
      text-align: left;
    }
    &__subTitle {
      display: block;
      text-transform: uppercase;
      font-size: 10px;
    }
    &__title {
      display: block;
      font-weight: 500;
      font-size: 16px;
      margin-bottom: 5px;
    }
    &__desc {
      display: block;
      font-size: 12px;
    }
  }
`;

export { JobThumbnailStyled };
