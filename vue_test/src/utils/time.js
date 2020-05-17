var time = {}
// eslint-disable-next-line no-extend-native
Date.prototype.format = function (format) {
  var o = {
    'M+': this.getMonth() + 1, // month
    'd+': this.getDate(), // day
    'h+': this.getHours(), // hour
    'm+': this.getMinutes(), // minute
    's+': this.getSeconds(), // second
    'q+': Math.floor((this.getMonth() + 3) / 3), // quarter
    'S': this.getMilliseconds() // millisecond
  }
  if (/(y+)/.test(format)) {
    format = format.replace(RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  for (var k in o) {
    if (new RegExp('(' + k + ')').test(format)) {
      format = format.replace(RegExp.$1,
        // eslint-disable-next-line eqeqeq
        RegExp.$1.length == 1 ? o[k]
          : ('00' + o[k]).substr(('' + o[k]).length))
    }
  }
  return format
}

time.getDateStr = {
  AddDay: function (AddDayCount) { // 可传负值，就为AddDayCount前
    var dd = new Date()
    dd.setDate(dd.getDate() + AddDayCount)// 获取AddDayCount天后的日期
    var y = dd.getFullYear()
    var m = dd.getMonth() + 1// 获取当前月份的日期
    var d = dd.getDate()
    if (m < 10) m = '0' + m
    if (d < 10) d = '0' + d
    return y + '-' + m + '-' + d
  },
  Current: function () {
    var dd = new Date()
    var y = dd.getFullYear()
    var m = dd.getMonth() + 1
    var d = dd.getDate()
    var h = dd.getHours()
    var mi = dd.getMinutes()
    var s = dd.getSeconds()
    return (y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s)
  },
  CurDate: function () { // 返回格式  2016-09-01
    var dd = new Date()
    var y = dd.getFullYear()
    var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1)
    var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
    return (y + '-' + m + '-' + d)
  },
  CurTime: function () { // 返回格式  2016-09-01T01:05:09
    var dd = new Date()
    var y = dd.getFullYear()
    var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1)
    var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
    var h = dd.getHours() < 10 ? '0' + dd.getHours() : dd.getHours()
    var mi = dd.getMinutes() < 10 ? '0' + dd.getMinutes() : dd.getMinutes()
    var s = dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds()
    return (y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s)
  },
  CurHours: function () { // 返回格式  2016-09-01T01:05:09
    var dd = new Date()
    var h = dd.getHours()
    return h
  },
  GetDate: function (val) {
    if (typeof (val) === 'string') val = val.replace('T', ' ').replace(/-/g, '/')
    var dd = new Date(val)
    var y = dd.getFullYear()
    var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1)// 获取当前月份的日期
    var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
    return y + '-' + m + '-' + d
  },
  GetTime: function (val) {
    if (typeof (val) === 'string') val = val.replace('T', ' ').replace(/-/g, '/')
    var dd = new Date(val)
    var y = dd.getFullYear()
    var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1)// 获取当前月份的日期
    var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
    var h = dd.getHours() < 10 ? '0' + dd.getHours() : dd.getHours()
    var mi = dd.getMinutes() < 10 ? '0' + dd.getMinutes() : dd.getMinutes()
    var s = dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds()
    return y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s
  },
  getDateAdd: function (AddDayCount, val) {
    if (!!val && typeof (val) === 'string') val = val.replace('T', ' ').replace(/-/g, '/')
    var dd = (val) ? new Date(val) : new Date()
    dd.setDate(dd.getDate() + AddDayCount)// 获取相对于val,AddDayCount天后的日期
    var y = dd.getFullYear()
    var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1)
    var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
    // var h = dd.getHours() < 10 ? "0" + dd.getHours() : dd.getHours();
    // var mi = dd.getMinutes() < 10 ? "0" + dd.getMinutes() : dd.getMinutes();
    // var s = dd.getSeconds() < 10 ? "0" + dd.getSeconds() : dd.getSeconds();
    // return (y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s);
    return (y + '-' + m + '-' + d)
  },
  getDay: function (val, AddCount) {
    // eslint-disable-next-line standard/array-bracket-even-spacing
    var week = ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六' ]
    if (typeof (val) === 'string') val = val.replace('T', ' ').replace(/-/g, '/')
    var dd = new Date(val)
    // eslint-disable-next-line no-extra-boolean-cast
    var AddDayCount = (!!AddCount) ? AddCount : 0
    dd.setDate(dd.getDate() + AddDayCount)
    var w = dd.getDay()
    return week[w]
  },
  getWeekOnDay: function (AddCount) {
    var current = this.CurDate()
    var dd = new Date(current)
    // eslint-disable-next-line no-extra-boolean-cast
    var AddDayCount = (!!AddCount) ? AddCount : 0
    dd.setDate(dd.getDate() + AddDayCount)
    // eslint-disable-next-line eqeqeq
    var w = dd.getDay() == 0 ? 6 : dd.getDay() - 1
    var date = this.AddDay(-w)
    return date
  },
  getMothOnDay: function () {
    var current = this.CurDate()
    var date = current.substr(0, 8) + '01'

    return date
  },
  getPreMonth: function () {
    var dayMSec = 24 * 3600 * 1000
    var today = new Date()
    var lastMonthFirstDay = new Date(today.getFullYear(), today.getMonth() - 1, 1)
    // 得到本月第一天
    var nowMonthFirstDay = new Date(today.getFullYear(), today.getMonth(), 1)
    // 得到上一个月的最后一天的毫秒值
    var lastMonthLastDayMSec = nowMonthFirstDay.getTime() - 1 * dayMSec
    var lastMonthLastDay = new Date(lastMonthLastDayMSec)
    return [lastMonthFirstDay.format('yyyy-MM-dd'), lastMonthLastDay.format('yyyy-MM-dd')]
  },
  getMonthDay: function (count, date) {
    var dayMSec = 24 * 3600 * 1000
    // eslint-disable-next-line no-redeclare
    var date = new Date(date)
    var lastMonthFirstDay = new Date(date.getFullYear(), date.getMonth() + 1 + count, 1)
    // 得到本月第一天
    var nowMonthFirstDay = new Date(date.getFullYear(), date.getMonth() + count, 1)
    // 得到上一个月的最后一天的毫秒值
    var lastMonthLastDayMSec = lastMonthFirstDay.getTime() - 1 * dayMSec
    var lastMonthLastDay = new Date(lastMonthLastDayMSec)
    return [nowMonthFirstDay.format('yyyy-MM-dd'), lastMonthLastDay.format('yyyy-MM-dd')]
  },
  AddHours: function (AddHoursCount) {
    var dd = new Date()
    dd.setHours(dd.getHours() + AddHoursCount)
    var y = dd.getFullYear()
    var m = (dd.getMonth() + 1) < 10 ? '0' + (dd.getMonth() + 1) : (dd.getMonth() + 1)// 获取当前月份的日期
    var d = dd.getDate() < 10 ? '0' + dd.getDate() : dd.getDate()
    var h = dd.getHours() < 10 ? '0' + dd.getHours() : dd.getHours()
    var mi = dd.getMinutes() < 10 ? '0' + dd.getMinutes() : dd.getMinutes()
    var s = dd.getSeconds() < 10 ? '0' + dd.getSeconds() : dd.getSeconds()
    return y + '-' + m + '-' + d + 'T' + h + ':' + mi + ':' + s
  },
  dateArray: function (sDate, eDate) {
    var newArr = [eDate]
    var _this = this
    var lisp = function () {
      var newDate = _this.getDateAdd(-1, newArr[newArr.length - 1])
      if (newDate >= sDate && newArr.length < 31) {
        newArr.push(newDate)
        lisp()
      }
    }
    lisp()
    return newArr
  },
  monthArray: function (sMonth, eMonth) {
    // eslint-disable-next-line no-redeclare
    var eMonth = eMonth + '-01'
    var newArr = [this.getMonthDay(0, eMonth)]
    var _this = this
    var lisp = function () {
      var newDate = _this.getMonthDay(-1, newArr[newArr.length - 1][0])
      if (newDate[0] >= (sMonth + '-01')) {
        newArr.push(newDate)
        lisp()
      }
    }
    lisp()
    return newArr
  },
  differDays: function (time1, time2) {
    return (Date.parse(time2.replace(/-/g, '/')) - Date.parse(time1.replace(/-/g, '/'))) / (1000 * 60 * 60 * 24)
  }
}

export default time
