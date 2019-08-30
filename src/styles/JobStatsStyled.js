import styled from "styled-components";

const JobsStatsStyled = styled.div`
  margin-top: 20px;
  border-bottom: 1px solid ${props => props.theme.lightGray};
  padding-bottom: 20px;
  .job-stats {
    &__info {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &__title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 5px;
    }
    &__company {
      color: ${props => props.theme.darkGray};
      font-size: 14px;
    }
    &__wrapper {
      display: flex;
      float: right;
    }
    &__item {
      display: inline-block;
      text-align: center;
      padding: 0 15px;
      border-left: 1px solid ${props => props.theme.lightGray};
    }
    &__count {
      font-size: 40px;
      color: ${props => props.theme.main};
      font-weight: bold;
      margin-bottom: 5px;
    }
    &__name {
      font-size: 12px;
    }
  }
`;

export { JobsStatsStyled };
