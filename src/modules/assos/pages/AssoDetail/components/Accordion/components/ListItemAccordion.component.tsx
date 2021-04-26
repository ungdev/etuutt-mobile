import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconProps } from '../../../../../../../components/Icons/Icons.interface';
import { Padding, palette } from '../../../../../../../theme/theme';
export const LIST_ITEM_HEIGHT = 57;

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.blue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Padding.small,
    borderTopWidth: 1,
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
    width: '20%',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  infosContainer: {
    width: '80%',
  },
});

const iconSize = '90%';

interface ListItemAccordionProps {
  onPress?: () => void;
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
      <TouchableOpacity style={styles.itemContainer} onPress={onPress}>
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
};
