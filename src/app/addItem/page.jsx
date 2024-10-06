'use client'
import React from 'react';

const page = () => {

    const handleAddItem = async (event) => {
        event.preventDefault();
        const form = event.target;

        const item_name = form.vegitableName.value;
        const item_description = form.description.value;
        const item_expiry = parseInt(form.expiry.value);

        const newItem = { item_name, item_description, item_expiry };

        const resp = await fetch('http://localhost:3000/Items/api/addItem', {
            method: 'POST',
            body: JSON.stringify(newItem),
            headers: {
                "content-type": "application/json"
            }
        })


    }

    return (
        <div className="bg-slate-200 h-screen">
            <div className="w-2/5 mx-auto py-8">
                <h1 className="text-4xl font-bold text-center my-4 text-slate-900">Add Item</h1>
                <form onSubmit={handleAddItem}>

                    <div className="grid grid-cols-1 gap-2 text-slate-900">

                        <label className="form-control w-full ">
                            <div className="label">
                                <span className="label-text">Vegetable name</span>
                            </div>
                            <input type="text" name="vegitableName" required placeholder="name" className="input input-bordered w-full " />
                        </label>

                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Description</span>
                            </div>
                            <input type="text" name="description" required placeholder="short description" className="input input-bordered w-full " />
                        </label>

                        <label className="form-control">
                            <div className="label">
                                <span className="label-text">Expiry in Days</span>
                            </div>
                            <input type="number" name="expiry" defaultValue="available" required placeholder="enter number between 1 to 10" className="input input-bordered w-full" />
                        </label>
                    </div>

                    <input className="my-6 w-full py-2 bg-[#FFA400] rounded-lg cursor-pointer text-slate-700 text-xl font-bold" type="submit" value="Add" />

                </form>
            </div>
        </div>
    );
};

export default page;