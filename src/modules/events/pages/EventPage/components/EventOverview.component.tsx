import React, { FunctionComponent } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { palette, spacing } from '../../../../theme/theme';



export const EventOverview: FunctionComponent = () => {
  return 
  <ScrollView style={styles.dayEvents}>
          {dayEvents.length > 0 ? (
            dayEvents.map((event, index) =>
              event === 'empty' ? (
                <EventLine empty key={index}></EventLine>
              ) : (
                <EventLine
                  key={index}
                  category={event.category}
                  start={event.begin.date}
                  end={event.end.date}
                  image={this.getOrgaImageLink(event.orga)}
                  onPress={() =>
                    this.props.navigation.navigate('EventsDetails', { event })
                  }
                >
                  {event.title}
                </EventLine>
              )
            )
          ) : (
            <React.Fragment>
              <EventLine empty></EventLine>
              <EventLine empty></EventLine>
              <EventLine empty>Aucun événement ce jour</EventLine>
              <EventLine empty></EventLine>
              <EventLine empty></EventLine>
            </React.Fragment>
          )}
        </ScrollView>
  );
};
