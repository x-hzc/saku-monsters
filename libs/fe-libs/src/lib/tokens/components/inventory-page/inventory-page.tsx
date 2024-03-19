import { useRouter } from '../../../routing/hooks/use-router';

export function InventoryPage() {
  const { goToHome } = useRouter();

  return (
    <div>
      <div>Inventory</div>
      <div onClick={goToHome} style={{ cursor: 'pointer' }}>
        Go to home
      </div>
    </div>
  );
}
