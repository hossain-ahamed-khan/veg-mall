import React from 'react';
import Image from 'next/image';

const getItems = async () => {
    const res = await fetch('http://localhost:3000/Items/api/get-all')
    const items = res.json()
    return items;
}

const AllItems = async () => {

    const { items } = await getItems();

    return (
        <div className="w-4/5 mx-auto">
            <h1 className="text-3xl text-slate-900 font-bold text-center mt-10">All Items</h1>

            <div className="py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-slate-900">
                {
                    items.map((item) => (
                        <div key={item._id}>
                            <div className="card bg-base-100 w-full lg:w-11/12 h-96 shadow-xl">
                                <figure>
                                    <Image
                                        src={item.item_image}
                                        alt="Picture of the vegetable"
                                        width={500}
                                        height={500}
                                    ></Image>
                                </figure>
                                <div className="card-body">
                                    <h2 className="card-title text-2xl font-extrabold">
                                        {item.item_name}
                                        <div className="badge badge-success text-sm text-slate-200 font-light">{item.item_expiry} days to expiry</div>
                                    </h2>
                                    <p>{item.item_description}</p>
                                    <div className="card-actions justify-end">
                                        <div className="badge badge-outline badge-warning p-4 font-bold">Edit</div>
                                        <div className="badge badge-outline badge-error p-4 font-bold">Delete</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default AllItems;