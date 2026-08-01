"use client"
import { Button } from '@/components/ui/button'
import { IRental } from '@/lib/types'
import { CreditCard } from 'lucide-react'
import { createPayment } from '../_actions/createPayment'
import { toast } from 'sonner'

type PayButtonProps = {
    rental: IRental
}

const PayButton = ({rental}: PayButtonProps) => {

    const handlePayMoney = async(id:string) => {
        if(rental.status !== 'CONFIRMED'){
            toast.warning("Please Wait For Provider Confirmed")
            return
        }
        const result = await createPayment(id)
        console.log(result);
    }

    return (
        <Button onClick={() => handlePayMoney(rental.id)}
            className="w-full h-11 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-lg shadow-emerald-600/20 transition-all gap-2 mt-4"
        >
            <CreditCard className="w-4 h-4" /> Pay Now (${rental.totalPrice.toLocaleString()})
        </Button>
    )
}

export default PayButton