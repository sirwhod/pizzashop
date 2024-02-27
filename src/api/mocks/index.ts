import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order-mock.ts'
import { cancelOrderMock } from './cancel-order-mock.ts'
import { deliverOrderMock } from './deliver-order-mock.ts'
import { dispatchOrderMock } from './dispatch-order-mock.ts'
import { getManagedRestaurantMock } from './get--managed-restaurant-mock.ts'
import { getDayOrdersAmountMock } from './get-day-orders-amount-mock'
import { getDailyRevenueInPeriodMock } from './get-day-revenue-in-period-mock.ts'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount-mock'
import { getMonthOrdersAmountMock } from './get-month-orders-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getOrderDetailsMock } from './get-orders-details-mock.ts'
import { getOrdersMock } from './get-orders-mock.ts'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getProfileMock } from './get-profile-mock.ts'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile-mock.ts'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') {
    return
  }

  await worker.start()
}
