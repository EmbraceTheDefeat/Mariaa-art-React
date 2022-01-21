import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './list-item.module.css'

const ListItem = (props) => {
  return (
    <div className={styles['container']}>
      <h5 className={` ${styles['text']} ${projectStyles['headingThree']} `}>
        {props.title}
      </h5>
      <span>{props.description}</span>
    </div>
  )
}

ListItem.defaultProps = {
  description:
    'ÐÐ¾Ð¶ÐµÑ Ð´Ð° ÑÐµ Ð´Ð¾Ð²ÐµÑÐ¸Ñ Ð½Ð° Ð¼ÐµÐ½ Ð·Ð° Ð´Ð¾Ð±ÑÐ°ÑÐ° Ð¸ Ð½Ð°Ð²ÑÐµÐ¼ÐµÐ½Ð½Ð° ÐºÐ¾Ð¼ÑÐ½Ð¸ÐºÐ°ÑÐ¸Ñ Ð¾ÑÐ½Ð¾ÑÑÐ½Ð¾ Ð¿Ð¾ÑÑÑÐºÐ¸ Ð¾Ñ Ð½Ð°Ð»Ð¸ÑÐ½Ð¸ÑÐµ Ð¿ÑÐ¾Ð´ÑÐºÑÐ¸ Ð¸ Ð¿Ð¾ÑÑÑÐºÐ¸ÑÐµ ÑÐ¸ Ð·Ð° Ð¿Ð¾Ð´Ð°ÑÑÑÐ¸ Ð¿Ð¾ ÑÐ²Ð¾Ñ Ð¸Ð´ÐµÑ.',
  title: '1. ÐÑÐ¾ÑÐµÑÐ¸Ð¾Ð½Ð°Ð»Ð½Ð¾ Ð¾ÑÐ½Ð¾ÑÐµÐ½Ð¸Ðµ',
}

ListItem.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
}

export default ListItem
