import Image from 'next/image';

export const Offer = ({ offer, index }: { offer: any, index: number }) => {
    const tagColorClasses: { [key: string]: { text: string, border: string } } = {
        "Node Runner": {
            text: "text-lime-400",
            border: "border-lime-400"
        },
        "Fastest": {
            text: "text-fuchsia-400",
            border: "border-fuchsia-400"
        },
        "Operator": {
            text: "text-yellow-400",
            border: "border-yellow-400"
        },
        "Fast": {
            text: "text-blue-400",
            border: "border-blue-400"
        }
    };

    const mockedData = [
        {
            min_channel_age: 90,
            max_apr: 4.07,
            min_apr: 3.91,
            orders: 61,
            capacity: 3.697
        },
        {
            min_channel_age: 90,
            max_apr: 6.24,
            min_apr: 3.75,
            orders: 104,
            capacity: 6.033
        },
        {
            min_channel_age: 180,
            max_apr: 6.15,
            min_apr: 6.06,
            orders: 104,
            capacity: 6.033
        }
    ];

    const satsToBTC = (sats: number) => sats / 100_000_000;

    return <>
        <div className="col-span-2 py-2 flex flex-row gap-3 items-center">
            <Image
                src={`/images/avatar-${index % 3 + 1}.png`}
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-lg max-h-[40px]"
            />
            <div className="py-2 text-sm flex flex-col gap-1 overflow-hidden">
                <p className="text-sm truncate">{offer.account}</p>
                <div className="flex flex-wrap gap-1">
                    {offer.tags.map((tag: any, index: number) => {
                        const tagStyles = tagColorClasses[tag.name] || { text: "text-foreground", border: "border-foreground" };
                        return (
                            <div key={index} className={`rounded-lg border-2 py-[2px] px-[6px] ${tagStyles.border}`}>
                                <p className={`text-xs font-semibold ${tagStyles.text}`}>{tag.name}</p>
                            </div>
                        );
                    })}
                </div>
                <p className="text-neutral-300 text-xs">
                    {offer.conditions.find(({ condition }: any) => condition === "NODE_CHANNELS")?.value && 
                        `${offer.conditions.find(({ condition }: any) => condition === "NODE_CHANNELS")?.value}ch`}
                    {offer.conditions.find(({ condition }: any) => condition === "NODE_CHANNELS")?.value && 
                     offer.conditions.find(({ condition }: any) => condition === "NODE_CAPACITY")?.value && " / "}
                    {offer.conditions.find(({ condition }: any) => condition === "NODE_CAPACITY")?.value && 
                        `${satsToBTC(Number(offer.conditions.find(({ condition }: any) => condition === "NODE_CAPACITY")?.value)).toFixed(2)} BTC cap`}
                </p>
            </div>
        </div>
        <p className="col-span-1 py-2 text-sm">{Number(offer.seller_score).toFixed(0)}/100</p>
        <p className="col-span-1 py-2 text-sm">{offer.base_fee}</p>
        <p className="col-span-1 py-2 text-sm">{offer.fee_rate_cap}</p>
        <p className="col-span-1 py-2 text-sm">~{mockedData[index % 3].min_channel_age}d</p>
        <p className="col-span-1 py-2 text-sm">{offer.fee_rate}</p>
        <p className="col-span-1 py-2 text-sm">{mockedData[index % 3].min_apr}%</p>
        <p className="col-span-1 py-2 text-sm">{mockedData[index % 3].max_apr}%</p>
        <p className="col-span-1 py-2 text-sm">{satsToBTC(offer.min_size).toFixed(2)}</p>
        <p className="col-span-1 py-2 text-sm">{satsToBTC(offer.max_size).toFixed(2)}</p>
        <div className="col-span-1 py-2 flex flex-col gap-2 items-start">
            <p className="text-sm">{satsToBTC(Number(offer.total_size) - Number(offer.orders.locked_size)).toFixed(3)} BTC</p>
            <p className="text-sm text-neutral-300">Total: {satsToBTC(offer.total_size).toFixed(3)} BTC</p>
        </div>
        <p className="col-span-1 py-2 text-sm flex flex-col gap-2 items-start">
            <p className="text-sm text-neutral-300">
                {mockedData[index % 3].orders} orders
            </p>
            <p className="text-sm text-neutral-300">
                {mockedData[index % 3].capacity} BTC
            </p>
        </p>
    </>;
};

export default Offer;