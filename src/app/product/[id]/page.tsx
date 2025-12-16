import ProductDetailPage from "@/components/pages/ProductDetail";

export default function ProductDetail({ params }: { params: { id: string } }) {
  return <ProductDetailPage id={params.id} />;
}
