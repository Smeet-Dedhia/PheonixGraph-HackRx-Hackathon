import React from "react";

export function Table(){
    return(
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg bg-white">
        <div class="relative px-6">Top Products</div>
        <table class="w-full text-sm text-left text-black  bg-white">
    <thead class="text-xs text-gray-700 uppercase bg-white">
        <tr class="bg-white">
            <th scope="col" class="px-6 py-3">
                Product name
            </th>
            <th scope="col" class="px-6 py-3">
                Popularity
            </th>
            <th scope="col" class="px-6 py-3">
                Category
            </th>
            <th scope="col" class="px-6 py-3">
                Price
            </th>
            
        </tr>
    </thead>
    <tbody>
        <tr class="bg-white border-b ">
            <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap ">
                Apple MacBook Pro 17"
            </th>
            <td class="px-6 py-4">
                45%
            </td>
            <td class="px-6 py-4">
                Laptop
            </td>
            <td class="px-6 py-4">
                $2999
            </td>
        </tr>
        <tr class="bg-white border-b">
            <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap">
                Microsoft Surface Pro
            </th>
            <td class="px-6 py-4">
                35%
            </td>
            <td class="px-6 py-4">
                Laptop PC
            </td>
            <td class="px-6 py-4">
                $1999
            </td>
            
        </tr>
        <tr class="bg-white ">
            <th scope="row" class="px-6 py-4 font-medium text-black whitespace-nowrap ">
                Magic Mouse 2
            </th>
            <td class="px-6 py-4">
                15%
            </td>
            <td class="px-6 py-4">
                Accessories
            </td>
            <td class="px-6 py-4">
                $99
            </td>
            
        </tr>
    </tbody>
</table>
        </div>

    )
}