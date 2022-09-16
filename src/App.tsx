import React, { useState } from "react";
import styled from "styled-components";

import { CowGrid } from "./CowGrid";

type Field = number[][];

export interface FieldData {
  field: Field;
  cows: number;
  herds: number;
}

const initialData = {
  field: [
    [0, 1, 1, 1, 1],
    [0, 0, 1, 0, 1],
    [0, 0, 0, 0, 0],
    [0, 1, 0, 0, 0],
    [0, 1, 0, 0, 0],
  ],
  cows: 8,
  herds: 2,
};

const App: React.FC = () => {
  const [data, setData] = useState<FieldData>(initialData);

  const calculateHerds = (field: Field) => {
    // loop through field
    // loop through the row
    // for each cell
    // if cow
    // if adjacent cow (use row index and cell index as x, y coordinates)
    // start to build herd details
    // repeat process for adjacecnt cow updating herd details
    // repeat as lon as there are adjacent cows (maybe neeed recursive function here!)
  };

  const generateField = () => {
    const newField: Field = [];

    for (let i = 0; i < 5; i++) {
      const row: number[] = [];

      for (let i = 0; i < 5; i++) {
        row.push(Math.random() < 0.5 ? 0 : 1);
      }
      newField.push(row);
    }

    const cows = newField.flat().reduce((acc, cow) => (cow ? acc + 1 : acc), 0);

    setData({ field: newField, cows, herds: 0 });
  };

  return (
    <PageWrapper>
      <CowGrid {...data} />
      <GenerateFieldButton onClick={generateField}>
        New Field
      </GenerateFieldButton>
    </PageWrapper>
  );
};

const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;

const GenerateFieldButton = styled.button`
  color: #fff;
  width: 200px;
  height: 2rem;
  font-weight: 600;
  background: #1890ff;
  border: 1px solid #1890ff;
  border-radius: 2px;
  cursor: pointer;
  box-shadow: 0 2px #0000000b;
  &:hover {
    background: #40a9ff;
  }
  transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
`;

export { App };
