import serve from "./serve";
export default {
  getSeller: () => serve(`/seller`),
  getGood: () => serve(`/goods`),
  getRatings: () => serve(`/ratings`)
};
