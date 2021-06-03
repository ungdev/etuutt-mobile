import { useNavigation } from '@react-navigation/core';
import React, { FunctionComponent, useEffect } from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Heart } from '../../../../components/Icons';
import { LoadingPage } from '../../../../components/LoadingPage';
import { paths } from '../../../../navigation/paths';
import { Marging, Padding, palette, radius, typos } from '../../../../theme/theme';
import { Header } from '../../../assos/pages/components/Header.component';
import i18n from '../../../internationalization/service/i18n.service';
import { useUEDetails } from '../../hooks/useUEdetail.hook';
import { changeColor } from '../../service/changeColors.service';

const isAutumnAvailable = (semester: boolean) => {
  let resultat: string;
  if ((semester = true)) {
    resultat = i18n.t('ue.detailUE.autumn');
  } else {
    resultat = 'fggg';
  }

  return resultat;
};

const isSpringAvailable = (semester: boolean) => {
  let resultat: string;
  if ((semester = true)) {
    resultat = i18n.t('ue.detailUE.spring');
  } else {
    resultat = '';
  }

  return resultat;
};

const checkMinor = (minor: string) => {
  if (minor != '') {
    return (
      <>
        <Text style={styles.text}>{i18n.t('ue.detailUE.minor')}</Text>
        <Text style={styles.text}>{minor}</Text>
      </>
    );
  }
};

const checkAntecedent = (antecedents: string) => {
  if (antecedents != '') {
    return (
      <>
        <Text style={styles.text}>{i18n.t('ue.detailUE.antecedents')}</Text>
        <Text style={styles.text}>{antecedents}</Text>
      </>
    );
  }
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: palette.blue,
  },
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: palette.white,
  },
  mainInfos: {
    width: '98%',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  title: {
    width: '100%',
  },
  titleText: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: palette.black,
    marginTop: Marging.medium,
  },
  favoris: {
    alignItems: 'center',
    marginVertical: Marging.medium,
  },
  containerInfosBig: {
    width: '97%',
    padding: Padding.small,
    borderRadius: radius.extraSmall,
    flexDirection: 'column',
    alignSelf: 'center',
    marginBottom: Marging.small,
  },
  textTitle: {
    fontSize: typos.s.fontSize,
    textAlign: 'justify',
    color: palette.white,
    fontWeight: 'bold',
    marginBottom: Marging.small,
  },
  textCapital: {
    fontSize: typos.s.fontSize,
    textAlign: 'justify',
    color: palette.white,
    textTransform: 'uppercase',
  },
  text: {
    fontSize: typos.xs.fontSize,
    textAlign: 'justify',
    color: palette.white,
  },
  textRight: {
    width: '50%',
    fontSize: typos.xs.fontSize,
    textAlign: 'right',
    color: palette.white,
  },
  textLeft: {
    width: '50%',
    fontSize: typos.xs.fontSize,
    textAlign: 'left',
    color: palette.white,
  },
  textButton: {
    fontSize: typos.s.fontSize,
    textAlign: 'center',
    color: palette.white,
    fontWeight: 'bold',
    paddingVertical: Padding.small,
  },
  containerSecond: {
    width: '97%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginBottom: Marging.small,
  },
  containerInfosSmall: {
    height: 88,
    width: '49%',
    padding: Padding.small,
    borderRadius: radius.extraSmall,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  button: {
    width: '49%',
    padding: Padding.small,
    borderRadius: radius.extraSmall,
    flexDirection: 'column',
    alignSelf: 'center',
  },
  margin: {
    marginRight: '2%',
  },
  flexDirectionRow: {
    flexDirection: 'row',
  },
  containerNoInfos: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    backgroundColor: palette.white,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textNoInfos: {
    justifyContent: 'center',
    textAlign: 'center',
    color: palette.black,
    padding: Padding.large,
  },
  image: {
    resizeMode: 'cover',
    height: 200,
    width: 200,
  },
});

export const UEDetail: FunctionComponent = (route) => {
  const ue = route.route.params.destination;
  const { data, error, isLoading } = useUEDetails(ue);
  const { navigate } = useNavigation();
  const onButtonPressComments = (destination: string, nameUE: string) => {
    navigate(paths.ue.commentsUE.name, { destination, nameUE });
  };
  const onButtonPressAnnales = (destination: string, nameUE: string) => {
    navigate(paths.ue.annalesUE.name, { destination, nameUE });
  };
  const onButtonBackPress = (destination: string) => {
    navigate(destination);
  };
  useEffect(() => {
    if (error !== undefined) {
      //TODO service Alert(error)
    }
  }, [error]);

  if (isLoading === true) {
    return <LoadingPage />;
  } else if (data === undefined) {
    return (
      <>
        <TouchableWithoutFeedback onPress={() => onButtonBackPress(paths.ue.name)}>
          <Header bigtitle={ue} />
        </TouchableWithoutFeedback>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.containerNoInfos}>
            <Image style={styles.image} source={require('../../../../../assets/homer_doh.png')} />
            <Text style={styles.textNoInfos}>{i18n.t('ue.detailUE.noInfos')}</Text>
          </View>
        </SafeAreaView>
      </>
    );
  } else {
    return (
      <>
        <TouchableWithoutFeedback onPress={() => onButtonBackPress(paths.ue.name)}>
          <Header bigtitle={data.code} />
        </TouchableWithoutFeedback>
        <SafeAreaView style={styles.safeArea}>
          <View style={styles.container}>
            <ScrollView style={styles.container}>
              <View style={styles.mainInfos}>
                <View style={styles.title}>
                  <Text style={styles.titleText}>{data.name}</Text>
                </View>
                <TouchableOpacity style={styles.favoris}>
                  <Heart color={palette.white} secondaryColor={palette.black} size={40} />
                </TouchableOpacity>
              </View>

              <View style={[styles.containerInfosBig, changeColor('first', data.category)]}>
                <Text style={styles.textCapital}>{data.diplomes}</Text>
                <Text style={styles.textCapital}>{data.category}</Text>
                <View style={styles.flexDirectionRow}>
                  <View style={styles.flexDirectionRow}>{checkAntecedent(data.antecedents)}</View>
                </View>
                <View style={styles.flexDirectionRow}>{checkMinor(data.mineurs)}</View>
              </View>

              <View style={styles.containerSecond}>
                <View
                  style={[
                    styles.containerInfosSmall,
                    changeColor('second', data.category),
                    styles.margin,
                  ]}
                >
                  <Text style={styles.text}>{isAutumnAvailable(data.automne)}</Text>
                  <Text style={styles.text}>{isSpringAvailable(data.printemps)}</Text>
                  <Text style={styles.text}>{''}</Text>
                  <Text style={styles.text}>
                    {data.credits} {i18n.t('ue.detailUE.ECTS')}
                  </Text>
                </View>
                <View style={[styles.containerInfosSmall, changeColor('second', data.category)]}>
                  <View style={styles.flexDirectionRow}>
                    <Text style={styles.textLeft}>{i18n.t('ue.detailUE.course')}</Text>
                    <Text style={styles.textRight}>{data.cm} H</Text>
                  </View>
                  <View style={styles.flexDirectionRow}>
                    <Text style={styles.textLeft}>TD</Text>
                    <Text style={styles.textRight}>{data.td} H</Text>
                  </View>
                  <View style={styles.flexDirectionRow}>
                    <Text style={styles.textLeft}>TP</Text>
                    <Text style={styles.textRight}>{data.tp} H</Text>
                  </View>
                  <View style={styles.flexDirectionRow}>
                    <Text style={styles.textLeft}>THE</Text>
                    <Text style={styles.textRight}>{data.the} H</Text>
                  </View>
                </View>
              </View>

              <View style={[styles.containerInfosBig, changeColor('second', data.category)]}>
                <Text style={styles.textTitle}>{i18n.t('ue.detailUE.objective')}</Text>
                <Text style={styles.text}>{data.objectifs}</Text>
              </View>

              <View style={[styles.containerInfosBig, changeColor('third', data.category)]}>
                <Text style={styles.textTitle}>{i18n.t('ue.detailUE.program')}</Text>
                <Text style={styles.text}>{data.programme}</Text>
              </View>

              <View style={styles.containerSecond}>
                <View style={[styles.button, changeColor('first', data.category), styles.margin]}>
                  <TouchableOpacity onPress={() => onButtonPressComments(data.slug, data.code)}>
                    <Text style={styles.textButton}>{i18n.t('ue.detailUE.comments')}</Text>
                  </TouchableOpacity>
                </View>

                <View style={[styles.button, changeColor('first', data.category), styles.margin]}>
                  <TouchableOpacity onPress={() => onButtonPressAnnales(data.slug, data.code)}>
                    <Text style={styles.textButton}>{i18n.t('ue.detailUE.annales')}</Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View style={[styles.button, changeColor('first', data.category)]}>
                <TouchableOpacity>
                  <Text style={styles.textButton}>{i18n.t('ue.detailUE.slot')}</Text>
                </TouchableOpacity>
              </View>

              <View>
                <Text>{''}</Text>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </>
    );
  }
};
