import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import Animated, { Easing } from 'react-native-reanimated';
import { bin, useTransition } from 'react-native-redash';
import HTML from 'react-native-render-html';
import { Padding, palette, radius, typos } from '../../../../../../theme/theme';
import i18n from '../../../../../internationalization/service/i18n.service';
import { Chevron } from '../Chevron.component';

const { not, interpolate } = Animated;

const styles = StyleSheet.create({
  header: {
    backgroundColor: palette.blue,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  headerText: {
    textAlign: 'center',
    fontSize: typos.xs.fontSize,
    color: palette.white,
    fontWeight: 'bold',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: Padding.small,
    paddingVertical: Padding.large,
    width: '100%',
    backgroundColor: palette.curiousBlue,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: palette.white,
  },
  itemContainer: {
    width: '100%',
    flexDirection: 'row',
  },
  infosContainer: {
    width: '100%',
    paddingHorizontal: Padding.medium,
  },
  text: {
    fontSize: typos.xs.fontSize,
    color: palette.white,
  },
  textBodyContainer: {
    fontSize: typos.xs.fontSize,
    color: palette.white,
    textAlign: 'justify',
    fontFamily: 'san Francisco',
  },
  activeHeader: {
    borderTopLeftRadius: radius.small,
    borderTopRightRadius: radius.small,
  },
  inactiveHeader: {
    borderRadius: radius.small,
  },
});

interface DescriptionAssosProps {
  description: string;
}

export const DescriptionAssos: FunctionComponent<DescriptionAssosProps> = ({ description }) => {
  const [activeSections, setActiveSections] = useState([]);
  const multipleSelect = true; // True: Expand multiple at a time // False: One can be expand at a time
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
    setOpen((prev) => !prev);
  };
  const [open, setOpen] = useState(false);
  const transition = useTransition(open, not(bin(open)), bin(open), 400, Easing.inOut(Easing.ease));

  const CONTENT = [
    [
      i18n.t('assos.assoDetail.description'),
      [
        {
          value: description,
        },
      ],
    ],
  ];

  const renderHeader = (section, _, isActive) => {
    return (
      <>
        <Animatable.View
          duration={400}
          style={[styles.header, isActive ? styles.activeHeader : styles.inactiveHeader]}
          transition="backgroundColor"
        >
          <Text style={styles.headerText}>{section[0]}</Text>
          <Chevron {...{ transition }} />
        </Animatable.View>
      </>
    );
  };

  const renderContent = (section, _, isActive) => {
    return (
      <>
        {section[1].map(
          (entries, index) =>
            entries.value !== null && (
              <Animatable.View
                key={index}
                duration={400}
                style={styles.content}
                animation={isActive ? 'fadeInDown' : undefined}
              >
                <View style={styles.infosContainer}>
                  <HTML baseFontStyle={styles.textBodyContainer} source={{ html: entries.value }} />
                </View>
              </Animatable.View>
            )
        )}
      </>
    );
  };

  return (
    <>
      <Accordion
        activeSections={activeSections}
        sections={CONTENT}
        touchableComponent={TouchableOpacity}
        expandMultiple={multipleSelect}
        renderHeader={renderHeader}
        renderContent={renderContent}
        duration={400}
        onChange={setSections}
      />
    </>
  );
};
