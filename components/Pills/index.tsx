import React, { useEffect, useState } from 'react';
import {colors} from '../../constants';
import PillsStyles from './Pills.module.css';
import { IPill, TPillData } from '../types';

const defaultSelectedPillValue = {text:'', id:null, color:''};

function Pills({ pillData, onSelect, noUnselect }: TPillData) {
  const [selectedPill, setSelectedPill] = useState<IPill>(defaultSelectedPillValue);
  
  const onPillSelect = (pill: IPill) : void => {
    if (pill.id === selectedPill.id && noUnselect) setSelectedPill(defaultSelectedPillValue);
    else setSelectedPill(pill);
    onSelect(pill);
  };

  // Effects
  useEffect(() => {
    if (noUnselect && pillData?.length) {
      onPillSelect(pillData[0]);
    }
  }, [])

  return (
    <div className={PillsStyles['pills']}>
      {pillData.map((pill, index) => {
        const specialClass = !!selectedPill.id && selectedPill.id !== pill.id ? PillsStyles['not-selected'] : '';
        const color = pill.color || colors[pill.id%7];
        return (
          <div className={`${PillsStyles.pill} ${PillsStyles[color]} ${specialClass}`} onClick={() => onPillSelect(pill)}>
            <span>{pill.text}</span>
          </div>
        )
      })}
    </div>
    );
}

export default Pills;
