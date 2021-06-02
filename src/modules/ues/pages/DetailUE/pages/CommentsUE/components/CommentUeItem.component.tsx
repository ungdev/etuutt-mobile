import moment from 'moment';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HTML from 'react-native-render-html';
import { Marging, Padding, palette, radius, typos } from '../../../../../../../theme/theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'center',
    padding: Padding.small,
    width: '100%',
    marginTop: Marging.small,
  },
  itemContainerHead: {
    width: '100%',
    flexDirection: 'row',
    backgroundColor: palette.blue,
    borderTopLeftRadius: radius.medium,
    borderTopRightRadius: radius.medium,
  },
  autorContainer: {
    width: '50%',
    justifyContent: 'center',
    alignContent: 'center',
    padding: Padding.medium,
  },
  textAutorContainer: {
    fontSize: typos.xs.fontSize,
    textTransform: 'uppercase',
    color: palette.white,
    textAlign: 'left',
  },
  textDateContainer: {
    fontSize: typos.xs.fontSize,
    textTransform: 'uppercase',
    color: palette.white,
    textAlign: 'right',
  },
  itemContainerBody: {
    width: '100%',
    backgroundColor: palette.curiousBlue,
    borderBottomLeftRadius: radius.medium,
    borderBottomRightRadius: radius.medium,
    padding: Padding.medium,
  },
  textBodyContainer: {
    fontSize: typos.xs.fontSize,
    color: palette.white,
    textAlign: 'justify',
  },
});

interface CommentUeItemProps {
  autor: string;
  body: any;
  date: string;
}

export const CommentUeItem: FunctionComponent<CommentUeItemProps> = ({ autor, body, date }) => {
  date = moment(date).format('DD/MM/YYYY');

  return (
    <View style={styles.container}>
      <View style={styles.itemContainerHead}>
        <View style={styles.autorContainer}>
          <Text style={styles.textAutorContainer}>{autor}</Text>
        </View>
        <View style={styles.autorContainer}>
          <Text style={styles.textDateContainer}>{date}</Text>
        </View>
      </View>

      <View style={styles.itemContainerBody}>
        <HTML baseFontStyle={styles.textBodyContainer} source={{ html: body }} />
      </View>
    </View>
  );
};
