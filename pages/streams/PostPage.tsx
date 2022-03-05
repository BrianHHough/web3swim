import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  return <div>Stream #{router.query.id}</div>;
}