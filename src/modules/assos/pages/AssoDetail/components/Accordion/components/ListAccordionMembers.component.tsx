import React, { FunctionComponent, useState } from 'react';
import { StyleSheet, Text, TouchableWithoutFeedback } from 'react-native';
import Animated, { Easing } from 'react-native-reanimated';
import { bin, bInterpolate, useTransition } from 'react-native-redash';
import { IconProps } from '../../../../../../../components/Icons/Icons.interface';
import { palette } from '../../../../../../../theme/theme';
import { Chevron } from './Chevron.component';
import { ListItemAccordion, LIST_ITEM_HEIGHT } from './ListItemAccordion.component';

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

interface TabItem {
  icon?: FunctionComponent<IconProps>;
  name?: string;
  value: string;
  onPress: string;
}

interface ListAccordionProps {
  title: string;
  items: any;
  id: number;
}

export const ListAccordionMembers: FunctionComponent<ListAccordionProps> = ({
  title,
  items,
  id,
}) => {
  const calculate = (items) => {
    let size = 0;
    items.forEach((member) => {
      if (member.group.id === id) {
        size = size + 1;
      }
    });

    return size;
  };

  const [open, setOpen] = useState(false);
  const transition = useTransition(open, not(bin(open)), bin(open), 400, Easing.inOut(Easing.ease));
  const height = bInterpolate(transition, 0, LIST_ITEM_HEIGHT * calculate(items));
  const bottomRadius = interpolate(transition, {
    inputRange: [0, 16 / 400],
    outputRange: [8, 0],
  });

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
        {items
          .filter((member) => member.group.id === id)
          .sort((a, b) => {
            if (a.role > b.role) return 1;
            if (a.role < b.role) return -1;
            return 0;
          })
          .map((member) => (
            <ListItemAccordion
              Icon={member.icon}
              title={member.role}
              value={member._embed.user.fullName}
              key={member._embed.user.studentId}
              isLast={false}
              onPress={member._embed.user.onPress}
            />
          ))}
      </Animated.View>
    </>
  );
};
