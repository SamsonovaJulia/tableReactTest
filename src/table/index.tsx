import * as React from "react";
import { StyledTable, FlexContainer, PaginationWrapper } from "./styled";
import { Search } from "./search";
import HighlightSearch from "./HighlightSearch";

import Pagination from "rc-pagination";
import { sortData, directionsList } from "./table.utils";
export type IValue = any;

export interface IColumn {
  key: string;
  title: string;
  render?: (value: IValue) => IValue;
}

interface IProps {
  columns: IColumn[];
  data: { [key: string]: IValue }[];
}

export const Table = React.memo((props: IProps) => {
  const [activeColumn, setActiveColumn] = React.useState<string>("");
  const [sortDirection, setSortDirection] = React.useState<string>("");
  const [activePage, setActivePage] = React.useState<number>(1);
  const [itemsCountPerPage, setItemsCountPerPage] = React.useState<number>(5);
  const [searchValue, setSearchValue] = React.useState<string>("");
  const searchedData = searchValue
    ? props.data.filter((dataRow) =>
        Object.values(dataRow).join().includes(searchValue)
      )
    : props.data;
  const sortedData = sortData(searchedData, activeColumn, sortDirection);

  React.useEffect(() => {
    setActivePage(1);
  }, [searchValue]);

  const changeDirection = (isReset: boolean) => {
    if (isReset) {
      return setSortDirection(directionsList[0]);
    }
    const currentIndex = directionsList.indexOf(sortDirection);
    const directionIndexToPick = (currentIndex + 1) % directionsList.length;
    setSortDirection(directionsList[directionIndexToPick]);
  };

  const showElemFrom = (activePage - 1) * itemsCountPerPage;

  return (
    <div>
      <FlexContainer>
        <Search onSearch={setSearchValue} />
        <PaginationWrapper>
          <Pagination
            showSizeChanger
            pageSize={itemsCountPerPage}
            onChange={setActivePage}
            total={sortedData.length}
          />
        </PaginationWrapper>
        <input
          type="number"
          className="pageNumber"
          min="5"
          max={sortedData.length}
          step="5"
          defaultValue="5"
          onChange={(event) => setItemsCountPerPage(+event.target.value)}
        />
      </FlexContainer>
      <StyledTable>
        <thead>
          <tr>
            {props.columns.map((column) => (
              <th
                key={column.title}
                onClick={() => {
                  setActiveColumn((currentActiveColumn: string) => {
                    changeDirection(currentActiveColumn !== column.key);
                    return column.key;
                  });
                }}
              >
                {column.title}
                {sortDirection && column.key === activeColumn && (
                  <i className={`arrow ${sortDirection}`}></i>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData
            .slice(showElemFrom, showElemFrom + itemsCountPerPage)
            .map((item) => (
              <tr key={JSON.stringify(item)}>
                {props.columns.map((column) => (
                  <td key={column.key}>
                    <HighlightSearch search={searchValue}>
                      {column.render
                        ? column.render(item[column.key])
                        : item[column.key]}
                    </HighlightSearch>
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </StyledTable>
    </div>
  );
});
