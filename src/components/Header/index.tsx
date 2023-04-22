import {fetchAPI } from "@/utils/api";
import HeaderClient from "./Header.client"
import { Suspense } from "react";

export default async function Header() {
    const data = await fetchAPI("/header",
    {
        populate: "*"
    })



    return (
        <HeaderClient data={data}/>
    )
}
