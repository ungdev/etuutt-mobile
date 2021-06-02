export interface DateAnnalesUE {
  date: string;
  timezone_type: number;
  timezone: string;
}

export interface SenderAnnalesUE {
  login: string;
  fullName: string;
}

export type LinkType = 'self' | 'orga.image';

export interface Link {
  rel: LinkType;
  uri: string;
}

export interface DataUEAnnales {
  id: string;
  createdAt: DateAnnalesUE;
  semester: number;
  sender: SenderAnnalesUE;
  type: string;
  validated: string;
  _links: Link[];
}

export interface GetUEAnnales {
  reviews: DataUEAnnales[];
}
