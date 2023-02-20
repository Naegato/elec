import React, { useCallback, useEffect, useState } from 'react';
import { Settings } from '@/app/component/Settings';
import style from './switchboard.module.scss';
import { Switch } from '@/app/component/Switch';
import { Row } from '@/app/component/Row';

const createArray = (int: number) => {
  const array = [];
  
  for (let i = 0 ; i > int; i++) {
    array.push(i);
  }
  
  return array;
}
export const Switchboard = () => {
  const [row, setRow] = useState(1);
  const [column, setColumn] = useState(1);
  
  return <div className={style.container}>
    <div className={style.row}>
      {(() => {
        const array = [];
        for (let i = 0; i < row ; i++) {
          array.push(<Row number={column} />);
        }
  
        return array;
      })()}
    </div>
    <Settings setters={{
      lignes: {
        set: x => setRow(x),
        value: row,
      },
      colonnes: {
        set: x => setColumn(x),
        value: column,
      }
    }} />
  </div>
}