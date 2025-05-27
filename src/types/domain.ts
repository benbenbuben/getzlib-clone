export interface Domain {
  url: string;
  status: 'active' | 'inactive';
  lastChecked: string;
  source: string;
  note: string;
}

export interface DomainData {
  domains: Domain[];
  lastUpdated: string;
} 