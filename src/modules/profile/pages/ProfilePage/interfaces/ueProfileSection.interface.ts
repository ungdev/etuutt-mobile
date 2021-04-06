import { ReactNode } from 'react';

export interface UeTable {
  title: string;
  color: string;
}

export interface UeProfileSectionProps {
  title: string;
  value: Array<string>;
  icon: ReactNode;
}
