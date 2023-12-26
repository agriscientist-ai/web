import { useEffect, useRef } from 'react'
import style from './css/Home.module.scss'
import { Helmet } from 'react-helmet'
import Bottom from '../widgets/Bottom'
import ImageAnimation from '../widgets/ImageAnimation'

import Rellax from 'rellax'

export default function Home(props) {
  // props.navigateClick('/preview')
  useEffect(() => {
    const selectors = [
      '.headerIcon',
      '.headerTitle',
      '.headerDescription',
      '.headerTag',
      '.introTitle',
      '.introDescription',
      '.introTag',
      '.introBg',
    ]

    const titleRellaxes = selectors.map(
      (selector) => new Rellax(selector, { wrapper: '#main' })
    )

    return () => {
      titleRellaxes.forEach((titleRellax) => titleRellax.destroy())
    }
  }, [])
  return (
    <>
      <Helmet>
        <title>田野數據科學家｜首頁</title>
        <meta
          name="description"
          content="基於農場數據分析為基礎，並以語音交互為核心的專題作品網站。"
        />
      </Helmet>
      <div className={style.container}>
        <div className={style.header}>
          <div className={`${style.title}`}>
            <img
              className="headerIcon"
              src={`${process.env.PUBLIC_URL}/agriscientist-ai.ico`}
              data-rellax-speed="-6.5"
              alt="田野數據科學家 Logo"
            />
            <h1 className="headerTitle" data-rellax-speed="-6">
              田野數據科學家
            </h1>
            <p className="headerDescription" data-rellax-speed="-6.5">
              基於農場數據分析為基礎，
              <br />
              並以語音交互為核心的專題作品網站。
            </p>
            <span
              className={`${style.tag} headerTag`}
              data-type="center"
              data-rellax-speed="-6.7"
            >
              延後於一月初發表
            </span>
          </div>
          {/* <img
            className="headerBg"
            data-rellax-speed="-10"
            src={`${process.env.PUBLIC_URL}/images/minimalist_style__best_quality_4k_ultra_detailed_realistic_photorealistic___aerial_view_flat_colorful_blocky_minimalist__a_small_farm_on_a_vast_plain__a_small__futuristic_looking_house__1204961570_upscayl_4x_realesrgan-x4plus.jpg`}
            alt=""
          /> */}
        </div>
        <div className={style.intro}>
          <div className={`${style.title}`}>
            <h1 className="introTitle" data-rellax-speed="1">
              <span className="introTag" data-rellax-speed="0">
                延後於一月初推出
              </span>
              一語成築，生產無憂！
            </h1>
            <p className="introDescription" data-rellax-speed="-1">
              就像擁有了農場管家，瞭解農場資訊只需要問它。
            </p>
          </div>
          <img
            className="introBg"
            data-rellax-speed="-5"
            src={`/images/minimalist_style__best_quality_4k_ultra_detailed_realistic_photorealistic___aerial_view_flat_colorful_blocky_minimalist__a_small_farm_on_a_vast_plain__a_small__futuristic_looking_house__1204961570_upscayl_4x_realesrgan-x4plus.webp`}
            alt=""
          />
        </div>
        <div className={style.team}></div>
        <div className={style.product}>
          <div className={style.microfarm}>
            <img
              className={`${style.microfarm}`}
              src={`/images/microfarm.webp`}
              alt=""
            />
            {/* <img className={style.arrow} src="/images/arrow_1.gif" alt="" /> */}
            <ImageAnimation
              path="/images/arrow_1.gif"
              className={style.arrow}
            />
            <p>微農場 Microfarm</p>
          </div>
        </div>
      </div>
      <Bottom />
    </>
  )
}
