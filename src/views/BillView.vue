<template>
    <div class="container">
        <p>Original</p>
        <pre>{{ JSON.stringify(originalBills, null, 2)}}</pre>

        <p>Filtered</p>
        <pre>{{ JSON.stringify(filterdBills, null, 2)}}</pre>
    </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useBillStore } from '../stores/bill'

export default {
    setup() {
        const billStore = useBillStore()
        const originalBills = billStore.bills
        const filterdBills = billStore.filteredBill

        return {
            originalBills,
            filterdBills
        }
    }
}
</script>