export { default as TopMenu } from "./top-menu";
export { default as MobileTopMenu } from "./mobile-top-menu";
export { default as SlideMenu } from "./slide-menu";
export { default as MoreActionMenu } from "./more-action-menu";
export { default as TabsMenu } from "./tabs-menu";

export type { TopMenuProps } from "./top-menu";
export type { MobileTopMenuProps } from "./mobile-top-menu";
export type { SlideMenuProps } from "./slide-menu";
export type { MoreActionMenuProps } from "./more-action-menu";
export type { TabsMenuProps } from "./tabs-menu";

export interface MenuItem {
  name?: string;
  path?: string;
}
