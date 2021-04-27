import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconProps } from '../../../../../../../components/Icons/Icons.interface';
import { Padding, palette } from '../../../../../../../theme/theme';
import { checkFunction } from '../../../services/checkFunction.service';
export const LIST_ITEM_HEIGHT = 57;

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.blue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Padding.small,
    borderTopWidth: 1,
    borderColor: palette.white,
    height: LIST_ITEM_HEIGHT,
    width: '100%',
  },
  title: {
    fontSize: 16,
    color: palette.white,
  },
  text: {
    fontSize: 14,
    color: palette.white,
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  logoContainer: {
    width: '15%',
    justifyContent: 'center',
    alignContent: 'stretch',
    paddingHorizontal: Padding.medium,
  },
  infosContainer: {
    width: '85%',
    paddingHorizontal: Padding.medium,
  },
  infosContainerWithoutIcon: {
    width: '100%',
    paddingHorizontal: Padding.medium,
  },
});

const iconSize = '90%';

interface ListItemAccordionProps {
  onPress: string;
  Icon?: FunctionComponent<IconProps>;
  title?: string;
  value: string;
  key?: number;
  isLast?: boolean;
}

export const ListItemAccordion: FunctionComponent<ListItemAccordionProps> = ({
  onPress,
  Icon,
  title,
  value,
  isLast,
}) => {
  const bottomRadius = isLast ? 8 : 0;
  if (value === null || value === '' || value === 'undefined') {
    return null;
  } else if (Icon === undefined || title === undefined) {
    return (
      <View
        style={[
          styles.container,
          {
            borderBottomLeftRadius: bottomRadius,
            borderBottomRightRadius: bottomRadius,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => checkFunction(onPress, value)}
        >
          <View style={styles.infosContainerWithoutIcon}>
            <Text style={styles.text}>{value}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View
        style={[
          styles.container,
          {
            borderBottomLeftRadius: bottomRadius,
            borderBottomRightRadius: bottomRadius,
          },
        ]}
      >
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => checkFunction(onPress, value)}
        >
          <View style={styles.logoContainer}>
            <Icon size={iconSize} color={palette.white} />
          </View>

          <View style={styles.infosContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.text}>{value}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
};
