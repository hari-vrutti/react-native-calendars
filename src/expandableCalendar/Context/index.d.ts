import React from 'react';
import { UpdateSources } from '../commons';
export interface CalendarContextProps {
    date: string;
    prevDate: string;
    setDate: (date: string, source: UpdateSources) => void;
    updateSource: UpdateSources;
    setDisabled: (disable: boolean) => void;
    onSwipeWeek?: (month_name: string, year_number: string) => void;
    numberOfDays?: number;
    timelineLeftInset?: number;
}
declare const CalendarContext: React.Context<CalendarContextProps>;
export default CalendarContext;
