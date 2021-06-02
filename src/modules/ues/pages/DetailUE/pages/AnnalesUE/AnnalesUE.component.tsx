import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import * as Animatable from 'react-native-animatable';
import Accordion from 'react-native-collapsible/Accordion';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { LoadingPage } from '../../../../../../components/LoadingPage';
import { paths } from '../../../../../../navigation/paths';
import { Marging, Padding, palette, radius, typos } from '../../../../../../theme/theme';
import { Header } from '../../../../../assos/pages/components/Header.component';
import i18n from '../../../../../internationalization/service/i18n.service';
import { useUEAnnales } from './hooks/useUEannales.hook';

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.blue,
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: palette.white,
  },
  text: {
    fontSize: typos.xs.fontSize,
    textAlign: 'center',
    color: palette.black,
    marginTop: Marging.large,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: Padding.small,
    width: '98%',
    height: 50,
    marginTop: Marging.small,
    backgroundColor: palette.blue,
  },
  headerText: {
    textAlign: 'center',
    fontSize: typos.s.fontSize,
    color: palette.white,
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    padding: Padding.small,
    paddingVertical: Padding.large,
    width: '98%',
    backgroundColor: palette.curiousBlue,
    flexDirection: 'row',
  },
  contentTextLeft: {
    width: '50%',
    textAlign: 'left',
    fontSize: typos.s.fontSize,
    color: palette.white,
    paddingHorizontal: Padding.small,
  },
  contentTextRight: {
    width: '50%',
    textAlign: 'right',
    fontSize: typos.s.fontSize,
    color: palette.white,
    paddingHorizontal: Padding.small,
  },
  activeHeader: {
    borderTopLeftRadius: radius.medium,
    borderTopRightRadius: radius.medium,
  },
  inactiveHeader: {
    borderRadius: radius.medium,
  },
  activeContent: {},
  inactiveContent: {},
  noAnnales: {
    width: '100%',
  },
});

export const UEAnnales: FunctionComponent = (route) => {
  const ue = route.route.params.destination;
  const nameUE = route.route.params.nameUE;
  const { data, error, isLoading } = useUEAnnales(ue);
  const { navigate } = useNavigation();
  const onButtonBackPress = (destination: string) => {
    navigate(destination);
  };
  const [activeSections, setActiveSections] = useState([]);
  const multipleSelect = false; // True: Expand multiple at a time // False: One can be expand at a time
  const setSections = (sections) => {
    setActiveSections(sections.includes(undefined) ? [] : sections);
  };

  useEffect(() => {
    if (error !== undefined) {
      //TODO service Alert(error)
    }
  }, [error]);

  const renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.activeHeader : styles.inactiveHeader]}
        transition="backgroundColor"
      >
        <Text style={styles.headerText}>{section[0]}</Text>
      </Animatable.View>
    );
  };

  const translate = (type) => {
    switch (type) {
      case 'final':
        return 'Final';
      case 'midterm':
        return 'Médian';
      case 'partiel':
        return 'Partiel';
      case 'partiel_1':
        return 'Partiel 1';
      case 'partiel_2':
        return 'Partiel 2';
      case 'dm':
        return 'Devoir Maison';
      default:
        return type;
    }
  };

  const onButtonPressAnnalesViewer = (destination: string, semester: string, type: string) => {
    navigate(paths.ue.annalesUEViewer.name, { destination, semester, type });
  };

  const renderContent = (section, _, isActive) => {
    return (
      <>
        {section[1].map((entries, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              onButtonPressAnnalesViewer(entries._links[0].uri, section[0], translate(entries.type))
            }
          >
            <Animatable.View
              duration={400}
              style={[styles.content, isActive ? styles.activeContent : styles.inactiveContent]}
              transition="backgroundColor"
            >
              <Animatable.Text
                animation={isActive ? 'slideInDown' : undefined}
                style={styles.contentTextLeft}
              >
                {translate(entries.type)}
              </Animatable.Text>
              <Animatable.Text
                animation={isActive ? 'slideInDown' : undefined}
                style={styles.contentTextRight}
              >
                {entries.sender.fullName}
              </Animatable.Text>
            </Animatable.View>
          </TouchableOpacity>
        ))}
      </>
    );
  };

  const sortEntries = (a, b) => {
    if (a[0].substr(1) > b[0].substr(1)) return -1;
    if (a[0].substr(1) < b[0].substr(1)) return 1;
    if (a[0].charAt(0) > b[0].charAt(0)) return 1;
    if (a[0].charAt(0) < b[0].charAt(0)) return -1;

    return 0;
  };

  if (isLoading === true) {
    return <LoadingPage />;
  } else if (data === undefined) {
    return <View />;
  } else {
    var filteredDataAnnales = [];
    data.reviews.forEach((review) => {
      if (!filteredDataAnnales[review.semester]) filteredDataAnnales[review.semester] = [review];
      else filteredDataAnnales[review.semester].push(review);
    });

    filteredDataAnnales = Object.entries(filteredDataAnnales).sort(sortEntries);

    return (
      <>
        <TouchableWithoutFeedback onPress={() => onButtonBackPress(paths.ue.detailUE.name)}>
          <Header bigtitle={nameUE + ' - ' + i18n.t('ue.annalesUE.title')} />
        </TouchableWithoutFeedback>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <ScrollView>
              <Accordion
                activeSections={activeSections}
                sections={filteredDataAnnales}
                touchableComponent={TouchableOpacity}
                expandMultiple={multipleSelect}
                renderHeader={renderHeader}
                renderContent={renderContent}
                duration={400}
                onChange={setSections}
              />
              {filteredDataAnnales.length === 0 && (
                <View style={styles.noAnnales}>
                  <Text style={styles.text}>{i18n.t('ue.annalesUE.noAnnales')}</Text>
                </View>
              )}
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  }
};
