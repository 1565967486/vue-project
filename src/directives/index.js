// 定义懒加载插件
import {useIntersectionObserver} from '@vueuse/core'

export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    app.directive('img-lazy', {
      mounted(el, binding) {
        // el:指令绑定的元素
        // binding:指令绑定的信息
        const { stop } = useIntersectionObserver(
          el,
          ([{ isIntersecting }], observerElement) => {
            console.log(isIntersecting)
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()
            }
          }
        )
      }
    })

  }
}
