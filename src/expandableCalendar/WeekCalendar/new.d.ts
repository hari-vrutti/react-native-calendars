import React from 'react';
import { CalendarListProps } from '../../calendar-list';
export interface WeekCalendarProps extends CalendarListProps {
    /** whether to have shadow/elevation for the calendar */
    allowShadow?: boolean;
    disableOnPageChange?: boolean;
    onSwipeWeek?: (date: string) => void;
}
declare const WeekCalendar: (props: WeekCalendarProps) => React.JSX.Element;
export default WeekCalendar;
