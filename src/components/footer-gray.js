import React from 'react'

import PropTypes from 'prop-types'

import projectStyles from '../style.module.css'
import styles from './footer-gray.module.css'

const FooterGray = (props) => {
  return (
    <footer className={` ${styles['Footer']} ${styles[props.rootClassName]} `}>
      <div className={styles['Divider']}></div>
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <div className={styles['container2']}>
            <span className={styles['text']}>MARIA-ART.ORG</span>
          </div>
        </div>
        <span className={` ${styles['text1']} ${projectStyles['small']} `}>
          <span>All rights reserved. Copyright Â© 2021 MARIA-ART</span>
        </span>
      </div>
    </footer>
  )
}

FooterGray.defaultProps = {
  rootClassName: '',
}

FooterGray.propTypes = {
  rootClassName: PropTypes.string,
}

export default FooterGray
