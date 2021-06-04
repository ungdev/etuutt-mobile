import { onCall } from './onCall.service';
import { onOpenWebsite } from './onOpenWebsite.service';
import { onSendMail } from './onSendMail';

export const checkFunction = (onPress: string, value: string) => {
  if (onPress === 'call') {
    onCall(value);
  } else if (onPress === 'mail') {
    onSendMail(value);
  } else if (onPress === 'website') {
    onOpenWebsite(value);
  } else {
    return null;
  }
};
