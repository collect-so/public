export interface IMenuItem {
  name: string;
  url?: string;
  children?: IMenuItem[];
}

export const menuData: IMenuItem[] = [
  { name: "Docs", url: "https://docs.collect.so/" },
  { name: "Roadmap", url: "/company/roadmap" },
  { name: "Pricing", url: "/pricing" },
];
