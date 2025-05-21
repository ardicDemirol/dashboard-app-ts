export interface StatItem {
  title: string;
  value: number;
  added: number;
  removed: number;
}

export const stats: StatItem[] = [
  { title: "Domains", value: 0, added: 0, removed: 0 },
  { title: "Hosts", value: 0, added: 0, removed: 0 },
  { title: "Pages", value: 2, added: 4, removed: 2 },
  { title: "SSL certificates", value: 44, added: 58, removed: 14 },
  { title: "ASNs", value: 0, added: 0, removed: 0 },
  { title: "IP blocks", value: 0, added: 0, removed: 0 },
  { title: "IP addresses", value: 0, added: 0, removed: 0 },
  { title: "Contacts", value: 0, added: 0, removed: 0 },
];
