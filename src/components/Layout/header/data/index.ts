export interface IMenuItem {
  name: string;
  url?: string;
  children?: IMenuItem[];
}

export const menuData: IMenuItem[] = [
  { name: "Docs", url: "https://docs.collect.so/" },
  { name: "Features", url: "#features" },
  { name: "Pricing", url: "#pricing" },
];
