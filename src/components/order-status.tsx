type OrderStatus =
  | 'pending'
  | 'canceled'
  | 'processing'
  | 'delivering'
  | 'delivered'

interface OrderStatusProps {
  status: OrderStatus
}

const orderStatusMap: Record<OrderStatus, string> = {
  pending: 'Pendente',
  canceled: 'Cancelado',
  delivered: 'Entregue',
  delivering: 'Em entrega',
  processing: 'Em preparo',
}

export function OrderStatus({ status }: OrderStatusProps) {
  return (
    <div className="flex items-center gap-2">
      <span
        data-testid="badge"
        data-pending={status === 'pending'}
        data-canceled={status === 'canceled'}
        data-delivered={status === 'delivered'}
        data-delivering={status === 'delivering'}
        data-processing={status === 'processing'}
        className="0 h-2 w-2 rounded-full data-[canceled=true]:bg-rose-500 data-[delivered=true]:bg-emerald-500 data-[delivering=true]:bg-amber-500 data-[pending=true]:bg-slate-400 data-[processing=true]:bg-amber-500"
      />
      <span className="font-medium text-muted-foreground">
        {orderStatusMap[status]}
      </span>
    </div>
  )
}
