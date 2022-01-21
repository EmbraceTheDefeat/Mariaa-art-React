import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import OutlineBlueButton from '../components/outline-blue-button'
import NextButton from '../components/next-button'
import BlogCard from '../components/blog-card'
import FooterGray from '../components/footer-gray'
import projectStyles from '../style.module.css'
import styles from './profile.module.css'

const Profile = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Profile - Mariaa-art</title>
        <meta name="description" content="Web arts" />
        <meta property="og:title" content="Profile - Mariaa-art" />
        <meta property="og:description" content="Web arts" />
      </Helmet>
      <Header rootClassName="rootClassName"></Header>
      <div className={styles['Profile']}>
        <img
          alt="image"
          src="/playground_assets/bruce-mars-200h.jpg"
          className={styles['image']}
        />
        <div className={styles['container01']}>
          <div className={styles['container02']}>
            <h4 className={styles['text']}>ÐÐ°ÑÐ¸Ñ ÐÐµÐ¾ÑÐ³Ð¸ÐµÐ²Ð°</h4>
            <OutlineBlueButton button="follow"></OutlineBlueButton>
          </div>
          <div className={styles['container03']}>
            <span className={styles['text01']}>
              <span className={styles['text02']}>323</span>
              <span> Posts</span>
            </span>
            <span className={styles['text04']}>
              <span className={styles['text05']}>3.5k</span>
              <span> Followers</span>
            </span>
            <span>
              <span className={styles['text08']}>260</span>
              <span> Following</span>
            </span>
          </div>
          <span className={projectStyles['medium']}>
            Decisions: If you canât decide, the answer is no. If two equally
            difficult paths, choose the one more painful in the short term (pain
            avoidance is creating an illusion of equality). Choose the path that
            leaves you more equanimous.
          </span>
          <NextButton button="More about me"></NextButton>
        </div>
      </div>
      <div className={styles['container04']}>
        <div className={styles['BlogPosts']}>
          <h1
            className={` ${styles['text11']} ${projectStyles['headingTwo']} `}
          >
            <span></span>
            <span>Check my latest blogposts</span>
            <br></br>
          </h1>
          <div className={styles['container05']}>
            <BlogCard></BlogCard>
            <BlogCard
              image_src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-clock.jpg"
              description="Venture investment in U.S. startups rose sequentially in the second quarter of 2017, boosted by large, ate-stage financings"
            ></BlogCard>
            <BlogCard
              title="MateLabs machine learning"
              image_src="https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-design-system/assets/img/color-wall.jpg"
              description="If youâve ever wanted to train a machine learning model and integrate it with IFTTT, you now can with"
            ></BlogCard>
            <div className={styles['container06']}>
              <div className={styles['Card']}>
                <div className={styles['container07']}>
                  <h1 className={styles['text14']}>Flexible work hours</h1>
                  <span className={styles['text15']}>
                    <span className={styles['text16']}>
                      Rather than worrying about switching offices every couple
                      years, you stay in the same place.
                    </span>
                  </span>
                  <div className={styles['container08']}>
                    <button
                      className={` ${styles['button']} ${projectStyles['button']} `}
                    >
                      <span className={styles['text17']}>Read more</span>
                      <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                        <path d="M512 170l342 342-342 342-60-60 238-240h-520v-84h520l-238-240z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
                <div className={styles['container09']}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container10']}>
        <div className={styles['container11']}>
          <div className={styles['container12']}>
            <div className={styles['Info']}>
              <img
                alt="image"
                src="/playground_assets/wave-1.svg"
                className={styles['image1']}
              />
              <div className={styles['container13']}></div>
              <div className={styles['container14']}>
                <h3
                  className={` ${styles['text18']} ${projectStyles['headingTwo']} `}
                >
                  <span>Ð¡Ð²ÑÑÐ¶Ð¸ ÑÐµ Ñ Ð¼ÐµÐ½</span>
                </h3>
                <span className={styles['text20']}>
                  Ð©Ðµ ÑÐµ ÑÐ°Ð´Ð²Ð°Ð¼ Ð´Ð° ÑÑÐ´ÐµÐ¹ÑÑÐ²Ð°Ð¼ Ñ Ð¿Ð¾ÐºÑÐ¿ÐºÐ¸ÑÐµ Ð¸ Ð¸Ð´ÐµÐ¸ÑÐµ ÑÐ¸!
                </span>
                <div className={styles['container15']}>
                  <div className={styles['container16']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
                      <path d="M742 460l-94-94q-18-18-10-44 24-72 24-152 0-18 12-30t30-12h150q18 0 30 12t12 30q0 300-213 513t-513 213q-18 0-30-12t-12-30v-150q0-18 12-30t30-12q80 0 152-24 24-10 44 10l94 94q186-96 282-282z"></path>
                    </svg>
                    <a
                      href="tel:+40 772 100 200"
                      className={` ${styles['link']} ${projectStyles['small']} `}
                    >
                      (+359) 888888888
                    </a>
                  </div>
                  <div className={styles['container17']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon4']}>
                      <path d="M854 342v-86l-342 214-342-214v86l342 212zM854 170q34 0 59 26t25 60v512q0 34-25 60t-59 26h-684q-34 0-59-26t-25-60v-512q0-34 25-60t59-26h684z"></path>
                    </svg>
                    <a
                      href="mailto:hello@creative-tim.com?subject="
                      className={` ${styles['link1']} ${projectStyles['small']} `}
                    >
                      maria-art@gmail.com
                    </a>
                  </div>
                  <div className={styles['container18']}>
                    <svg viewBox="0 0 1024 1024" className={styles['icon6']}>
                      <path d="M512 490q44 0 75-31t31-75-31-75-75-31-75 31-31 75 31 75 75 31zM512 86q124 0 211 87t87 211q0 62-31 142t-75 150-87 131-73 97l-32 34q-12-14-32-37t-72-92-91-134-71-147-32-144q0-124 87-211t211-87z"></path>
                    </svg>
                    <span
                      className={` ${styles['text21']} ${projectStyles['small']} `}
                    >
                      Ð¡Ð¾ÑÐ¸Ñ, ÐÑÐ»Ð³Ð°ÑÐ¸Ñ
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterGray rootClassName="rootClassName1"></FooterGray>
    </div>
  )
}

export default Profile
