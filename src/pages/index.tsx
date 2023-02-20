import style from './index.module.scss';
import { Switchboard } from '@/app/component/Switchboard';

const DefaultPage = () => {
  return <div className={style.container}>
    <Switchboard />
  </div>;
}

export default DefaultPage;