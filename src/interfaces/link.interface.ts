export type LinkType = 'self' | 'orga.image' | 'orga.members';

export interface Link {
  rel: LinkType;
  uri: string;
}
