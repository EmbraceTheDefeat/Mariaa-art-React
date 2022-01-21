import React from 'react'

import PropTypes from 'prop-types'

import styles from './blog-post-card21.module.css'

const BlogPostCard21 = (props) => {
  return (
    <div
      className={` ${styles['BlogPostCard']} ${styles[props.rootClassName]} `}
    >
      <img
        alt="image"
        src={props.image_src}
        image_src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDd8fHBvcnRyYWl0fGVufDB8fHx8MTYyNjM3ODk3Mg&amp;ixlib=rb-1.2.1&amp;h=1000"
        className={styles['image']}
      />
    </div>
  )
}

BlogPostCard21.defaultProps = {
  rootClassName: '',
  image_src:
    '/playground_assets/269414885_923254761915264_2615884820544630476_n-1500w.jpg',
  image_alt: 'image',
}

BlogPostCard21.propTypes = {
  rootClassName: PropTypes.string,
  image_src: PropTypes.string,
  image_alt: PropTypes.string,
}

export default BlogPostCard21
