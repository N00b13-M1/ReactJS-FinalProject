import backpackGrey from "./img/item-01.jpg.webp"
import backpackBlack from "./img/item-02.jpg.webp"
import denimJacket from "./img/item-03.jpg.webp"
import whiteSneakers from "./img/item-06.jpg.webp"
import denimShorts from "./img/item-07.jpg.webp"
import watch from "./img/item-08.jpg.webp"
import denimTrousers from "./img/item-12.jpg.webp"
import tshirt from "./img/item-14.jpg.webp"
import blackSneakers from "./img/item-17.jpg.webp"

export const itemList = [
    {
        id: 0,
        thename: "Backpack",
        category: "Men",
        bestseller: true,
        sale: false,
        new: false,
        old: true,
        price: "$115.00",
        cover: backpackGrey
    },
    {
        id: 1,
        thename: "Backpack",
        category: "Accessories",
        bestseller: false,
        sale: false,
        new: false,
        old: true,
        price: "$125.00",
        cover: backpackBlack
    },
    {
        id: 2,
        thename: "Denim Jacket",
        category: "Women",
        bestseller: true,
        sale: false,
        new: false,
        old: true,
        price: "$80.00",
        cover: denimJacket
    },
    {
        id: 3,
        thename: "Sneakers",
        category: "Women",
        bestseller: false,
        sale: true,
        new: false,
        old: true,
        price: "$85.00",
        cover: whiteSneakers
    },
    {
        id: 4,
        thename: "Denim Shorts",
        category: "Women",
        bestseller: false,
        sale: false,
        new: true,
        old: false,
        price: "$50.00",
        cover: denimShorts
    },
    {
        id: 5,
        thename: "Watch",
        category: "Kids",
        bestseller: false,
        sale: true,
        new: true,
        old: false,
        price: "$95.00",
        cover: watch
    },
    {
        id: 6,
        thename: "Denim Trousers",
        category: "Women",
        bestseller: true,
        sale: false,
        new: true,
        old: false,
        price: "$65.00",
        cover: denimTrousers
    },
    {
        id: 7,
        thename: "T-shirt",
        category: "Kids",
        bestseller: false,
        sale: true,
        new: true,
        old: false,
        price: "$45.00",
        cover: tshirt
    },
    {
        id: 8,
        thename: "Sneakers",
        category: "Men",
        bestseller: true,
        sale: true,
        new: true,
        old: false,
        price: "$75.00",
        cover: blackSneakers
    }
]