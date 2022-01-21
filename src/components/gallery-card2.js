import React from 'react'

import PropTypes from 'prop-types'

import styles from './gallery-card2.module.css'

const GalleryCard2 = (props) => {
  return (
    <div
      className={` ${styles['GalleryCard']} ${styles[props.rootClassName]} `}
    >
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <h2 className={styles['text']}>{props.title}</h2>
          <span className={styles['text1']}>{props.description}</span>
          <span className={styles['text2']}>SHOW MORE</span>
        </div>
      </div>
      <img
        alt={props.image_alt}
        src={props.image_src}
        className={styles['image']}
      />
    </div>
  )
}

GalleryCard2.defaultProps = {
  rootClassName: '',
  image_src:
    'https://images.unsplash.com/photo-1484980972926-edee96e0960d?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDI0fHxmb29kfGVufDB8fHx8MTYyNjQ0OTIzNQ&ixlib=rb-1.2.1&h=1000',
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  image_alt: 'image',
  title: 'Project Title',
}

GalleryCard2.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  description: PropTypes.string,
  image_alt: PropTypes.string,
  title: PropTypes.string,
}

export default GalleryCard2
