import React, { useState } from 'react';
import {colors} from '../../constants';
import PillsStyles from './Pills.module.css';

function Pills({pillData}) {
  const [selectedPill, setSelectedPill] = useState({text:'', id:null, color:''});

  return (
    <div className={PillsStyles['pills']}>
      {pillData.map((pill, index) => {
        const specialClass = !!selectedPill.id && selectedPill.id !== pill.id ? PillsStyles['not-selected'] : '';
        const color = pill.color || colors[pill.id%7];
        return (
          <div className={`${PillsStyles.pill} ${PillsStyles[color]} ${specialClass}`} onClick={() => setSelectedPill(pill)}>
            <span>{pill.text}</span>
          </div>
        )
      })}
    </div>
    );
}

export default Pills;
