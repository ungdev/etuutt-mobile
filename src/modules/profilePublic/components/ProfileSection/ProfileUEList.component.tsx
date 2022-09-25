import React, { FunctionComponent } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { HorizontalSpacer } from '../../../../components/HorizontalSpacer';
import { palette, radius, spacing, typos } from '../../../../theme/theme';
import i18n from '../../../internationalization/service/i18n.service';
import { UeProfileSectionProps } from '../../interfaces/ueProfileSection.interface';
import { Tag } from '../TagUe.component';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: palette.blue,
    borderRadius: radius.extraSmall,
    padding: spacing * 2,
    flexDirection: 'row',
  },
  leftContainer: { flex: 1 },
  rightContainer: {
    flex: 5,
    paddingLeft: spacing * 1,
  },
  title: {
    ...typos.mb,
    color: palette.white,
  },
  ues: {
    width: '100%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 5,
    alignItems: 'center',
  },
  noUE: {
    color: palette.white,
  },
});

export const ProfileUEList: FunctionComponent<UeProfileSectionProps> = ({ title, value, icon }) => {
  return (
    <>
      <HorizontalSpacer size={3} />
      <View style={styles.container}>
        <View style={styles.leftContainer}>{icon}</View>
        <View style={styles.rightContainer}>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.ues}>
            {value?.map((item) => {
              if (item !== '') {
                return (
                  <Tag key={item} code={item}>
                    {item}
                  </Tag>
                );
              } else {
                return (
                  <Text style={styles.noUE} key={item}>
                    {i18n.t('profile.section.noUE')}
                  </Text>
                );
              }
            })}
          </View>
        </View>
      </View>
      <HorizontalSpacer size={3} />
    </>
  );
};
