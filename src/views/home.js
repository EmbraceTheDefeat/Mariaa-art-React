import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import PrimaryPinkButton from '../components/primary-pink-button'
import OutlineGrayButton from '../components/outline-gray-button'
import FeatureCard from '../components/feature-card'
import OutlineBlackButton from '../components/outline-black-button'
import ListItem from '../components/list-item'
import FooterGray from '../components/footer-gray'
import projectStyles from '../style.module.css'
import styles from './home.module.css'

const Home = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Mariaa-art</title>
        <meta name="description" content="Web arts" />
        <meta property="og:title" content="Mariaa-art" />
        <meta property="og:description" content="Web arts" />
      </Helmet>
      <Header></Header>
      <div className={styles['Hero']}>
        <div className={styles['container01']}>
          <div className={styles['Card']}>
            <h1
              className={` ${styles['text']} ${projectStyles['headingOne']} `}
            >
              ÐÐ°ÐºÐ²Ð¾ Ð¿Ð¾-Ð´Ð¾Ð±ÑÐ¾ Ð¾Ñ ÑÐ½Ð¸ÐºÐ°Ð»ÐµÐ½, ÑÑÑÐ½Ð¾ Ð½Ð°Ð¿ÑÐ°Ð²ÐµÐ½ Ð¿Ð¾Ð´Ð°ÑÑÐº?
            </h1>
            <span className={` ${styles['text01']} ${projectStyles['lead']} `}>
              <span>
                ÐÐ·Ð±ÐµÑÐ¸ Ð½Ð°Ð¹-Ð´Ð¾Ð±ÑÐ¾ÑÐ¾, ÑÐ°ÑÐµÑÐ°Ð¹ ÑÐ¾Ð²Ð° Ð¾Ñ ÐºÐ¾ÐµÑÐ¾ Ð¸Ð¼Ð°Ñ Ð½ÑÐ¶Ð´Ð°, Ð·Ð° Ð´Ð°
                Ð¿Ð¾Ð³Ð»ÐµÐ·Ð¸Ñ ÑÐµÐ±Ðµ ÑÐ¸, ÑÐ¾Ð´Ð½Ð¸Ð½Ð° Ð¸Ð»Ð¸ Ð¿ÑÐ¸ÑÑÐµÐ» - Ð¸Ð»Ð¸ Ð¿ÑÐ¾ÑÑÐ¾ ÑÐ°Ð·ÐºÑÐ°ÑÐ¸ Ð´Ð¾Ð¼Ð°
                ÑÐ¸!
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span>
                Ð¥Ð°ÑÐµÑÐ°Ð¹ Ð¸Ð»Ð¸ Ð¿Ð¾ÑÑÑÐ°Ð¹ Ð´Ð¸Ð·Ð°Ð¹Ð½ Ð·Ð° ÐÐ¾Ð»ÐµÐ´Ð°, ÐÐµÐ»Ð¸ÐºÐ´ÐµÐ½, Ð½Ð¾Ð²Ð¾ÑÐ¾Ð´ÐµÐ½Ð¾ Ð±ÐµÐ±Ðµ,
                Ð Ð¾Ð¶Ð´ÐµÐ½ Ð¸Ð»Ð¸ ÐÐ¼ÐµÐ½ Ð´ÐµÐ½ Ð¸ Ð½Ð°Ð¿ÑÐ°Ð²Ð¸ Ð¿Ð¾ÑÑÑÐºÐ°.
              </span>
            </span>
            <div className={styles['container02']}>
              <div className={styles['container03']}>
                <PrimaryPinkButton button="Ð Ð°Ð·Ð³Ð»ÐµÐ´Ð°Ð¹ "></PrimaryPinkButton>
              </div>
              <OutlineGrayButton button="ÐÑÐ¾ÑÐµÑÐ¸ Ð¿Ð¾Ð²ÐµÑÐµ Ð´Ð¾Ð»Ñ â"></OutlineGrayButton>
            </div>
            <div className={styles['container04']}>
              <svg viewBox="0 0 1024 1024" className={styles['icon']}>
                <path d="M298.667 42.667c-70.699 0-134.741 28.715-181.035 74.965s-74.965 110.336-74.965 181.035v426.667c0 70.699 28.715 134.741 74.965 181.035s110.336 74.965 181.035 74.965h426.667c70.699 0 134.741-28.715 181.035-74.965s74.965-110.336 74.965-181.035v-426.667c0-70.699-28.715-134.741-74.965-181.035s-110.336-74.965-181.035-74.965zM298.667 128h426.667c47.147 0 89.728 19.072 120.661 50.005s50.005 73.515 50.005 120.661v426.667c0 47.147-19.072 89.728-50.005 120.661s-73.515 50.005-120.661 50.005h-426.667c-47.147 0-89.728-19.072-120.661-50.005s-50.005-73.515-50.005-120.661v-426.667c0-47.147 19.072-89.728 50.005-120.661s73.515-50.005 120.661-50.005zM724.864 478.848c-6.4-41.472-24.363-79.232-50.944-109.525-32.171-36.736-76.971-62.507-128.384-70.144-19.797-3.157-41.387-3.285-63.019-0.085-58.283 8.619-107.563 40.149-140.032 83.925s-48.341 100.139-39.68 158.379 40.149 107.563 83.925 140.032 100.139 48.341 158.379 39.68 107.563-40.149 140.032-83.925 48.341-100.139 39.68-158.379zM640.469 491.392c5.205 34.987-4.267 68.651-23.808 95.019s-49.067 45.184-84.011 50.347-68.651-4.267-95.019-23.808-45.184-49.067-50.347-84.011 4.267-68.651 23.808-95.019 49.067-45.184 84.011-50.347c13.355-1.963 26.24-1.792 37.12-0.085 31.573 4.693 58.283 20.053 77.568 42.069 16 18.261 26.88 41.088 30.72 65.835zM789.333 277.333c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667 19.115 42.667 42.667 42.667 42.667-19.115 42.667-42.667z"></path>
              </svg>
              <span className={styles['text05']}>
                â Ð Ð°Ð·Ð³Ð»ÐµÐ´Ð°Ð¹ Ð·Ð° Ð¿Ð¾Ð²ÐµÑÐµ ÑÐ½Ð¸Ð¼ÐºÐ¸
              </span>
            </div>
          </div>
        </div>
      </div>
      <img
        alt="image"
        src="/playground_assets/curved6-1500h.jpg"
        className={styles['image']}
      />
      <section className={styles['Features']}>
        <FeatureCard
          image_src="/playground_assets/cube1.svg"
          rootClassName="rootClassName"
        ></FeatureCard>
      </section>
      <section className={styles['container05']}>
        <div className={styles['container06']}>
          <h1
            className={` ${styles['text06']} ${projectStyles['headingOne']} `}
          >
            <span className={styles['text07']}>ÐÑ Ð¸Ð´ÐµÑ - Ð² ÑÐµÐ°Ð»Ð½Ð¾ÑÑ</span>
          </h1>
          <span className={styles['text08']}>
            <span className={styles['text09']}>
              ÐÐ°ÑÐ¾ Ð´Ð° Ð½Ðµ Ð¿Ð¾Ð²ÐµÑÐ¸Ñ Ð¼ÐµÑÑÐ°Ð½Ð¸Ñ Ð¿Ð¾Ð´Ð°ÑÑÐº Ð½Ð° Ð¿ÑÐ¾ÑÐµÑÐ¸Ð¾Ð½Ð°Ð»Ð¸ÑÑ, ÐºÐ¾Ð¹ÑÐ¾ Ð´Ð° Ð³Ð¾
              Ð¸Ð·Ð³Ð¾ÑÐ²Ð¸ Ð¿Ð¾ ÑÐ²Ð¾ÑÑÐ° Ð¿ÑÐµÐ´ÑÑÐ°Ð²Ð°? ÐÑÐºÐ°Ñ Ð´Ð° Ð¿Ð¾Ð´Ð°ÑÐ¸Ñ ÐºÐ¾ÑÐ½Ð¸ÑÐ° ÑÑÑ ÑÐ»Ð°Ð´ÐºÐ¸
              Ð¸Ð·ÐºÑÑÐµÐ½Ð¸Ñ Ð¸ Ð°Ð»ÐºÐ¾ÑÐ¾Ð» Ð·Ð° Ð Ð¾Ð¶Ð´ÐµÐ½ ÐÐµÐ½, Ð¸Ð»Ð¸ Ð¿ÑÐ¾ÑÑÐ¾ Ð´Ð° Ð·Ð°ÑÐ°Ð´Ð²Ð°Ñ ÐºÐ¾Ð»ÐµÐ³Ð°?
            </span>
          </span>
        </div>
        <div className={styles['container07']}>
          <div className={styles['container08']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1597088125765-9a8825927c6c?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQwfHxkcmF3fGVufDB8fHx8MTY0Mjc4MzMzOQ&amp;ixlib=rb-1.2.1&amp;w=1100"
              className={styles['image1']}
            />
            <span className={` ${styles['text10']} ${projectStyles['small']} `}>
              <span className={styles['text11']}>
                &quot;The world always seems brighter when youâve just made
                something that wasnât there before.&quot;
              </span>
              <br></br>
              <span></span>
              <br></br>
              <span className={styles['text15']}>-Neil Gaiman</span>
            </span>
            <div className={styles['container09']}>
              <img
                alt="image"
                src="https://images.unsplash.com/photo-1522410818928-5522dacd5066?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDU0fHxwYWludHxlbnwwfHx8fDE2NDI3ODM4OTg&amp;ixlib=rb-1.2.1&amp;w=400"
                className={styles['image2']}
              />
            </div>
          </div>
          <div className={styles['container10']}>
            <img
              alt="image"
              src="https://images.unsplash.com/photo-1505308509987-f7f783ebabfc?ixid=Mnw5MTMyMXwwfDF8c2VhcmNofDQ2fHxkcmF3fGVufDB8fHx8MTY0Mjc4MzMzOQ&amp;ixlib=rb-1.2.1&amp;w=1100"
              className={styles['image3']}
            />
            <div className={styles['container11']}>
              <h3 className={projectStyles['headingTwo']}>
                <span className={styles['text17']}>ÐÐ°ÐºÐ²Ð¾ Ð¿ÑÐµÐ´Ð»Ð°Ð³Ð°Ð¼ Ð°Ð·?</span>
              </h3>
              <p>
                <br>
                  Ð¡Ð²Ð°ÑÐ±ÐµÐ½Ð¸ Ð¿Ð¾Ð´Ð°ÑÑÑÐ¸, ÑÐ¾Ð¶Ð´ÐµÐ½Ð½Ð¸ Ð´Ð½Ð¸, ÐºÐ¾Ð»ÐµÐ´Ð½Ð¸ Ð¿Ð¾Ð´Ð°ÑÑÑÐ¸ - Ð¼Ð¾Ð¶ÐµÑ Ð´Ð°
                  Ð½Ð°Ð¿ÑÐ°Ð²Ð¸Ñ Ð²ÑÐ¸ÑÐºÐ¸ Ð¿ÑÐ°Ð·Ð½Ð¸ÑÐ¸ Ð¿Ð¾-ÑÐ¿ÐµÑÐ¸Ð°Ð»Ð½Ð¸ Ñ Ð¸Ð½Ð¾Ð²Ð°ÑÐ¸Ð²ÐµÐ½, Ð»Ð¸ÑÐµÐ½ Ð¸
                  ÐµÐ´Ð¸Ð½ÑÑÐ²ÐµÐ½ Ð¿Ð¾ ÑÐ¾Ð´Ð° ÑÐ¸ Ð¿Ð¾Ð´Ð°ÑÑÐº. Ð Ð°Ð· ÑÑÐ¼ ÑÑÐº, Ð·Ð° Ð´Ð° ÑÐ¸ Ð¿Ð¾Ð¼Ð¾Ð³Ð½Ð°!
                </br>
                <span className={styles['text19']}>
                  ÐÐ°Ð½Ð¸Ð¼Ð°Ð²Ð°Ð¼ ÑÐµ Ð¾ÑÐ½Ð¾Ð²Ð½Ð¾ Ñ Ð´ÐµÐºÑÐ¿Ð°Ð¶. ....Ð¡Ð²Ð°ÑÐ±ÐµÐ½Ð¸ Ð¿Ð¾Ð´Ð°ÑÑÑÐ¸,
                  ÑÐ¾Ð¶Ð´ÐµÐ½Ð½Ð¸ Ð´Ð½Ð¸, ÐºÐ¾Ð»ÐµÐ´Ð½Ð¸ Ð¿Ð¾Ð´Ð°ÑÑÑÐ¸ - Ð¼Ð¾Ð¶ÐµÑ Ð´Ð° Ð½Ð°Ð¿ÑÐ°Ð²Ð¸Ñ Ð²ÑÐ¸ÑÐºÐ¸
                  Ð¿ÑÐ°Ð·Ð½Ð¸ÑÐ¸ Ð¿Ð¾-ÑÐ¿ÐµÑÐ¸Ð°Ð»Ð½Ð¸ Ñ Ð¸Ð½Ð¾Ð²Ð°ÑÐ¸Ð²ÐµÐ½, Ð»Ð¸ÑÐµÐ½ Ð¸ ÐµÐ´Ð¸Ð½ÑÑÐ²ÐµÐ½ Ð¿Ð¾ ÑÐ¾Ð´Ð°
                  ÑÐ¸ Ð¿Ð¾Ð´Ð°ÑÑÐº. Ð Ð°Ð· ÑÑÐ¼ ÑÑÐº, Ð·Ð° Ð´Ð° ÑÐ¸ Ð¿Ð¾Ð¼Ð¾Ð³Ð½Ð°!
                </span>
                <br></br>
                <span></span>
                <br></br>
                <span className={styles['text22']}>
                  ÐÐ¾Ð¿ÑÐ»Ð½Ð¸ÑÐµÐ»Ð½Ð¾, Ð¸Ð·Ð³Ð¾ÑÐ²ÑÐ¼ ÐºÐ¾ÑÐ½Ð¸ÑÐ¸ Ð¸ Ð´ÑÑÐ²ÐµÐ½Ð¸ ÑÐ°Ð¹Ð³Ð¸ Ð·Ð° Ð²ÑÑÐºÐ°ÐºÐ²Ð¸
                  Ð¿Ð¾Ð²Ð¾Ð´Ð¸, ÐºÐ¾Ð¸ÑÐ¾ ÑÑÐ´ÑÑÐ¶Ð°Ñ Ð°Ð»ÐºÐ¾ÑÐ¾Ð»Ð¸, ÑÐ»Ð°Ð´ÐºÐ¸, ÑÐ¸Ð¿ÐµÑÐ½Ð° Ð¸ Ð²Ð¸Ð½Ð° Ð¿Ð¾
                  ÑÐ²Ð¾Ð¹ Ð¸Ð·Ð±Ð¾Ñ. ÐÑÐµÐºÑÐ°ÑÐµÐ½ Ð¿Ð¾Ð´Ð°ÑÑÐº Ð·Ð° Ð²ÑÐ¸ÑÐºÐ¸ Ð¿Ð¾Ð²Ð¾Ð´Ð¸, ÐºÐ°ÐºÑÐ¾ Ð¸
                  ÑÐ¸ÑÐ¼ÐµÐ½Ð¸ Ð¿Ð¾Ð´Ð°ÑÑÑÐ¸ Ð·Ð° ÑÐ»ÑÐ¶Ð¸ÑÐµÐ»Ð¸ÑÐµ.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={styles['Testimonials']}>
        <img
          alt="image"
          src="/playground_assets/bottom.svg"
          className={styles['image4']}
        />
      </section>
      <section className={styles['Contaier']}>
        <div className={styles['container12']}>
          <div className={styles['container13']}>
            <svg viewBox="0 0 1024 1024" className={styles['icon2']}>
              <path d="M363.722 722.052l41.298-57.816-45.254-45.256-57.818 41.296c-10.722-5.994-22.204-10.774-34.266-14.192l-11.682-70.084h-64l-11.68 70.086c-12.062 3.418-23.544 8.198-34.266 14.192l-57.818-41.298-45.256 45.256 41.298 57.816c-5.994 10.72-10.774 22.206-14.192 34.266l-70.086 11.682v64l70.086 11.682c3.418 12.060 8.198 23.544 14.192 34.266l-41.298 57.816 45.254 45.256 57.818-41.296c10.722 5.994 22.204 10.774 34.266 14.192l11.682 70.084h64l11.68-70.086c12.062-3.418 23.544-8.198 34.266-14.192l57.818 41.296 45.254-45.256-41.298-57.816c5.994-10.72 10.774-22.206 14.192-34.266l70.088-11.68v-64l-70.086-11.682c-3.418-12.060-8.198-23.544-14.192-34.266zM224 864c-35.348 0-64-28.654-64-64s28.652-64 64-64 64 28.654 64 64-28.652 64-64 64zM1024 384v-64l-67.382-12.25c-1.242-8.046-2.832-15.978-4.724-23.79l57.558-37.1-24.492-59.128-66.944 14.468c-4.214-6.91-8.726-13.62-13.492-20.13l39.006-56.342-45.256-45.254-56.342 39.006c-6.512-4.766-13.22-9.276-20.13-13.494l14.468-66.944-59.128-24.494-37.1 57.558c-7.812-1.892-15.744-3.482-23.79-4.724l-12.252-67.382h-64l-12.252 67.382c-8.046 1.242-15.976 2.832-23.79 4.724l-37.098-57.558-59.128 24.492 14.468 66.944c-6.91 4.216-13.62 8.728-20.13 13.494l-56.342-39.006-45.254 45.254 39.006 56.342c-4.766 6.51-9.278 13.22-13.494 20.13l-66.944-14.468-24.492 59.128 57.558 37.1c-1.892 7.812-3.482 15.742-4.724 23.79l-67.384 12.252v64l67.382 12.25c1.242 8.046 2.832 15.978 4.724 23.79l-57.558 37.1 24.492 59.128 66.944-14.468c4.216 6.91 8.728 13.618 13.494 20.13l-39.006 56.342 45.254 45.256 56.342-39.006c6.51 4.766 13.22 9.276 20.13 13.492l-14.468 66.944 59.128 24.492 37.102-57.558c7.81 1.892 15.742 3.482 23.788 4.724l12.252 67.384h64l12.252-67.382c8.044-1.242 15.976-2.832 23.79-4.724l37.1 57.558 59.128-24.492-14.468-66.944c6.91-4.216 13.62-8.726 20.13-13.492l56.342 39.006 45.256-45.256-39.006-56.342c4.766-6.512 9.276-13.22 13.492-20.13l66.944 14.468 24.492-59.13-57.558-37.1c1.892-7.812 3.482-15.742 4.724-23.79l67.382-12.25zM672 491.2c-76.878 0-139.2-62.322-139.2-139.2s62.32-139.2 139.2-139.2 139.2 62.322 139.2 139.2c0 76.878-62.32 139.2-139.2 139.2z"></path>
            </svg>
          </div>
          <h2
            className={` ${styles['text24']} ${projectStyles['headingTwo']} `}
          >
            <span className={styles['text25']}>Ð£ÑÐ»ÑÐ³Ð¸</span>
          </h2>
          <span className={styles['text26']}>
            <span>ÐÑÐ¾ Ð·Ð°ÑÐ¾ Ð¼Ð¾Ð¶ÐµÑ Ð´Ð° ÑÐ°Ð·ÑÐ¸ÑÐ°Ñ Ð½Ð° Ð¼ÐµÐ½.</span>
            <span></span>
          </span>
        </div>
        <div className={styles['container14']}>
          <div className={styles['container15']}>
            <div className={styles['container16']}></div>
            <div className={styles['container17']}>
              <svg
                viewBox="0 0 987.4285714285713 1024"
                className={styles['icon4']}
              >
                <path d="M438.857 508.571l312 312c-79.429 80.571-190.286 130.286-312 130.286-242.286 0-438.857-196.571-438.857-438.857s196.571-438.857 438.857-438.857v435.429zM545.714 512h441.714c0 121.714-49.714 232.571-130.286 312zM950.857 438.857h-438.857v-438.857c242.286 0 438.857 196.571 438.857 438.857z"></path>
              </svg>
              <h1
                className={` ${styles['text29']} ${projectStyles['headingOne']} `}
              >
                Search and Discover!
              </h1>
              <span className={styles['text30']}>
                <span>Website visitors</span>
                <span></span>
              </span>
              <OutlineBlackButton button="get started"></OutlineBlackButton>
            </div>
          </div>
          <div className={styles['container18']}>
            <ListItem></ListItem>
            <ListItem
              title="2. ÐÑÐ¾ÑÐµÑÐ¸Ð¾Ð½Ð°Ð»Ð½Ð° Ð¸Ð·ÑÐ°Ð±Ð¾ÑÐºÐ°"
              description="ÐÐ¼Ð°Ð¼ Ð´ÑÐ»Ð³Ð¾Ð³Ð¾Ð´Ð¸ÑÐµÐ½ Ð¾Ð¿Ð¸Ñ Ð²ÑÐ² Ð²ÑÐ¸ÑÐºÐ¸ Ð½Ð°Ð¿ÑÐ°Ð²Ð»ÐµÐ½Ð¸Ñ Ð¾Ñ ÐºÐ¾Ð¸ÑÐ¾ Ð¸Ð·Ð´Ð°Ð²Ð°Ð¼ Ð¿ÑÐ¾Ð´ÑÐºÑÐ¸. ÐÐ¾Ð¶ÐµÑ Ð´Ð° ÑÐ°Ð·ÑÐ¸ÑÐ°Ñ, ÑÐµ Ð²ÑÑÐºÐ° ÑÐ²Ð¾Ñ Ð¸Ð´ÐµÑ, ÑÐ»ÐµÐ´ Ð´ÐµÑÐ°Ð¹Ð»Ð½Ð¾ Ð¸Ð·Ð³Ð¾Ð²Ð°ÑÑÐ½Ðµ, ÑÐµ Ð·Ð°Ð¶Ð¸Ð²ÐµÐµ ÑÐ¾ÑÐ½Ð¾ ÑÐ°ÐºÐ° ÐºÐ°ÐºÑÐ¾ ÑÐ¸ Ñ Ð¿ÑÐµÐ´ÑÑÐ°Ð²ÑÑ."
            ></ListItem>
            <ListItem
              title="3. ÐÐ¾ÑÐµÐºÑÐ½Ð¸ Ð´Ð¾ÑÑÐ°Ð²ÐºÐ¸ Ð¸ Ð¿Ð»Ð°ÑÐ°Ð½Ð¸Ñ"
              description="ÐÐ° Ð¼ÐµÐ½ Ðµ Ð±ÐµÐ·ÐºÑÐ°Ð¹Ð½Ð¾ Ð²Ð°Ð¶Ð½Ð¾, Ð´Ð° Ð´Ð¾Ð¿ÑÐ¸Ð½Ð°ÑÑÐ¼ Ñ Ð¸Ð·ÐºÑÑÑÐ²Ð¾ÑÐ¾ ÑÐ¸ - Ð·Ð° ÑÐ¾Ð²Ð° Ð¸ Ð¼Ð¾Ð¶ÐµÑ Ð´Ð° Ð¾ÑÐ°ÐºÐ²Ð°Ñ Ð°Ð±ÑÐ¾Ð»ÑÑÐ½Ð° Ð¿ÑÐ¾Ð·ÑÐ°ÑÐ½Ð¾ÑÑ Ð·Ð°Ð´ ÑÐµÐ½Ð¸ÑÐµ Ð¸ Ð´Ð¾ÑÑÐ°Ð²ÐºÐ¸ÑÐµ Ð¼Ð¸."
            ></ListItem>
          </div>
        </div>
        <div className={styles['Divider']}></div>
        <h2 className={` ${styles['text33']} ${projectStyles['headingTwo']} `}>
          <span className={styles['text34']}>ÐÐ¿ÑÐ¸Ñ Ð·Ð° ÑÑÐ¾ÑÐ¸</span>
        </h2>
        <div className={styles['container19']}>
          <div className={styles['container20']}>
            <ListItem
              title="ÐÐ¾Ð³Ð° Ð´Ð° Ð¿ÑÐµÐ´Ð»Ð¾Ð¶Ð° Ð»Ð¸ÑÐ½Ð¸ ÑÑÐ¾ÑÐ¸ Ð¿Ð¾ Ð´ÐµÐºÑÐ¿Ð°Ð¶ .\n"
              description="ÐÑÐ¾Ð²ÐµÐ¶Ð´Ð°Ñ ÑÐµ Ð¸Ð»Ð¸ Ð¿ÑÐµÐ· ÑÐ¸ÐºÐµÐ½Ð´Ð° Ð¸Ð»Ð¸ Ð¿Ð¾ Ð´Ð¾Ð³Ð¾Ð²Ð°ÑÑÐ½Ðµ Ð¿ÑÐµÐ· ÑÐµÐ´Ð¼Ð¸ÑÐ°ÑÐ°. Ð¦ÐµÐ½Ð¸ÑÐµ Ð·Ð° ÑÑÐ¾ÑÐ¸ÑÐµ ÑÐµ Ð´Ð¾Ð³Ð¾Ð²Ð°ÑÑÑ Ð² Ð·Ð°Ð²Ð¸ÑÐ¸Ð¼Ð¾ÑÑ Ð¾Ñ Ð½Ð°ÑÐ¾ÐºÐ°ÑÐ° Ð¸ ÑÐ°ÑÐ¾Ð²ÐµÑÐµ Ð½Ð° Ð¿ÑÐ¾Ð²ÐµÐ¶Ð´Ð°Ð½Ðµ."
            ></ListItem>
          </div>
          <div className={styles['container21']}>
            <div className={styles['container22']}></div>
          </div>
        </div>
      </section>
      <section className={styles['Testimonials1']}>
        <img
          alt="image"
          src="/playground_assets/top.svg"
          className={styles['image5']}
        />
      </section>
      <FooterGray rootClassName="rootClassName"></FooterGray>
    </div>
  )
}

export default Home
