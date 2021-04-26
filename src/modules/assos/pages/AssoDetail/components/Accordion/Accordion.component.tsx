import React, { FunctionComponent } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconProps } from '../../../../../../components/Icons/Icons.interface';
import { Padding } from '../../../../../../theme/theme';
import { ListAccordion } from './components/ListAccordion.component';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    padding: Padding.small,
  },
});

interface TabItem {
  icon: FunctionComponent<IconProps>;
  name: string;
  value: string;
}

interface AccordionProps {
  title: string;
  list: TabItem[];
}

export const Accordion: FunctionComponent<AccordionProps> = ({ title, list }) => {
  return (
    <View style={styles.container}>
      <ListAccordion title={title} items={list} />
    </View>
  );
};
