import style from './settings.module.scss';

export const Settings = ({ setters }) => {
  return <div className={style.settings}>
    {
      Object.entries(setters).map(([key, {set, value}]: [string, any], index) => {
        // @ts-ignore
        console.log(key,set,value,index)
        return <div className={style.range} key={index}>
          <label htmlFor={`setter${index}`}>{key}</label>
          <input type="range" value={value} max={5} min={1} step={1} onChange={(e) => {
            set(e.target.value);
          }}/>
          <p className={value}>{value}</p>
        </div>
      })
    }
  </div>
}