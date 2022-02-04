import PropTypes from 'prop-types';
import s from './Statistics.module.css';
export default function Statistics({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={s.container}>
      <p className={s.text}>
        Good:<span className={s.values}>{good}</span>
      </p>
      <p className={s.text}>
        Neutral:<span className={s.values}>{neutral}</span>
      </p>
      <p className={s.text}>
        Bad:<span className={s.values}>{bad}</span>
      </p>
      <p className={s.text}>
        Total:<span className={s.values}>{total}</span>
      </p>
      <p className={s.text}>
        Positive feedback:
        <span className={s.percentage}>{positivePercentage}%</span>
      </p>
    </div>
  );
}
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
