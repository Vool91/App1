export type postmessType = {
  id: number;
  message: string;
  сount: number;
};
export type ContactType = {
  github: string | null;
  vk: string | null;
  facebook: string | null;
  instagram: string | null;
  twitter: string | null;
  website: string | null;
  youtube: string | null;
  mainLink: string | null;
};
export type PhotosType = {
  small: string | null;
  large: string | null;
};
export type profileType = {
  userId: number;
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string | null;
  contacts: ContactType;
  photos: PhotosType;
};
export type UsersType = {
  name: string ;
  id: number;

  photos: PhotosType| null ;
  status: null | string;
  followed: boolean;
};
