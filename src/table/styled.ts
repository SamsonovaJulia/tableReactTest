import styled from "styled-components";

export const StyledTable = styled.table`
  border-collapse: collapse;

  width: 100%;

  th,
  td {
    border: 1px solid black;
    padding: 8px;
  }
  th {
    white-space: nowrap;
  }
  .arrow {
    border: solid black;
    border-width: 0 3px 3px 0;
    display: inline-block;
    padding: 3px;
    margin-left: 5px;
    text-align: center;
  }

  .asc {
    transform: rotate(-135deg);
    -webkit-transform: rotate(-135deg);
  }

  .desc {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  margin: 20px 10px;
  height: 20px;
  justify-content: space-between;
  align-items: center;
`;

export const HighlitedSearchedWord = styled.span`
  background-color: yellow;
`;

export const PaginationWrapper = styled.div`
  ul {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  a {
    color: black;
    float: left;
    padding: 5px;
    margin: 0px;
    text-decoration: none;
  }

  a:hover {
    font-weight: bold;
  }
  .rc-pagination-item-active {
    font-weight: bold;
    border: 1px solid black;
  }
  .rc-pagination-prev {
    width: 0px;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-right: 5px solid black;
    outline: 0;
    margin: 5px;
  }

  .rc-pagination-next {
    width: 0;
    height: 0;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
    border-left: 5px solid black;
    outline: 0;
    margin: 5px;
  }

  .rc-pagination-disabled {
    &:hover,
    &:focus {
      cursor: not-allowed;
      .rc-pagination-item-link {
        color: fade(#000, 25%);
        border-color: #d9d9d9;
        cursor: not-allowed;
      }
    }
  }

  .rc-pagination-jump-next,
  .rc-pagination-jump-prev {
    background: transparent;
    border: none !important;
    cursor: pointer;
    &:after {
      display: block;
      content: "•••";
    }
  }
`;
