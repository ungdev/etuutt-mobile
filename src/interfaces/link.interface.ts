export type LinkType = 'self' | 'orga.image';

export interface Link {
  rel: LinkType;
  uri: string;
}
