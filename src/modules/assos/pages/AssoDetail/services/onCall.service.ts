import { Alert, Linking } from 'react-native';
import i18n from '../../../../internationalization/service/i18n.service';

export const onCall = (phoneNumber: string) => {
  Alert.alert(i18n.t('services.askCall'), `${phoneNumber}`, [
    {
      text: i18n.t('services.actionCall'),
      onPress: () => Linking.openURL(`tel:${phoneNumber}`),
    },
    {
      text: i18n.t('services.actionMessage'),
      onPress: () => Linking.openURL(`sms:${phoneNumber}`),
    },
    { text: i18n.t('services.cancel') },
  ]);
};
