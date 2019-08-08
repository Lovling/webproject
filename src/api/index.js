// BACK-END DATA REQUEST CENTER

import fetch from "./serve";

export default {
  getSeller: () => fetch(`/getSeller`),
  getGoods: () => fetch(`/getGoods`),
  getRatings: () => fetch(`/getRatings`),
  getCusFromVerifyByOpenid: openid =>
    fetch("user/getCusFromVerifyByOpenid", "post", { openid })
};
