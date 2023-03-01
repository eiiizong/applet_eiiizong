/**
 * 中国正常GCJ02坐标---->百度地图BD09坐标
 * 坐标转换 百度地图坐标转换成腾讯地图坐标
 * lng 腾讯经度
 * lat 腾讯纬度
 * 经度 > 纬度
 */
const bMapToQQMap = (lng, lat) => {
  if (lng == null || lng == "" || lat == null || lat == "") {
    return {
      longitude: lng,
      latitude: lat
    };
  }

  var x_pi = 3.14159265358979324;
  var x = parseFloat(lng) - 0.0065;
  var y = parseFloat(lat) - 0.006;
  var z = Math.sqrt(x * x + y * y) - 0.00002 * Math.sin(y * x_pi);
  var theta = Math.atan2(y, x) - 0.000003 * Math.cos(x * x_pi);
  lng = (z * Math.cos(theta)).toFixed(7);
  lat = (z * Math.sin(theta)).toFixed(7);

  return {
    longitude: lng,
    latitude: lat
  };
};

export { bMapToQQMap };
