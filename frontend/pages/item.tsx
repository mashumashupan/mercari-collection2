import Item from "@/components/items/Item";
import Layout from "@/components/layout/Layout";
import { ItemType } from "@/types/ItemType";
import Image from 'next/image';

export default function Index() {
    const item: ItemType = {
        id: 0,
        name: "乃木コレ1",
        status: "sold",
        url: "/images/乃木コレ3.jpg",
        price: 700,
    };
    const item2: ItemType = {
        id: 0,
        name: "乃木コレ2",
        status: "hold",
        url: "/images/乃木コレ4.jpg",
        price: 700,
    };
    const item3: ItemType = {
        id: 0,
        name: "乃木コレ3",
        status: "hold",
        url: "/images/乃木コレ5.jpg",
        price: 700,
    };
    return (
        <Layout title="home">
            <div className="p-2">
                <Item item={item} showPrice={false} />
            </div>
            {item.status === "sold" ? (
                <p className="text-black" >売れました</ p>
            ) : item.status === "on sale" ? (
                <p className="text-black" >出品中です</ p>
            ) : item.status === "hold" ? (
                <p className="text-black" >出品しますか？</ p>
            ) : (
                <div></div>
            )}

            <div className="text-black" >推移図</div>
                <Image
                    src="/images/資産総額推移.png" // Replace with the actual image source
                    className="mt-6 rounded-lg shadow-xl"
                    width={100}
                    height={100}
                    alt="Picture of the author"
                />
            <p className="text-black" >insight</ p>
            <div className="grid grid-cols-3 gap-4 p-2">
                <Item item={item} showPrice={true} />
                <Item item={item2} showPrice={true} />
                <Item item={item3} showPrice={true} />
                <Item item={item} showPrice={true} />
                <Item item={item2} showPrice={true} />
                <Item item={item3} showPrice={true} />
                <Item item={item} showPrice={true} />
                <Item item={item2} showPrice={true} />
                <Item item={item3} showPrice={true} />
            </div>
        </Layout>
    );
}
