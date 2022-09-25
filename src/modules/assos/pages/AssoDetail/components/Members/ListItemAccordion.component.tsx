import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconProps } from '../../../../../../components/Icons/Icons.interface';
import { paths } from '../../../../../../navigation/paths';
import { Padding, palette, typos } from '../../../../../../theme/theme';
import { translateRole } from '../../services/translateRole.service';
export const LIST_ITEM_HEIGHT = 70;

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.curiousBlue,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: Padding.small,
    paddingVertical: Padding.large,
    borderBottomWidth: 1,
    borderColor: palette.white,
    height: LIST_ITEM_HEIGHT,
    width: '100%',
  },
  title: {
    fontSize: typos.xs.fontSize,
    fontWeight: 'bold',
    color: palette.white,
  },
  text: {
    fontSize: typos.xs.fontSize,
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
  pseudo: string;
  Icon?: FunctionComponent<IconProps>;
  title?: string;
  value: string;
  key?: number;
}

export const ListItemAccordion: FunctionComponent<ListItemAccordionProps> = ({
  pseudo,
  Icon,
  title,
  value,
}) => {
  const { navigate } = useNavigation();
  const onGoToProfilPublic = (destination: string) => {
    navigate(paths.profilePublic.name, { destination });
  };
  if (value === null || value === '' || value === 'undefined') {
    return null;
  } else if (Icon === undefined) {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemContainer} onPress={() => onGoToProfilPublic(pseudo)}>
          <View style={styles.infosContainerWithoutIcon}>
            <Text style={styles.title}>{translateRole(title)}</Text>
            <Text style={styles.text}>{value}</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.itemContainer} onPress={() => onGoToProfilPublic(pseudo)}>
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
