import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../../style';
export default function styleConstructor(theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    dot: {
      width: 4,
      height: 4,
      marginTop: 1,
      marginHorizontal: 1,
      borderRadius: 2,
      opacity: 0,
      ...appStyle.dotStyle
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: appStyle.dotColor
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    disabledDot: {
      backgroundColor: appStyle.disabledDotColor
    },
    inactiveDot: {
      backgroundColor: appStyle.inactiveDotColor
    },
    todayDot: {
      backgroundColor: appStyle.todayDotColor
    },
    ...(theme['stylesheet.dot'] || {})
  });
}
