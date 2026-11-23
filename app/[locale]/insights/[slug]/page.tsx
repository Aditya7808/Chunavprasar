import { redirect } from 'next/navigation';

export default function InsightDetailPage({
  params,
}: {
  params: { locale: string; slug: string };
}) {
  redirect(`/${params.locale}#gallery`);
}
