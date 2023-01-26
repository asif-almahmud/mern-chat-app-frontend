export interface IUser {
  name: string;
  email: string;
}

export interface IChat {
  isGroupChat: boolean;
  users: IUser[];
  _id: string;
  chatName: string;
}
