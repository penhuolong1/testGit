import {
  getAxios
} from './http'

/**
 * 获取热门城市
 */
export const hotcity = () => getAxios('/v1/cities', {
  type: 'hot'
})

/**
 * 获取首页所有城市
 */

export const groupcity = () => getAxios('/v1/cities', {
  type: 'group'
})

/**
 * 获取首页所有城市
 */

export const searchCity = (cityId, keyWord) => getAxios('/v1/pois', {
  type: 'search',
  city_id: cityId,
  keyword: keyWord
})
