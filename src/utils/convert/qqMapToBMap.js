/**
 * 坐标转换 腾讯地图转换成百度地图坐标
 * lng 腾讯经度
 * lat 腾讯纬度
 * 经度 > 纬度
 */
const qqMapToBMap = (lng, lat) => {
  if (lng == null || lng == "" || lat == null || lat == "") {
    return {
      longitude: lng,
      latitude: lat
    };
  }

  let x_pi = 3.14159265358979324;
  let x = parseFloat(lng);
  let y = parseFloat(lat);
  let z = Math.sqrt(x * x + y * y) + 0.00002 * Math.sin(y * x_pi);
  let theta = Math.atan2(y, x) + 0.000003 * Math.cos(x * x_pi);
  lng = (z * Math.cos(theta) + 0.0065).toFixed(5);
  lat = (z * Math.sin(theta) + 0.006).toFixed(5);
  return {
    longitude: lng,
    latitude: lat
  };
};

export { qqMapToBMap };
