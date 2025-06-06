import { VideoInfo } from './video';

export type AxiosResponse<T = {}> = T & {
  success?: string;
  error?: string;
};

export type DownloadResponse = {
  url: string;
  status: VideoInfo['status'] | 'already' | 'restart';
  timestamp: number;
};

export type Cookie = {
  // initVector: string;
  secretKey: string;
  // content: string;
};

export type DiskSpace = {
  total: number;
  free: number;
  usage: number;
  usageInPercentage: number;
};

export type PageContext<T> = {
  params: T;
  searchParams: Record<string, string | string[]>;
};

export type WithoutNullableKeys<T> = {
  [Key in keyof T]-?: NonNullable<T[Key]>;
};
