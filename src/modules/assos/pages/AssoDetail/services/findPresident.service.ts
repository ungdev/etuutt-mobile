import i18n from '../../../../internationalization/service/i18n.service';

export const findPresident = (members) => {
  let resultat = i18n.t('assos.assoDetail.noPresident');
  members.forEach((member) => {
    if (member.role === 'president') {
      resultat = member._embed.user.fullName;
    }
  });

  return resultat;
};
