import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import Animated, { Easing } from 'react-native-reanimated';
import { bin, useTransition } from 'react-native-redash';
import { Arobase, GlobeWeb, Phone } from '../../../../../../components/Icons';
import { Padding, palette, radius, typos } from '../../../../../../theme/theme';
import i18n from '../../../../../internationalization/service/i18n.service';
import { checkFunction } from '../../services/checkFunction.service';
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
  logoContainer: {
    width: '15%',
    justifyContent: 'center',
    alignContent: 'stretch',
    paddingHorizontal: Padding.small,
  },
  infosContainer: {
    width: '85%',
    paddingHorizontal: Padding.medium,
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
  activeHeader: {
    borderTopLeftRadius: radius.small,
    borderTopRightRadius: radius.small,
  },
  inactiveHeader: {
    borderRadius: radius.small,
  },
});

interface ContactsAssosProps {
  mail: string;
  phone: string;
  website: string;
}

export const ContactsAssos: FunctionComponent<ContactsAssosProps> = ({ mail, phone, website }) => {
  const [activeSections, setActiveSections] = useState([]);
  const multipleSelect = true; // True: Expand multiple at a time // False: One can be expand at a time
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
    setOpen((prev) => !prev);
  };
  const [open, setOpen] = useState(false);
  const transition = useTransition(open, not(bin(open)), bin(open), 400, Easing.inOut(Easing.ease));
  const bottomRadiusContent = interpolate(transition, {
    inputRange: [0, 16 / 400],
    outputRange: [8, 0],
  });

  const CONTENT = [
    [
      i18n.t('assos.assoDetail.contacts'),
      [
        {
          title: 'Téléphone',
          value: phone,
          icon: <Phone color={palette.white} size={40} />,
          onPress: 'call',
        },
        {
          title: 'Mail',
          value: mail,
          icon: <Arobase color={palette.white} size={45} />,
          onPress: 'mail',
        },
        {
          title: 'Site Internet',
          value: website,
          icon: <GlobeWeb color={palette.white} size={40} />,
          onPress: 'website',
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
                <TouchableOpacity
                  style={styles.itemContainer}
                  onPress={() => checkFunction(entries.onPress, entries.value)}
                >
                  <View style={styles.logoContainer}>{entries.icon}</View>

                  <View style={styles.infosContainer}>
                    <Text style={styles.title}>{entries.title}</Text>
                    <Text style={styles.text}>{entries.value}</Text>
                  </View>
                </TouchableOpacity>
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
