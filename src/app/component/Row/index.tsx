import { Switch } from '@/app/component/Switch';
import style from './row.module.scss';
export const Row = ({number = 0}) => {
  return <div className={style.row}>
    {(() => {
      const array = [];
      for (let i = 0; i < number ; i++) {
        array.push(<Switch />);
      }
      
      return array;
    })()}
  </div>
}