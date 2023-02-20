import style from './switch.module.scss';
import { useState } from 'react';
import cn from 'classname';

export const Switch = () => {
  const [active, setActive] = useState( false );
  return <div className={style.switch}>
    <div className={cn(style.cont, {[style.active]: active})} onClick={() => {
      console.log(active);
      setActive(x => !x);
    }}>
    
    </div>
  </div>
}