import React from 'react'
import CalloutStyles from './Callout.module.css';

type TCalloutProps = {
  children: any,
  emoji?: string,
  color: string,
}

export default function Callout({ emoji, children, color }: TCalloutProps) {
  return (
    <div className={CalloutStyles['callout']} style={{ borderColor: `${color}` }}>
      {!!emoji &&<p className={CalloutStyles.emoji}>{emoji}</p>}
      <span className={CalloutStyles.bg} style={{ background: `${color}` }} />
      <div className={CalloutStyles.content}>{children}</div>
    </div>
  )
}
