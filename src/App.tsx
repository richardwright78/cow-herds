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

  const generateField = () => {
    const newField: Field = [];

    for (let i = 0; i < 5; i++) {
      let row: number[] = [];

      for (let i = 0; i < 5; i++) {
        row.push(Math.random() < 0.5 ? 0 : 1);
      }
      newField.push(row);
    }

    setData({ field: newField, cows: 0, herds: 0 });
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
  width: 200px;
  height: 2rem;
  font-weight: 600;
  background: #cecccc;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  box-shadow: 1px 1px rgba(0, 0, 0, 12%);
  &:hover {
    background: #7b7b7b;
    color: #fff;
  }
  transition: all 0.25s ease-in-out;
`;

export { App };
