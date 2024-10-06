export default function ProductCardSkeleton() {
  return (
    <div class="flex w-[310px] flex-col gap-4">
      <div class="skeleton h-[280px] w-full"></div>
      <div class="skeleton h-4 w-28"></div>
      <div class="skeleton h-4 w-full"></div>
      <div class="skeleton h-4 w-full"></div>
    </div>
  );
}
