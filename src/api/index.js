import service from "./serve";
export default {
  getGood: () => service(`/goods`),
  getRatings: () => service(`/ratings`),
  getSeller: () => service(`/seller`)
}