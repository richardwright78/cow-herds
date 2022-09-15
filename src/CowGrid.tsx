import React from "react";
import styled from "styled-components";

import { FieldData } from "./App";

const CowGrid: React.FC<FieldData> = ({ field, cows, herds }: FieldData) => {
  return (
    <>
      <CowGridWrapper>
        {field.flat().map((cow) => (
          <GridCell>{cow ? '"Mooh!"' : ""}</GridCell>
        ))}
      </CowGridWrapper>
      <div>
        <Stat>
          <StatLabel>Cows: </StatLabel>
          {cows}
        </Stat>
        <Stat>
          <StatLabel> Herds: </StatLabel>
          {herds}
        </Stat>
      </div>
    </>
  );
};

const CowGridWrapper = styled.div`
  width: 500px;
  height: 500px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  column-gap: 5px;
  row-gap: 5px;
  grid-template-rows: repeat(5, 1fr);
`;

const GridCell = styled.div`
  background: #6fd684;
  box-shadow: 1px 1px rgba(0, 0, 0, 12%);
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Stat = styled.span`
  margin-right: 1rem;
`;

const StatLabel = styled.span`
  font-weight: 600;
`;

export { CowGrid };
