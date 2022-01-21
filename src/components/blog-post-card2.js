import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card2.module.css'

const BlogPostCard2 = (props) => {
  return (
    <div
      className={` ${styles['BlogPostCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt={props.image_alt}
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className={styles['image']}
      />
      <div className={styles['container']}>
        <div className={styles['container1']}>
          <span className={styles['text']}>{props.label}</span>
        </div>
        <h1 className={styles['text1']}>{props.title}</h1>
        <span className={styles['text2']}>{props.description}</span>
      </div>
    </div>
  )
}

BlogPostCard2.defaultProps = {
  image_src:
    '/playground_assets/269414885_923254761915264_2615884820544630476_n-1500w.jpg',
  title: 'Lorem ipsum dolor sit amet',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in dignissim tortor. Lorem ipsum dolor sit amet, consectetur adipiscing ...',
  label: 'Ð¦ÐµÐ½Ð°: 40 ÐÐ',
  image_alt: 'image',
  rootClassName: '',
}

BlogPostCard2.propTypes = {
  image_src: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  label: PropTypes.string,
  image_alt: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default BlogPostCard2
