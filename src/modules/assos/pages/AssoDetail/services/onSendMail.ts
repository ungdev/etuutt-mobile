import { Alert, Linking } from 'react-native';
import i18n from '../../../../internationalization/service/i18n.service';

export const onSendMail = (mail: string | undefined) => {
  Alert.alert(i18n.t('services.askSendMail'), `${mail}`, [
    {
      text: i18n.t('services.ok'),
      onPress: () => Linking.openURL(`mailto:${mail}`),
    },
    { text: i18n.t('services.cancel') },
  ]);
};
