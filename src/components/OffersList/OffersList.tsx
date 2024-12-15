import { Offer } from "./Offer";
import { InformationCircleIcon } from "@heroicons/react/24/outline";
import { Offer as OfferType } from "@/lib/types";

const OffersList = ({ offers }: { offers: OfferType[] }) => {
    return (
        <div className="overflow-x-auto">
            <div className="grid grid-cols-13 min-w-[1400px] mx-8 border border-white/15 rounded-xl my-6">
                {/* Header Row */}
                <div className="col-span-13 grid grid-cols-13 border-b border-white/15 gap-2 px-5">
                    <p className="col-span-3 py-2 text-sm"></p>
                    <p className="col-span-2 py-2 text-sm">Cost</p>
                    <p className="col-span-2 py-2 text-sm">Promises</p>
                    <p className="col-span-2 py-2 text-sm">APR</p>
                    <p className="col-span-2 py-2 text-sm">Size Limits</p>
                    <p className="col-span-2 py-2 text-sm"></p>
                </div>
                
                {/* Subheader Row */}
                <div 
                    className="col-span-13 grid grid-cols-13 gap-2 border-b border-white/15 py-2 text-sm text-neutral-400 font-medium px-5 items-center"
                >
                    <p className="col-span-2">Seller</p>
                    <p className="col-span-1 flex items-center gap-1">
                        Seller Score
                        <InformationCircleIcon className="w-3 h-3" />
                    </p>
                    <p className="col-span-1">Fixed (sats)</p>
                    <p className="col-span-1">Max Fee Rate (ppm)</p>
                    <p className="col-span-1">Min Channel Age</p>
                    <p className="col-span-1">Variable (ppm)</p>
                    <p className="col-span-1">Min</p>
                    <p className="col-span-1">Max</p>
                    <p className="col-span-1">Min</p>
                    <p className="col-span-1">Max</p>
                    <p className="col-span-1">Available Liquidity</p>
                    <p className="col-span-1">History</p>
                </div>

                {/* Data Rows */}
                {offers.map((offer: OfferType, index: number) => (
                    <div 
                        key={index} 
                        className={`col-span-13 grid grid-cols-13 gap-2 items-center px-5 hover:bg-neutral-800 cursor-pointer
                            ${index !== offers.length - 1 ? 'border-b border-white/15' : ''}`}
                    >
                        <Offer offer={offer} index={index} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default OffersList;