import i18n from '../../../../internationalization/service/i18n.service';

export const translateRole = (role: string | undefined) => {
  switch (role) {
    case 'manager':
      return i18n.t('assos.assoDetail.role.manager');
    case 'president':
      return i18n.t('assos.assoDetail.role.president');
    case 'vice_president':
      return i18n.t('assos.assoDetail.role.vice_president');
    case 'secretary':
      return i18n.t('assos.assoDetail.role.secretary');
    case 'vice_secretary':
      return i18n.t('assos.assoDetail.role.vice_secretary');
    case 'treasurer':
      return i18n.t('assos.assoDetail.role.treasurer');
    case 'vice_treasurer':
      return i18n.t('assos.assoDetail.role.vice_treasurer');
    case 'member':
      return i18n.t('assos.assoDetail.role.member');
    default:
      return role;
  }
};
