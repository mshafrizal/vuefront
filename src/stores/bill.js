import { defineStore } from 'pinia'

export const useBillStore = defineStore({
  id: 'bill',
  state: () => ({
    bills:  [
        {
            adminFee: "0.0",
            billid: 8,
            currency: 360,
            body: [
                "DENOM: 50000"
            ]
        },
        {
            adminFee: "0.0",
            billid: 8,
            currency: 360,
            body: [
                "DENOM: 100000"
            ]
        },
        {
            adminFee: "0.0",
            billid: 8,
            currency: 360,
            body: [
                "DENOM: 150000"
            ]
        },
    ]
  }),
  getters: {
    filteredBill: (state) => {
        return state.bills.filter(bill => {
            const body = bill.body[0].split(':')
            const denom = parseInt(body[1])
            return denom >= 100000
        }).map(bill => {
            const body = bill.body[0].split(':')
            const denom = parseInt(body[1])
            return denom
        })
    }
  }
})
