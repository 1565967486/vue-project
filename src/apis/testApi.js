import httpInstance from "@/utils/http";

export function getHomeGoods(type) {
  return httpInstance({
    url: "/home/goods",
    params: {
      type,
    },
  });
}
