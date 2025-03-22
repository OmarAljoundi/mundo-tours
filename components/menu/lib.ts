export interface MenuItem {
  name: string;
  url?: string;
  external?: boolean;
  subMenu?: Omit<MenuItem, "subMenu">[];
}
