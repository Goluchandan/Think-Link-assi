import React, { useEffect } from 'react'

const Data = ({setData}) => {
    const object=[
        {
            image:"https://w7.pngwing.com/pngs/767/58/png-transparent-white-wine-chardonnay-macon-pinot-noir-fat-man-food-wine-wine-bottle.png",
            brand: "Staglin Family Vineyard...",
            title: "France Sauternes",
            RPrating:"RP 95",
            rating :"+3",
            vintage : "1950's",
            qty: "04",
            volume :"Standard (750 mL)",
            cost : 56.95,
            price :59.95
       },
        {
             image:"https://images.vivino.com/thumbs/8JvDbM8kQQO6TaNHBn7cfg_pb_600x600.png",
             brand: "Bibi Graetz Testamatta Tos...",
             title: "Chianti · Blends and Other",
             RPrating:"RP 95",
             rating :"+3",
             vintage : "2015",
             qty: "32",
             volume :"Magnum (1500 mL)",
             cost : 71.95,
             price :72.95
        },
        {
           image: "https://images.vivino.com/thumbs/hXDFRphVRHCmpR6E_MCf9A_pb_600x600.png",
           brand: "Cayuse Syrah en Chamber...",
             title: "Syrah",
           RPrating:"RP 95",
           rating :"+3",
           vintage : "2012",
           qty: "12",
           volume :"Standard (750 mL)",
           cost : 139.95,
           price :150.95
        },
        {
            image:"https://w7.pngwing.com/pngs/767/58/png-transparent-white-wine-chardonnay-macon-pinot-noir-fat-man-food-wine-wine-bottle.png",
            brand: "Staglin Family Vineyard...",
            title: "France Sauternes",
            RPrating:"RP 95",
            rating :"+3",
            vintage : "1950's",
            qty: "04",
            volume :"Standard (750 mL)",
            cost : 56.95,
            price :59.95
       },
        {
            image: "https://www.totalwine.com/dynamic/x490,sq/media/sys_master/twmmedia/hb3/h16/8812351225886.png",
            brand: "K Vintners Syrah Cattle king",
             title: "France · Sauternes",
            RPrating:"RP 95",
            rating :"+3",
            vintage : "2015",
            qty: "25",
            volume :"Magnum (1500 mL)",
            cost : 79.95,
            price :92.95
        },
        {
            image:"https://images.vivino.com/thumbs/-1p-SYFEQBOBysMZuy01sw_pb_300x300.png",
            brand: "L'Ecole No. 41 Ferguson",
             title: "United state · Celifornia · Blends",
            RPrating:"RP 95",
            rating :"+3",
            vintage : "2004",
            qty: "04",
            volume :"Odd Ball (5000 mL)",
            cost : 54.95,
            price :59.95

        },
        {
            image:"https://w7.pngwing.com/pngs/767/58/png-transparent-white-wine-chardonnay-macon-pinot-noir-fat-man-food-wine-wine-bottle.png",
            brand: "Staglin Family Vineyard...",
            title: "France Sauternes",
            RPrating:"RP 95",
            rating :"+3",
            vintage : "1950's",
            qty: "04",
            volume :"Standard (750 mL)",
            cost : 56.95,
            price :59.95
       }
    ]
   
       useEffect(()=>{
           setData(object)
       },[])

  return (
    <div></div>
  )
}

export default Data