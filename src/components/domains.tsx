'use client';

import { useEffect, useState } from 'react';
import { Domain } from '@/types/domain';

export default function Domains() {
  const [domain, setDomain] = useState<Domain | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDomain = async () => {
      try {
        const response = await fetch('/api/domains');
        if (!response.ok) throw new Error('Failed to fetch domain');
        const data = await response.json();
        setDomain(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };
    fetchDomain();
  }, []);

  if (loading) return <div>Loading domain...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!domain) return <div>No domain found.</div>;

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Latest Working Domain</h2>
      <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
        <a
          href={domain.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:text-blue-800"
        >
          {domain.url}
        </a>
        <div className="text-sm text-gray-500 mt-1">
          Last checked: {new Date(domain.lastChecked).toLocaleString()}
        </div>
        <div className="text-sm text-gray-400">{domain.note}</div>
      </div>
    </div>
  );
} 