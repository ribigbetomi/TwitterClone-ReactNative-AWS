import { Like } from "./src/API";

export type RootStackParamList = {
  Root: undefined;
  NewTweet: undefined;
  Fleet: undefined;
  NotFound: undefined;
  NewComment: undefined;
  CommentsScreen: undefined;
};

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Notifications: undefined;
  Messages: undefined;
};

export type HomeNavigatorParamList = {
  HomeScreen: undefined;
};

export type TabTwoParamList = {
  TabTwoScreen: undefined;
};

export type UserType = {
  id: string;
  name: string;
  username: string;
  image?: string;
  fleets?: any;
};

export type TweetType = {
  id: string;
  createdAt: string;
  user: UserType;
  content: string;
  image?: string;
  numberOfComments?: number;
  numberOfRetweets?: number;
  numberOfLikes?: number;
  likes?: any;
  comments?: any;
};

export type FleetType = {
  id: string;
  createdAt: string;
  user: UserType;
  type: string;
  text?: string;
  image?: string;
};
