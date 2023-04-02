export interface IMenuItem {
  name: string;
  url?: string;
  children?: IMenuItem[];
}

export const menuData: IMenuItem[] = [
  { name: "Features", url: "/#features" },
  { name: "Mission", url: "/about/mission" },
  { name: "Team", url: "/about/team" },
  { name: "Pricing", url: "/#pricing" },
];
