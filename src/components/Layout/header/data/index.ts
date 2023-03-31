export interface IMenuItem {
  name: string;
  url?: string;
  children?: IMenuItem[];
}

export const menuData: IMenuItem[] = [
  { name: "Features", url: "#features-section" },
  { name: "Mission", url: "/mission" },
  { name: "Team", url: "/team" },
  { name: "Pricing", url: "#pricing-section" },
];
