import PropTypes from 'prop-types';
import s from './FeedbackOptions.module.css';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <ul className={s.list}>
      {options.map((option, index) => (
        <li key={index} className={s.list__item}>
          <button className={s.button} onClick={onLeaveFeedback}>
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
