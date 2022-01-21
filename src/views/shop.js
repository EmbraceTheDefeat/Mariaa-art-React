import React from 'react'

import { Helmet } from 'react-helmet'

import Header from '../components/header'
import FooterGray from '../components/footer-gray'
import styles from './shop.module.css'

const Shop = () => {
  return (
    <div className={styles['container']}>
      <Helmet>
        <title>Shop - Mariaa-art</title>
        <meta name="description" content="Web arts" />
        <meta property="og:title" content="Shop - Mariaa-art" />
        <meta property="og:description" content="Web arts" />
      </Helmet>
      <Header></Header>
      <div className={styles['container01']}>
        <div className={styles['Banner']}>
          <h1 className={styles['text']}>
            <span>ÐÐ°Ð»Ð¸ÑÐ½Ð¸ Ð·Ð°</span>
            <br></br>
            <span>Ð¿Ð¾ÐºÑÐ¿ÐºÐ°</span>
          </h1>
        </div>
        <h1>Ð¡Ð¿ÐµÑÐ¸Ð°Ð»Ð½Ð¸ Ð¿ÑÐµÐ´Ð»Ð¾Ð¶ÐµÐ½Ð¸Ñ:</h1>
        <span className={styles['text04']}>
          <span>ÐÐ¾ÑÐ½Ð¸ÑÐ¸ Ð¸ ÐºÐ°ÑÐµÑÐºÐ¸ Ð·Ð° Ð²ÑÑÐºÐ°ÐºÑÐ² Ð¿Ð¾Ð²Ð¾Ð´!</span>
          <br></br>
          <span>
            Ð¡Ð»Ð°Ð´ÐºÐ¸ Ð»Ð°ÐºÐ¾Ð¼ÑÑÐ²Ð°, Ð°Ð»ÐºÐ¾ÑÐ¾Ð»Ð¸, Ð¿Ð¾Ð´Ð±ÑÐ°Ð½Ð¸ ÑÐ¸ÑÐµÐ½Ð° Ð¸ Ð²Ð¸Ð½Ð° - Ð²ÑÐ¸ÑÐºÐ¾ Ð¿Ð¾ ÑÐ²Ð¾Ð¹
            Ð¸Ð·Ð±Ð¾Ñ.
          </span>
          <br></br>
          <span className={styles['text09']}>
            (Ð¦ÐµÐ½Ð° Ð¿Ð¾ Ð´Ð¾Ð³Ð¾Ð²Ð°ÑÑÐ½Ðµ ÑÐ¿ÑÑÐ¼Ð¾ ÑÑÐ´ÑÑÐ¶Ð°Ð½Ð¸ÐµÑÐ¾)
          </span>
        </span>
        <div className={styles['Gallery']}>
          <div className={styles['container02']}>
            <div className={styles['container03']}>
              <div className={styles['container04']}>
                <img
                  alt="image"
                  src="/playground_assets/269595419_500589971489976_4221825053026740414_n-300h.jpg"
                  className={styles['image']}
                />
              </div>
              <div className={styles['container05']}></div>
            </div>
          </div>
          <div className={styles['container06']}>
            <img
              alt="image"
              src="/playground_assets/269609642_1119541245274772_3458489306075960626_n-500w.jpg"
              className={styles['image01']}
            />
          </div>
          <img
            alt="image"
            src="/playground_assets/269782119_239546434961241_184466446863691849_n-300h.jpg"
            className={styles['image02']}
          />
        </div>
      </div>
      <h1 className={styles['text10']}>ÐÐ°Ð»Ð¸ÑÐ½Ð¸:</h1>
      <div className={styles['container07']}>
        <div className={styles['container08']}></div>
        <div className={styles['container09']}>
          <img
            alt="image"
            src="/playground_assets/269466172_878814792796071_3990249762930567061_n-400w.jpg"
            className={styles['image03']}
          />
          <div className={styles['container10']}>
            <div className={styles['container11']}>
              <h1 className={styles['text11']}>Lorem ipsum dolor sit amet</h1>
              <span className={styles['text12']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing ...
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container12']}>
        <div className={styles['container13']}></div>
        <div className={styles['container14']}>
          <img
            alt="image"
            src="/playground_assets/269414885_923254761915264_2615884820544630476_n-400w.jpg"
            className={styles['image04']}
          />
          <div className={styles['container15']}>
            <div className={styles['container16']}>
              <h1 className={styles['text13']}>Lorem ipsum dolor sit amet</h1>
              <span className={styles['text14']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing ...
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container17']}>
        <div className={styles['container18']}></div>
        <div className={styles['container19']}>
          <img
            alt="image"
            src="/playground_assets/269676097_646889536340177_5837619679652163712_n-400w.jpg"
            className={styles['image05']}
          />
          <div className={styles['container20']}>
            <div className={styles['container21']}>
              <h1 className={styles['text15']}>Lorem ipsum dolor sit amet</h1>
              <span className={styles['text16']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing ...
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container22']}>
        <div className={styles['container23']}></div>
        <div className={styles['container24']}>
          <img
            alt="image"
            src="/playground_assets/269609642_1119541245274772_3458489306075960626_n-500w.jpg"
            className={styles['image06']}
          />
          <div className={styles['container25']}>
            <div className={styles['container26']}>
              <h1 className={styles['text17']}>Lorem ipsum dolor sit amet</h1>
              <span className={styles['text18']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing ...
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container27']}>
        <div className={styles['container28']}></div>
        <div className={styles['container29']}>
          <img
            alt="image"
            src="/playground_assets/269609642_1119541245274772_3458489306075960626_n-500w.jpg"
            className={styles['image07']}
          />
          <div className={styles['container30']}>
            <div className={styles['container31']}>
              <h1 className={styles['text19']}>Lorem ipsum dolor sit amet</h1>
              <span className={styles['text20']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing ...
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container32']}>
        <div className={styles['container33']}></div>
        <div className={styles['container34']}>
          <img
            alt="image"
            src="/playground_assets/269609642_1119541245274772_3458489306075960626_n-500w.jpg"
            className={styles['image08']}
          />
          <div className={styles['container35']}>
            <div className={styles['container36']}>
              <h1 className={styles['text21']}>Lorem ipsum dolor sit amet</h1>
              <span className={styles['text22']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing ...
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles['container37']}>
        <div className={styles['container38']}></div>
        <div className={styles['container39']}>
          <img
            alt="image"
            src="/playground_assets/269609642_1119541245274772_3458489306075960626_n-500w.jpg"
            className={styles['image09']}
          />
          <div className={styles['container40']}>
            <div className={styles['container41']}>
              <h1 className={styles['text23']}>Lorem ipsum dolor sit amet</h1>
              <span className={styles['text24']}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
                volutpat turpis. Mauris luctus rutrum mi ut rhoncus. Integer in
                dignissim tortor. Lorem ipsum dolor sit amet, consectetur
                adipiscing ...
              </span>
            </div>
          </div>
        </div>
      </div>
      <FooterGray></FooterGray>
    </div>
  )
}

export default Shop
