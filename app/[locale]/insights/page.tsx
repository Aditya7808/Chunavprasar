import { redirect } from 'next/navigation';

export default function InsightsPage({
  params,
}: {
  params: { locale: string };
}) {
  redirect(`/${params.locale}#gallery`);
}
