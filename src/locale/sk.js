// Slovak [sk]
import dayjs from 'dayjs'

function plural(n) {
  return (n > 1) && (n < 5) && (~~(n / 10) !== 1) // eslint-disable-line
}

/* eslint-disable */
function translate(number, withoutSuffix, key, isFuture) {
  const result = `${number} `
  switch (key) {
    case 's': // a few seconds / in a few seconds / a few seconds ago
      return (withoutSuffix || isFuture) ? 'pár sekúnd' : 'pár sekundami'
    case 'm': // a minute / in a minute / a minute ago
      return withoutSuffix ? 'minúta' : (isFuture ? 'minútu' : 'minútou')
    case 'mm': // 9 minutes / in 9 minutes / 9 minutes ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'minúty' : 'minút')
      }
      return `${result}minútami`
    case 'h': // an hour / in an hour / an hour ago
      return withoutSuffix ? 'hodina' : (isFuture ? 'hodinu' : 'hodinou')
    case 'hh': // 9 hours / in 9 hours / 9 hours ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'hodiny' : 'hodín')
      }
      return `${result}hodinami`
    case 'd': // a day / in a day / a day ago
      return (withoutSuffix || isFuture) ? 'deň' : 'dňom'
    case 'dd': // 9 days / in 9 days / 9 days ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'dni' : 'dní')
      }
      return `${result}dňami`
    case 'M': // a month / in a month / a month ago
      return (withoutSuffix || isFuture) ? 'mesiac' : 'mesiacom'
    case 'MM': // 9 months / in 9 months / 9 months ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'mesiace' : 'mesiacov')
      }
      return `${result}mesiacmi`
    case 'y': // a year / in a year / a year ago
      return (withoutSuffix || isFuture) ? 'rok' : 'rokom'
    case 'yy': // 9 years / in 9 years / 9 years ago
      if (withoutSuffix || isFuture) {
        return result + (plural(number) ? 'roky' : 'rokov')
      }
      return `${result}rokmi`
  }
}
/* eslint-enable */
const locale = {
  name: 'sk',
  weekdays: 'Nedeľa_Pondelok_Utorok_Streda_Štvrtok_Piatok_Sobota'.split('_'),
  weekdaysShort: 'Ne_Po_Ut_St_Št_Pi_So'.split('_'),
  weekdaysMin: 'Ne_Po_Ut_St_Št_Pi_So'.split('_'),
  months: 'Január_Február_Marec_Apríl_Máj_Jún_Júl_August_September_Október_November_December'.split('_'),
  monthsShort: 'Jan_Feb_Mar_Apr_Máj_Jún_Júl_Aug_Sep_Okt_Nov_Dec'.split('_'),
  weekStart: 1,
  yearStart: 4,
  ordinal: n => `${n}.`,
  formats: {
    LT: 'H:mm',
    LTS: 'H:mm:ss',
    L: 'DD.MM.YYYY',
    LL: 'D. MMMM YYYY',
    LLL: 'D. MMMM YYYY H:mm',
    LLLL: 'dddd D. MMMM YYYY H:mm',
    l: 'D. M. YYYY'
  },
  relativeTime: {
    future: 'za %s', // Should be `o %s` (change when moment/moment#5408 is fixed)
    past: 'pred %s',
    s: translate,
    m: translate,
    mm: translate,
    h: translate,
    hh: translate,
    d: translate,
    dd: translate,
    M: translate,
    MM: translate,
    y: translate,
    yy: translate
  }
}

dayjs.locale(locale, null, true)

export default locale
