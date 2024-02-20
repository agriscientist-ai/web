import { Outlet } from 'react-router-dom'
import css from './css/LiveInfo.module.scss'
import Aside from '../widgets/Aside'
import { Helmet } from 'react-helmet'

export default function LiveInfo(props) {
  const aside = [
    {
      title: '即時資訊',
      ul: [
        {
          title: '感測數據',
          path: '/realtime/sensor',
        },
        {
          title: '控制台',
          path: '/realtime/control',
        },
        {
          title: '農場助理',
          path: '/realtime/chat',
        },
      ],
    },
    {
      title: '清華智慧農業',
      ul: [
        {
          title: '智慧插座',
          path: '/realtime/smartSwitch',
        },
      ],
    },
  ]
  return (
    <div className={css.container}>
      <Helmet>
        <title>即時｜田野數據科學家</title>
      </Helmet>
      <Aside list={aside}></Aside>
      <div className={`${css.view} chat_container`}>
        <Outlet />
      </div>
    </div>
  )
}
