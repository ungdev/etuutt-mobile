export interface DateCommentsUE {
  date: string;
  timezone_type: number;
  timezone: string;
}

export interface DataUEComments {
  slug: string;
  fullName: string;
  body: HTMLElement;
  createdAt: DateCommentsUE;
}

export interface GetUEComments {
  comments: DataUEComments[];
}
