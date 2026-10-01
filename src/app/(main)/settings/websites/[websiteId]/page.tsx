import type { Metadata } from 'next';
import { getWebsite } from '@/queries/prisma/website';
import { WebsiteSettingsPage } from './WebsiteSettingsPage';

export default async function ({ params }: { params: Promise<{ websiteId: string }> }) {
  const { websiteId } = await params;
  const website = await getWebsite(websiteId);

  if (!website) {
    return null;
  }

  return <WebsiteSettingsPage websiteId={websiteId} />;
}

export const metadata: Metadata = {
  title: 'Website',
};
