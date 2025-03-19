import axios from "axios";

const httpInstance = axios.create({
  baseURL: "/api",
  timeout: 5000,
});

// 请求拦截器
httpInstance.interceptors.request.use(
  (config) => {
    // 1.从pinia获取token数据
    const userStore = useUserStore();
    // 2.判断是否有token，并且是否添加到请求头
    if (userStore.token) {
      config.headers.Authorization = `Bearer ${userStore.token}`;
    }
    return config;
  },
  (err) => {}
)
// 响应拦截器
httpInstance.interceptors.response.use(
  (res) => {

  }
)

export default httpInstance;
