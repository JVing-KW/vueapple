import { createApp } from 'vue'
// 생성한 뷰 라우터 받아오기
import router from './router/index.js'
//router.js에서 기본 내보내기로 export defalt에 경우 {router}없이 받아야 한다.

import App from './App.vue'

// 생성한 뷰 라우터 받아오기

const app = createApp(App)
app.use(router)  // 라우터 사용
app.mount('#app')
