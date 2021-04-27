import React, { FunctionComponent } from 'react';
import { IconProps } from '../../../../../../components/Icons/Icons.interface';
import { ListAccordion } from './components/ListAccordion.component';

interface TabItem {
  icon?: FunctionComponent<IconProps>;
  name?: string;
  value: string;
  onPress: string;
}

interface AccordionProps {
  title: string;
  list: TabItem[];
}

export const Accordion: FunctionComponent<AccordionProps> = ({ title, list }) => {
  return <ListAccordion title={title} items={list} />;
};
