import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import cx from 'classnames';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

import {
  selectRangeType,
  selectCurrentDatePointers,
  changeStart,
  changeEnd,
} from '../stores/viewState';
import { RANGE_TYPE } from '../constants';

import styles from './CustomRange.module.css';

const CustomRange = () => {
  const dispatch = useDispatch();

  const currentRangeType = useSelector(selectRangeType);
  const { start, end } = useSelector(selectCurrentDatePointers);

  if (currentRangeType !== RANGE_TYPE.CUSTOM) {
    return null;
  }

  return (
    <div
      className={cx(
        styles.component,
        bootstrap['input-group'],
        bootstrap['input-group-sm']
      )}
      data-testid="CustomRange"
    >
      <label htmlFor="dateStart" className={bootstrap['input-group-text']}>
        Start:
      </label>
      <input
        className={cx(bootstrap['form-control'], styles.inputDate)}
        type="date"
        id="dateStart"
        value={dayjs(start).format('YYYY-MM-DD')}
        onChange={({ target }) =>
          dispatch(changeStart(dayjs(target.value).toJSON()))
        }
      />
      <label htmlFor="dateEnd" className={bootstrap['input-group-text']}>
        End:
      </label>
      <input
        className={cx(bootstrap['form-control'], styles.inputDate)}
        type="date"
        id="dateEnd"
        value={dayjs(end).format('YYYY-MM-DD')}
        onChange={({ target }) =>
          dispatch(changeEnd(dayjs(target.value).toJSON()))
        }
      />
    </div>
  );
};

export default CustomRange;
