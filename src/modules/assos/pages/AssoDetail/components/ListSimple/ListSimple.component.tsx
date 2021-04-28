import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { bin, bInterpolate, useTransition } from 'react-native-redash';
import { palette } from '../../../../../../theme/theme';
import { Chevron } from '../Accordion/components/Chevron.component';
import { LIST_ITEM_HEIGHT } from '../Accordion/components/ListItemAccordion.component';
import { ListItemSimple } from './ListItemSimple.component';

const { not, interpolate } = Animated;

const styles = StyleSheet.create({
  container: {
    backgroundColor: palette.blue,
    padding: 16,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 50,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: palette.white,
  },
  items: {
    overflow: 'hidden',
  },
});

interface ListSimpleProps {
  title: string;
  value: string;
}

export const ListSimple: FunctionComponent<ListSimpleProps> = ({ title, value }) => {
  const [open, setOpen] = useState(false);
  const transition = useTransition(open, not(bin(open)), bin(open), 400, Easing.inOut(Easing.ease));
  const height = bInterpolate(transition, 0, LIST_ITEM_HEIGHT * 5);
  const bottomRadius = interpolate(transition, {
    inputRange: [0, 16 / 400],
    outputRange: [8, 0],
  });

  if (value === null || value === '' || value === 'undefined') {
    return null;
  } else {
    return (
      <>
        <TouchableWithoutFeedback onPress={() => setOpen((prev) => !prev)}>
          <Animated.View
            style={[
              styles.container,
              {
                borderBottomLeftRadius: bottomRadius,
                borderBottomRightRadius: bottomRadius,
              },
            ]}
          >
            <Text style={styles.title}>{title}</Text>
            <Chevron {...{ transition }} />
          </Animated.View>
        </TouchableWithoutFeedback>
        <Animated.View style={[styles.items, { height }]}>
          <ListItemSimple value={value} />
        </Animated.View>
      </>
    );
  }
};
