import React, { FunctionComponent } from 'react';
import GestureRecognizer from 'react-native-swipe-gestures'
import { useGestureRecognizer } from './components/EventSection/useGestureRecognizer.hook';
import { EventOverview } from './components/EventOverview.component';
import { CalendarComponent } from './components/CalendarComponent.component';

export const EventPage: FunctionComponent = () => {
    const { swipeLeft, swipeRight } = useGestureRecognizer();
  return 
<GestureRecognizer
        onSwipeLeft={swipeLeft}
        onSwipeRight={swipeRight}
>
    <CalendarComponent/>
    <EventOverview/>
</GestureRecognizer>
  );
};
