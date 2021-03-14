import React from 'react';
import './TodoFilter.css';
import { connect } from 'react-redux';
import { changeFilter, getFilter } from '../../redux/todos';
// import { getFilter } from '../../redux/todos/todos-selectors';

const TodoFilter = ({ value, onChange }) => (
  <div className="TodoFilter">
    <p className="TodoFilter__label">Фильтр по содержимому</p>
    <input
      type="text"
      className="TodoFilter__input"
      value={value}
      onChange={onChange}
    />
  </div>
);

const mapStateToProps = state => ({
  value: getFilter(state),
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoFilter);
