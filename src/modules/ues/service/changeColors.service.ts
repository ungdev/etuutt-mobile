export const changeColor = (position: string, category: string) => {
  let resultat;
  if (category === 'cs') {
    if (position === 'first') {
      resultat = '#9C497C';
    } else if (position === 'second') {
      resultat = '#C06398';
    } else {
      resultat = '#F081C5';
    }
  } else if (category === 'tm') {
    if (position === 'first') {
      resultat = '#A65A67';
    } else if (position === 'second') {
      resultat = '#BE7582';
    } else {
      resultat = '#E47F91';
    }
  } else if (category === 'master') {
    if (position === 'first') {
      resultat = '#F18A48';
    } else if (position === 'second') {
      resultat = '#F6995C';
    } else {
      resultat = '#FBAD7A';
    }
  } else if (category === 'ec') {
    if (position === 'first') {
      resultat = '#FDB83A';
    } else if (position === 'second') {
      resultat = '#FFC760';
    } else {
      resultat = '#FFCC6F';
    }
  } else if (category === 'me') {
    if (position === 'first') {
      resultat = '#EAA533';
    } else if (position === 'second') {
      resultat = '#F2BC63';
    } else {
      resultat = '#EFC37B';
    }
  } else if (category === 'ht') {
    if (position === 'first') {
      resultat = '#F37546';
    } else if (position === 'second') {
      resultat = '#F0845B';
    } else {
      resultat = '#F29A79';
    }
  } else if (category === 'st') {
    if (position === 'first') {
      resultat = '#8C3580';
    } else if (position === 'second') {
      resultat = '#A5639C';
    } else {
      resultat = '#B490AF';
    }
  } else {
    resultat = 'yellow';
  }

  return { backgroundColor: resultat };
};
