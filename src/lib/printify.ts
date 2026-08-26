export type PrintifyImage = { src: string; variantIds: number[] }
export type PrintifyVariant = { id: string; title: string; sku: string; priceCents: number; color: string }
export type PrintifyProduct = {
  printifyId: string; name: string; tagline: string; description: string;
  priceCents: number; currency: "usd"; color: string; colors: string[]; sizes: string[];
  image: string; images: PrintifyImage[]; category: "polos" | "hats" | "shorts" | "tees" | "hoodies" | "accessories";
  printifyVariantId: string; sku: string; costCents: number; variants: PrintifyVariant[];
}

export const PRINTIFY_PRODUCTS: PrintifyProduct[] = 
[
  {
    "printifyId": "6977d6954640c1548405afa2",
    "name": "Bomber Dinger Polo",
    "tagline": "Bomber Dinger Polo",
    "description": "This lightweight polo brings quiet personality to warm-weather days. The all-over print folds tiny celestial and botanical motifs into a dark backdrop, so it reads refined at a glance and reveals playful detail up close. Breathable, quick-drying polyester keeps the silhouette crisp whether you’re commuting, on a patio, or headed to a relaxed meet-up. The pointed collar and three-button placket give a smart frame without feeling stiff—wear it buttoned for structure or open at the throat for a breezier vibe. Subtle thread-and-button options let you choose how bold the contrast will be against the print, so the piece feels like it was tailored to your rhythm.<br/><br/>Slip it on for long, su...",
    "priceCents": 4999,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/6977d6954640c1548405afa2/112163/106286/bomber-dinger-polo.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/6977d6954640c1548405afa2/112163/106286/bomber-dinger-polo.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6977d6954640c1548405afa2/112163/106288/bomber-dinger-polo.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6977d6954640c1548405afa2/112163/106290/bomber-dinger-polo.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "polos",
    "printifyVariantId": "112163",
    "sku": "21181668047041042559",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "12514918374246097567",
        "priceCents": 4999,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "83862069445438395755",
        "priceCents": 4999,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "21181668047041042559",
        "priceCents": 4999,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "42772961866877818327",
        "priceCents": 4999,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "21392909733875457895",
        "priceCents": 5999,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "28042539621599871945",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "6931e992efc6b8a3fc00f9ec",
    "name": "Embroidered Quarter-Zip Pullover — White Athletic Adidas-Inspired Top",
    "tagline": "Embroidered Quarter-Zip Pullover — White Athletic Adidas-Inspired Top",
    "description": "A lightweight quarter-zip pullover that feels like a cool morning on the course or a quiet sunrise run. The relaxed silhouette moves with you—no tugging at the shoulders—while the self-mock collar and clean hems keep the look streamlined. Built for activity, the hydrophilic finish wicks sweat fast and the UPF 50+ weave shields skin when you’re under the sun. Subtle embroidered detailing and a contrast logo on the sleeve add quiet, sporty polish. It layers easily over tees or under jackets and lives in pack pockets for trips that demand breathable, durable performance.<br/><br/>Product features<br/>- Relaxed fit for easy movement and layering<br/>- UPF 50+ fabric for reliable sun protectio...",
    "priceCents": 10533,
    "currency": "usd",
    "color": "White",
    "colors": [
      "White",
      "Black Heather",
      "Collegiate Navy",
      "Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "image": "https://images-api.printify.com/mockup/6931e992efc6b8a3fc00f9ec/118445/109474/embroidered-quarter-zip-pullover-white-athletic-adidas-inspired-top.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/6931e992efc6b8a3fc00f9ec/118445/109474/embroidered-quarter-zip-pullover-white-athletic-adidas-inspired-top.jpg?camera_label=front",
        "variantIds": [
          118437,
          118441,
          118445,
          118449,
          118453,
          118457,
          118461
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6931e992efc6b8a3fc00f9ec/118445/109476/embroidered-quarter-zip-pullover-white-athletic-adidas-inspired-top.jpg?camera_label=back",
        "variantIds": [
          118437,
          118441,
          118445,
          118449,
          118453,
          118457,
          118461
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6931e992efc6b8a3fc00f9ec/118445/110466/embroidered-quarter-zip-pullover-white-athletic-adidas-inspired-top.jpg?camera_label=front-2",
        "variantIds": [
          118437,
          118441,
          118445,
          118449,
          118453,
          118457,
          118461
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6931e992efc6b8a3fc00f9ec/118445/110467/embroidered-quarter-zip-pullover-white-athletic-adidas-inspired-top.jpg?camera_label=back-2",
        "variantIds": [
          118437,
          118441,
          118445,
          118449,
          118453,
          118457,
          118461
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6931e992efc6b8a3fc00f9ec/118442/109474/embroidered-quarter-zip-pullover-white-athletic-adidas-inspired-top.jpg?camera_label=front",
        "variantIds": [
          118434,
          118438,
          118442,
          118446,
          118450,
          118454,
          118458
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6931e992efc6b8a3fc00f9ec/118442/109476/embroidered-quarter-zip-pullover-white-athletic-adidas-inspired-top.jpg?camera_label=back",
        "variantIds": [
          118434,
          118438,
          118442,
          118446,
          118450,
          118454,
          118458
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6931e992efc6b8a3fc00f9ec/118442/110466/embroidered-quarter-zip-pullover-white-athletic-adidas-inspired-top.jpg?camera_label=front-2",
        "variantIds": [
          118434,
          118438,
          118442,
          118446,
          118450,
          118454,
          118458
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6931e992efc6b8a3fc00f9ec/118442/110467/embroidered-quarter-zip-pullover-white-athletic-adidas-inspired-top.jpg?camera_label=back-2",
        "variantIds": [
          118434,
          118438,
          118442,
          118446,
          118450,
          118454,
          118458
        ]
      }
    ],
    "category": "hoodies",
    "printifyVariantId": "118445",
    "sku": "43724362765858083262",
    "costCents": 6320,
    "variants": [
      {
        "id": "118434",
        "title": "Black / S",
        "sku": "29117002794638180267",
        "priceCents": 10533,
        "color": "Black / S"
      },
      {
        "id": "118437",
        "title": "White / S",
        "sku": "22454944599570263199",
        "priceCents": 10533,
        "color": "White / S"
      },
      {
        "id": "118438",
        "title": "Black / M",
        "sku": "18634184301739904465",
        "priceCents": 10533,
        "color": "Black / M"
      },
      {
        "id": "118441",
        "title": "White / M",
        "sku": "14634615309564799665",
        "priceCents": 10533,
        "color": "White / M"
      },
      {
        "id": "118442",
        "title": "Black / L",
        "sku": "15021076850104209584",
        "priceCents": 10533,
        "color": "Black / L"
      },
      {
        "id": "118445",
        "title": "White / L",
        "sku": "43724362765858083262",
        "priceCents": 10533,
        "color": "White / L"
      },
      {
        "id": "118446",
        "title": "Black / XL",
        "sku": "33675428636033097730",
        "priceCents": 10533,
        "color": "Black / XL"
      },
      {
        "id": "118450",
        "title": "Black / 2XL",
        "sku": "59126109108223255870",
        "priceCents": 10840,
        "color": "Black / 2XL"
      },
      {
        "id": "118453",
        "title": "White / 2XL",
        "sku": "27751396478924526652",
        "priceCents": 10840,
        "color": "White / 2XL"
      },
      {
        "id": "118454",
        "title": "Black / 3XL",
        "sku": "26735355731151416056",
        "priceCents": 11143,
        "color": "Black / 3XL"
      },
      {
        "id": "118457",
        "title": "White / 3XL",
        "sku": "31422998183629260998",
        "priceCents": 11143,
        "color": "White / 3XL"
      },
      {
        "id": "118458",
        "title": "Black / 4XL",
        "sku": "23795311823114348317",
        "priceCents": 11447,
        "color": "Black / 4XL"
      },
      {
        "id": "118461",
        "title": "White / 4XL",
        "sku": "13078915875120059556",
        "priceCents": 11447,
        "color": "White / 4XL"
      }
    ]
  },
  {
    "printifyId": "691d4be5cf0d5102c60df526",
    "name": "Dinger Don Crew Neck",
    "tagline": "Dinger Don Crew Neck",
    "description": "A cozy, midweight crewneck that feels like a slow exhale on a frosty morning. This garment-dyed sweatshirt carries a lived-in softness from 80% ring-spun cotton and 20% polyester, with a relaxed fit that layers easily over shirts or tees. The Dinger Don crew neck detail — a subtle half-moon patch at the back — gives the neckline character while the ribbed collar, cuffs, and hem hold shape through repeated wear. Necktape and a sewn-in twill label add comfort and durability, and OEKO-TEX certified low-impact dyes create a rich, muted color with responsible sourcing. Embroidery options on the left or center chest let this sweatshirt feel personal and intentional. Wear it for brisk morning wa...",
    "priceCents": 5799,
    "currency": "usd",
    "color": "White",
    "colors": [
      "White",
      "Terracotta",
      "Butter",
      "Pepper",
      "Grey",
      "Chalky Mint",
      "Light Green",
      "Blue Spruce",
      "Chambray",
      "Blue Jean",
      "Denim",
      "Orchid",
      "Watermelon",
      "Crimson"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/102429/99007/dinger-don-crew-neck.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/102429/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          102427,
          102428,
          102429,
          102430,
          102431,
          102432
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/102429/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          102427,
          102428,
          102429,
          102430,
          102431,
          102432
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/102429/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          102427,
          102428,
          102429,
          102430,
          102431,
          102432
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/102429/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          102427,
          102428,
          102429,
          102430,
          102431,
          102432
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96846/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96844,
          96845,
          96846,
          96847,
          96848,
          102361
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96846/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96844,
          96845,
          96846,
          96847,
          96848,
          102361
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96846/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96844,
          96845,
          96846,
          96847,
          96848,
          102361
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96846/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96844,
          96845,
          96846,
          96847,
          96848,
          102361
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96896/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96894,
          96895,
          96896,
          96897,
          96898,
          102371
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96896/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96894,
          96895,
          96896,
          96897,
          96898,
          102371
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96896/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96894,
          96895,
          96896,
          96897,
          96898,
          102371
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96896/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96894,
          96895,
          96896,
          96897,
          96898,
          102371
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96876/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96874,
          96875,
          96876,
          96877,
          96878,
          102367
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96876/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96874,
          96875,
          96876,
          96877,
          96878,
          102367
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96876/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96874,
          96875,
          96876,
          96877,
          96878,
          102367
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96876/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96874,
          96875,
          96876,
          96877,
          96878,
          102367
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96851/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96849,
          96850,
          96851,
          96852,
          96853,
          102362
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96851/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96849,
          96850,
          96851,
          96852,
          96853,
          102362
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96851/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96849,
          96850,
          96851,
          96852,
          96853,
          102362
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96851/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96849,
          96850,
          96851,
          96852,
          96853,
          102362
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96886/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96884,
          96885,
          96886,
          96887,
          96888,
          102369
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96886/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96884,
          96885,
          96886,
          96887,
          96888,
          102369
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96886/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96884,
          96885,
          96886,
          96887,
          96888,
          102369
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96886/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96884,
          96885,
          96886,
          96887,
          96888,
          102369
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96841/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96839,
          96840,
          96841,
          96842,
          96843,
          102360
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96841/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96839,
          96840,
          96841,
          96842,
          96843,
          102360
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96841/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96839,
          96840,
          96841,
          96842,
          96843,
          102360
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96841/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96839,
          96840,
          96841,
          96842,
          96843,
          102360
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96856/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96854,
          96855,
          96856,
          96857,
          96858,
          102363
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96856/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96854,
          96855,
          96856,
          96857,
          96858,
          102363
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96856/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96854,
          96855,
          96856,
          96857,
          96858,
          102363
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96856/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96854,
          96855,
          96856,
          96857,
          96858,
          102363
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96836/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96834,
          96835,
          96836,
          96837,
          96838,
          102359
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96836/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96834,
          96835,
          96836,
          96837,
          96838,
          102359
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96836/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96834,
          96835,
          96836,
          96837,
          96838,
          102359
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96836/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96834,
          96835,
          96836,
          96837,
          96838,
          102359
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96866/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96864,
          96865,
          96866,
          96867,
          96868,
          102365
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96866/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96864,
          96865,
          96866,
          96867,
          96868,
          102365
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96866/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96864,
          96865,
          96866,
          96867,
          96868,
          102365
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96866/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96864,
          96865,
          96866,
          96867,
          96868,
          102365
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96891/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96889,
          96890,
          96891,
          96892,
          96893,
          102370
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96891/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96889,
          96890,
          96891,
          96892,
          96893,
          102370
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96891/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96889,
          96890,
          96891,
          96892,
          96893,
          102370
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96891/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96889,
          96890,
          96891,
          96892,
          96893,
          102370
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96916/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96914,
          96915,
          96916,
          96917,
          96918,
          102375
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96916/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96914,
          96915,
          96916,
          96917,
          96918,
          102375
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96916/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96914,
          96915,
          96916,
          96917,
          96918,
          102375
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96916/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96914,
          96915,
          96916,
          96917,
          96918,
          102375
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96861/99007/dinger-don-crew-neck.jpg?camera_label=front",
        "variantIds": [
          96859,
          96860,
          96861,
          96862,
          96863,
          102364
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96861/99008/dinger-don-crew-neck.jpg?camera_label=back",
        "variantIds": [
          96859,
          96860,
          96861,
          96862,
          96863,
          102364
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96861/99009/dinger-don-crew-neck.jpg?camera_label=person-1-front",
        "variantIds": [
          96859,
          96860,
          96861,
          96862,
          96863,
          102364
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/691d4be5cf0d5102c60df526/96861/99010/dinger-don-crew-neck.jpg?camera_label=person-1-back",
        "variantIds": [
          96859,
          96860,
          96861,
          96862,
          96863,
          102364
        ]
      }
    ],
    "category": "tees",
    "printifyVariantId": "96841",
    "sku": "20646860224207649307",
    "costCents": 4116,
    "variants": [
      {
        "id": "96834",
        "title": "Blue Jean / S",
        "sku": "23242909905830281257",
        "priceCents": 5799,
        "color": "Blue Jean / S"
      },
      {
        "id": "96835",
        "title": "Blue Jean / M",
        "sku": "23006288070090684315",
        "priceCents": 5799,
        "color": "Blue Jean / M"
      },
      {
        "id": "96836",
        "title": "Blue Jean / L",
        "sku": "14927980536548698277",
        "priceCents": 5799,
        "color": "Blue Jean / L"
      },
      {
        "id": "96837",
        "title": "Blue Jean / XL",
        "sku": "24839708910041499332",
        "priceCents": 5799,
        "color": "Blue Jean / XL"
      },
      {
        "id": "96838",
        "title": "Blue Jean / 2XL",
        "sku": "35555403279382157174",
        "priceCents": 5799,
        "color": "Blue Jean / 2XL"
      },
      {
        "id": "96839",
        "title": "Blue Spruce / S",
        "sku": "16892317863587699971",
        "priceCents": 5799,
        "color": "Blue Spruce / S"
      },
      {
        "id": "96840",
        "title": "Blue Spruce / M",
        "sku": "29001556176668784312",
        "priceCents": 5799,
        "color": "Blue Spruce / M"
      },
      {
        "id": "96841",
        "title": "Blue Spruce / L",
        "sku": "20646860224207649307",
        "priceCents": 5799,
        "color": "Blue Spruce / L"
      },
      {
        "id": "96842",
        "title": "Blue Spruce / XL",
        "sku": "19651463249146637102",
        "priceCents": 5799,
        "color": "Blue Spruce / XL"
      },
      {
        "id": "96843",
        "title": "Blue Spruce / 2XL",
        "sku": "88907064820495596449",
        "priceCents": 5799,
        "color": "Blue Spruce / 2XL"
      },
      {
        "id": "96844",
        "title": "Butter / S",
        "sku": "22701015072682141897",
        "priceCents": 5799,
        "color": "Butter / S"
      },
      {
        "id": "96845",
        "title": "Butter / M",
        "sku": "22916816386687498204",
        "priceCents": 5799,
        "color": "Butter / M"
      },
      {
        "id": "96846",
        "title": "Butter / L",
        "sku": "15106564210554153944",
        "priceCents": 5799,
        "color": "Butter / L"
      },
      {
        "id": "96847",
        "title": "Butter / XL",
        "sku": "28015533852665371076",
        "priceCents": 5799,
        "color": "Butter / XL"
      },
      {
        "id": "96848",
        "title": "Butter / 2XL",
        "sku": "20984625832199687832",
        "priceCents": 5799,
        "color": "Butter / 2XL"
      },
      {
        "id": "96849",
        "title": "Chalky Mint / S",
        "sku": "32894048961425587172",
        "priceCents": 5799,
        "color": "Chalky Mint / S"
      },
      {
        "id": "96850",
        "title": "Chalky Mint / M",
        "sku": "92511863437315032287",
        "priceCents": 5799,
        "color": "Chalky Mint / M"
      },
      {
        "id": "96851",
        "title": "Chalky Mint / L",
        "sku": "21303163554561638350",
        "priceCents": 5799,
        "color": "Chalky Mint / L"
      },
      {
        "id": "96852",
        "title": "Chalky Mint / XL",
        "sku": "31405784987496798768",
        "priceCents": 5799,
        "color": "Chalky Mint / XL"
      },
      {
        "id": "96853",
        "title": "Chalky Mint / 2XL",
        "sku": "19515601448108968520",
        "priceCents": 5799,
        "color": "Chalky Mint / 2XL"
      },
      {
        "id": "96854",
        "title": "Chambray / S",
        "sku": "20196060926703932365",
        "priceCents": 5799,
        "color": "Chambray / S"
      },
      {
        "id": "96855",
        "title": "Chambray / M",
        "sku": "26244893532621115100",
        "priceCents": 5799,
        "color": "Chambray / M"
      },
      {
        "id": "96856",
        "title": "Chambray / L",
        "sku": "32806177849472620259",
        "priceCents": 5799,
        "color": "Chambray / L"
      },
      {
        "id": "96857",
        "title": "Chambray / XL",
        "sku": "30988300358701641388",
        "priceCents": 5799,
        "color": "Chambray / XL"
      },
      {
        "id": "96858",
        "title": "Chambray / 2XL",
        "sku": "12171532656394678674",
        "priceCents": 5799,
        "color": "Chambray / 2XL"
      },
      {
        "id": "96859",
        "title": "Crimson / S",
        "sku": "31274657808180199826",
        "priceCents": 5799,
        "color": "Crimson / S"
      },
      {
        "id": "96860",
        "title": "Crimson / M",
        "sku": "31609370526166743291",
        "priceCents": 5799,
        "color": "Crimson / M"
      },
      {
        "id": "96861",
        "title": "Crimson / L",
        "sku": "32258552797498782053",
        "priceCents": 5799,
        "color": "Crimson / L"
      },
      {
        "id": "96862",
        "title": "Crimson / XL",
        "sku": "17877584526701285685",
        "priceCents": 5799,
        "color": "Crimson / XL"
      },
      {
        "id": "96863",
        "title": "Crimson / 2XL",
        "sku": "85399137443769299074",
        "priceCents": 5799,
        "color": "Crimson / 2XL"
      },
      {
        "id": "96864",
        "title": "Denim / S",
        "sku": "18937437635986442978",
        "priceCents": 5799,
        "color": "Denim / S"
      },
      {
        "id": "96865",
        "title": "Denim / M",
        "sku": "12483144428708790227",
        "priceCents": 5799,
        "color": "Denim / M"
      },
      {
        "id": "96866",
        "title": "Denim / L",
        "sku": "29610361900250605889",
        "priceCents": 5799,
        "color": "Denim / L"
      },
      {
        "id": "96867",
        "title": "Denim / XL",
        "sku": "16427385310180276510",
        "priceCents": 5799,
        "color": "Denim / XL"
      },
      {
        "id": "96868",
        "title": "Denim / 2XL",
        "sku": "30002344042690521671",
        "priceCents": 5799,
        "color": "Denim / 2XL"
      },
      {
        "id": "96874",
        "title": "Grey / S",
        "sku": "12629635727929140571",
        "priceCents": 5799,
        "color": "Grey / S"
      },
      {
        "id": "96875",
        "title": "Grey / M",
        "sku": "20071615406837982128",
        "priceCents": 5799,
        "color": "Grey / M"
      },
      {
        "id": "96876",
        "title": "Grey / L",
        "sku": "14984142480599485195",
        "priceCents": 5799,
        "color": "Grey / L"
      },
      {
        "id": "96877",
        "title": "Grey / XL",
        "sku": "22079802534829663576",
        "priceCents": 5799,
        "color": "Grey / XL"
      },
      {
        "id": "96878",
        "title": "Grey / 2XL",
        "sku": "32355043250120395932",
        "priceCents": 5799,
        "color": "Grey / 2XL"
      },
      {
        "id": "96884",
        "title": "Light Green / S",
        "sku": "14075163290371188878",
        "priceCents": 5799,
        "color": "Light Green / S"
      },
      {
        "id": "96885",
        "title": "Light Green / M",
        "sku": "20888048126057818320",
        "priceCents": 5799,
        "color": "Light Green / M"
      },
      {
        "id": "96886",
        "title": "Light Green / L",
        "sku": "25656280408121186587",
        "priceCents": 5799,
        "color": "Light Green / L"
      },
      {
        "id": "96887",
        "title": "Light Green / XL",
        "sku": "16606983880452707510",
        "priceCents": 5799,
        "color": "Light Green / XL"
      },
      {
        "id": "96888",
        "title": "Light Green / 2XL",
        "sku": "63162783295758062379",
        "priceCents": 5799,
        "color": "Light Green / 2XL"
      },
      {
        "id": "96889",
        "title": "Orchid / S",
        "sku": "82997661543107191728",
        "priceCents": 5799,
        "color": "Orchid / S"
      },
      {
        "id": "96890",
        "title": "Orchid / M",
        "sku": "17959257940904160071",
        "priceCents": 5799,
        "color": "Orchid / M"
      },
      {
        "id": "96891",
        "title": "Orchid / L",
        "sku": "32355057676386265271",
        "priceCents": 5799,
        "color": "Orchid / L"
      },
      {
        "id": "96892",
        "title": "Orchid / XL",
        "sku": "20148541130699433911",
        "priceCents": 5799,
        "color": "Orchid / XL"
      },
      {
        "id": "96893",
        "title": "Orchid / 2XL",
        "sku": "29635889751136670289",
        "priceCents": 5799,
        "color": "Orchid / 2XL"
      },
      {
        "id": "96894",
        "title": "Pepper / S",
        "sku": "18742907575356932279",
        "priceCents": 5799,
        "color": "Pepper / S"
      },
      {
        "id": "96895",
        "title": "Pepper / M",
        "sku": "90617161128059048575",
        "priceCents": 5799,
        "color": "Pepper / M"
      },
      {
        "id": "96896",
        "title": "Pepper / L",
        "sku": "70026134270663870067",
        "priceCents": 5799,
        "color": "Pepper / L"
      },
      {
        "id": "96897",
        "title": "Pepper / XL",
        "sku": "15060958477548557205",
        "priceCents": 5799,
        "color": "Pepper / XL"
      },
      {
        "id": "96898",
        "title": "Pepper / 2XL",
        "sku": "65326238979828807917",
        "priceCents": 5799,
        "color": "Pepper / 2XL"
      },
      {
        "id": "96914",
        "title": "Watermelon / S",
        "sku": "27453088306521880953",
        "priceCents": 5799,
        "color": "Watermelon / S"
      },
      {
        "id": "96915",
        "title": "Watermelon / M",
        "sku": "16997397081055854272",
        "priceCents": 5799,
        "color": "Watermelon / M"
      },
      {
        "id": "96916",
        "title": "Watermelon / L",
        "sku": "10324294890566300483",
        "priceCents": 5799,
        "color": "Watermelon / L"
      },
      {
        "id": "96917",
        "title": "Watermelon / XL",
        "sku": "18542051223435543732",
        "priceCents": 5799,
        "color": "Watermelon / XL"
      },
      {
        "id": "96918",
        "title": "Watermelon / 2XL",
        "sku": "71789158238008726415",
        "priceCents": 5799,
        "color": "Watermelon / 2XL"
      },
      {
        "id": "102359",
        "title": "Blue Jean / 3XL",
        "sku": "25606059190435267407",
        "priceCents": 5799,
        "color": "Blue Jean / 3XL"
      },
      {
        "id": "102360",
        "title": "Blue Spruce / 3XL",
        "sku": "17661459083728806179",
        "priceCents": 5799,
        "color": "Blue Spruce / 3XL"
      },
      {
        "id": "102361",
        "title": "Butter / 3XL",
        "sku": "32876253969952027099",
        "priceCents": 5799,
        "color": "Butter / 3XL"
      },
      {
        "id": "102362",
        "title": "Chalky Mint / 3XL",
        "sku": "32980949834997646195",
        "priceCents": 5799,
        "color": "Chalky Mint / 3XL"
      },
      {
        "id": "102363",
        "title": "Chambray / 3XL",
        "sku": "28458399593342435613",
        "priceCents": 5799,
        "color": "Chambray / 3XL"
      },
      {
        "id": "102364",
        "title": "Crimson / 3XL",
        "sku": "31494913270630392843",
        "priceCents": 5799,
        "color": "Crimson / 3XL"
      },
      {
        "id": "102365",
        "title": "Denim / 3XL",
        "sku": "29664520703349398096",
        "priceCents": 5799,
        "color": "Denim / 3XL"
      },
      {
        "id": "102367",
        "title": "Grey / 3XL",
        "sku": "27014477476931817389",
        "priceCents": 5799,
        "color": "Grey / 3XL"
      },
      {
        "id": "102369",
        "title": "Light Green / 3XL",
        "sku": "12891021505282614290",
        "priceCents": 5799,
        "color": "Light Green / 3XL"
      },
      {
        "id": "102370",
        "title": "Orchid / 3XL",
        "sku": "15142865486316315112",
        "priceCents": 5799,
        "color": "Orchid / 3XL"
      },
      {
        "id": "102371",
        "title": "Pepper / 3XL",
        "sku": "33785816869185920720",
        "priceCents": 5799,
        "color": "Pepper / 3XL"
      },
      {
        "id": "102375",
        "title": "Watermelon / 3XL",
        "sku": "76053887901924624898",
        "priceCents": 5799,
        "color": "Watermelon / 3XL"
      },
      {
        "id": "102427",
        "title": "Terracotta / S",
        "sku": "11137927037792017567",
        "priceCents": 5799,
        "color": "Terracotta / S"
      },
      {
        "id": "102428",
        "title": "Terracotta / M",
        "sku": "23759916773335514565",
        "priceCents": 5799,
        "color": "Terracotta / M"
      },
      {
        "id": "102429",
        "title": "Terracotta / L",
        "sku": "16960268800425814785",
        "priceCents": 5799,
        "color": "Terracotta / L"
      },
      {
        "id": "102430",
        "title": "Terracotta / XL",
        "sku": "88122499158077593094",
        "priceCents": 5799,
        "color": "Terracotta / XL"
      },
      {
        "id": "102431",
        "title": "Terracotta / 2XL",
        "sku": "22228398283925579860",
        "priceCents": 5799,
        "color": "Terracotta / 2XL"
      },
      {
        "id": "102432",
        "title": "Terracotta / 3XL",
        "sku": "63538502476180758332",
        "priceCents": 5799,
        "color": "Terracotta / 3XL"
      }
    ]
  },
  {
    "printifyId": "6916a36be1bc399c020dbe58",
    "name": "Golf Warmup Hoodie with Dinger Don",
    "tagline": "Golf Warmup Hoodie with Dinger Don",
    "description": "This golf warmup hoodie features a dinger don gopher character design, giving off a sporty and fun vibe. It is perfect for golf enthusiasts looking to stay warm and stylish on the course. Ideal for golf events, tournaments, and casual wear.<br/><br/>Product features<br/>- 100% Polyester fabric for durability<br/>- Moisture-wicking material to keep you cool<br/>- Lightweight design for comfort<br/>- UPF +50 sun protection<br/>- Assembled in the USA with globally sourced parts<br/><br/>Care instructions<br/>- Do not dryclean<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max 30C or 90F)<br/>",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "image": "https://images-api.printify.com/mockup/6916a36be1bc399c020dbe58/101916/98551/golf-warmup-hoodie-with-dinger-don.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/6916a36be1bc399c020dbe58/101916/98551/golf-warmup-hoodie-with-dinger-don.jpg?camera_label=front",
        "variantIds": [
          101916,
          101917,
          101918,
          101919,
          101920,
          101921,
          101922,
          101923
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6916a36be1bc399c020dbe58/101916/99208/golf-warmup-hoodie-with-dinger-don.jpg?camera_label=back",
        "variantIds": [
          101916,
          101917,
          101918,
          101919,
          101920,
          101921,
          101922,
          101923
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6916a36be1bc399c020dbe58/101916/99211/golf-warmup-hoodie-with-dinger-don.jpg?camera_label=person-front",
        "variantIds": [
          101916,
          101917,
          101918,
          101919,
          101920,
          101921,
          101922,
          101923
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6916a36be1bc399c020dbe58/101916/99212/golf-warmup-hoodie-with-dinger-don.jpg?camera_label=person-back",
        "variantIds": [
          101916,
          101917,
          101918,
          101919,
          101920,
          101921,
          101922,
          101923
        ]
      }
    ],
    "category": "hoodies",
    "printifyVariantId": "101916",
    "sku": "13822700533113673456",
    "costCents": 3784,
    "variants": [
      {
        "id": "101916",
        "title": "XS",
        "sku": "13822700533113673456",
        "priceCents": 5499,
        "color": "XS"
      },
      {
        "id": "101917",
        "title": "S",
        "sku": "19127738559241955706",
        "priceCents": 5499,
        "color": "S"
      },
      {
        "id": "101918",
        "title": "M",
        "sku": "22069327231457499543",
        "priceCents": 5499,
        "color": "M"
      },
      {
        "id": "101919",
        "title": "L",
        "sku": "57528665116093577310",
        "priceCents": 5499,
        "color": "L"
      },
      {
        "id": "101920",
        "title": "XL",
        "sku": "19881897097948775332",
        "priceCents": 5499,
        "color": "XL"
      },
      {
        "id": "101921",
        "title": "2XL",
        "sku": "17267094194441963253",
        "priceCents": 5499,
        "color": "2XL"
      },
      {
        "id": "101922",
        "title": "3XL",
        "sku": "11471612820575407371",
        "priceCents": 5499,
        "color": "3XL"
      },
      {
        "id": "101923",
        "title": "4XL",
        "sku": "52375663956038284720",
        "priceCents": 5499,
        "color": "4XL"
      }
    ]
  },
  {
    "printifyId": "68f11fff6108cebe5008d50e",
    "name": "Footballer Player Tee",
    "tagline": "Footballer Player Tee",
    "description": "This oversized tee embodies the grit and toughness of a football player among the team. It exudes a rugged, sporty vibe and is perfect for sports enthusiasts and football fans. Ideal for game days, sports events, and casual wear.<br/><br/>Product features<br/>- Dropped shoulders for a relaxed fit<br/>- Shoulder-to-shoulder tape for stability<br/>- Double needle stitch on hems for durability<br/>- Made from 100% carded cotton<br/>- Medium-heavy fabric for a quality feel<br/><br/>Care instructions<br/>- Machine wash: cold (max 30C or 90F)<br/>- Non-chlorine: bleach as needed<br/>- Tumble dry: low heat<br/>- Iron, steam or dry: low heat<br/>- Do not dryclean<br/>",
    "priceCents": 3899,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "One Size"
    ],
    "image": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102276/98719/footballer-player-tee.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102276/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          102279,
          102278,
          102277,
          102275,
          102274,
          102276
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102276/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          102279,
          102278,
          102277,
          102275,
          102274,
          102276
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102276/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          102279,
          102278,
          102277,
          102275,
          102274,
          102276
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102276/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          102279,
          102278,
          102277,
          102275,
          102274,
          102276
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103426/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          103429,
          103428,
          103424,
          103425,
          103426,
          103427
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103426/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          103429,
          103428,
          103424,
          103425,
          103426,
          103427
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103426/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          103429,
          103428,
          103424,
          103425,
          103426,
          103427
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103426/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          103429,
          103428,
          103424,
          103425,
          103426,
          103427
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102264/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          102267,
          102266,
          102265,
          102263,
          102264,
          102262
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102264/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          102267,
          102266,
          102265,
          102263,
          102264,
          102262
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102264/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          102267,
          102266,
          102265,
          102263,
          102264,
          102262
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102264/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          102267,
          102266,
          102265,
          102263,
          102264,
          102262
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102270/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          102273,
          102272,
          102270,
          102268,
          102269,
          102271
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102270/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          102273,
          102272,
          102270,
          102268,
          102269,
          102271
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102270/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          102273,
          102272,
          102270,
          102268,
          102269,
          102271
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102270/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          102273,
          102272,
          102270,
          102268,
          102269,
          102271
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103420/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          103423,
          103422,
          103420,
          103418,
          103421,
          103419
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103420/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          103423,
          103422,
          103420,
          103418,
          103421,
          103419
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103420/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          103423,
          103422,
          103420,
          103418,
          103421,
          103419
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103420/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          103423,
          103422,
          103420,
          103418,
          103421,
          103419
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103402/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          103405,
          103404,
          103402,
          103403,
          103400,
          103401
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103402/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          103405,
          103404,
          103402,
          103403,
          103400,
          103401
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103402/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          103405,
          103404,
          103402,
          103403,
          103400,
          103401
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103402/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          103405,
          103404,
          103402,
          103403,
          103400,
          103401
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103456/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          103459,
          103458,
          103454,
          103455,
          103457,
          103456
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103456/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          103459,
          103458,
          103454,
          103455,
          103457,
          103456
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103456/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          103459,
          103458,
          103454,
          103455,
          103457,
          103456
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103456/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          103459,
          103458,
          103454,
          103455,
          103457,
          103456
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103438/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          103441,
          103440,
          103439,
          103438,
          103436,
          103437
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103438/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          103441,
          103440,
          103439,
          103438,
          103436,
          103437
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103438/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          103441,
          103440,
          103439,
          103438,
          103436,
          103437
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103438/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          103441,
          103440,
          103439,
          103438,
          103436,
          103437
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103432/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          103435,
          103434,
          103430,
          103431,
          103432,
          103433
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103432/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          103435,
          103434,
          103430,
          103431,
          103432,
          103433
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103432/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          103435,
          103434,
          103430,
          103431,
          103432,
          103433
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103432/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          103435,
          103434,
          103430,
          103431,
          103432,
          103433
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103450/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          103453,
          103452,
          103450,
          103451,
          103449,
          103448
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103450/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          103453,
          103452,
          103450,
          103451,
          103449,
          103448
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103450/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          103453,
          103452,
          103450,
          103451,
          103449,
          103448
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103450/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          103453,
          103452,
          103450,
          103451,
          103449,
          103448
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103408/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          103411,
          103410,
          103408,
          103406,
          103409,
          103407
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103408/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          103411,
          103410,
          103408,
          103406,
          103409,
          103407
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103408/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          103411,
          103410,
          103408,
          103406,
          103409,
          103407
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103408/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          103411,
          103410,
          103408,
          103406,
          103409,
          103407
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103444/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          103447,
          103446,
          103442,
          103444,
          103445,
          103443
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103444/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          103447,
          103446,
          103442,
          103444,
          103445,
          103443
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103444/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          103447,
          103446,
          103442,
          103444,
          103445,
          103443
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103444/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          103447,
          103446,
          103442,
          103444,
          103445,
          103443
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102282/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          102285,
          102284,
          102282,
          102281,
          102280,
          102283
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102282/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          102285,
          102284,
          102282,
          102281,
          102280,
          102283
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102282/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          102285,
          102284,
          102282,
          102281,
          102280,
          102283
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/102282/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          102285,
          102284,
          102282,
          102281,
          102280,
          102283
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103462/98719/footballer-player-tee.jpg?camera_label=front",
        "variantIds": [
          103465,
          103464,
          103462,
          103460,
          103463,
          103461
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103462/98720/footballer-player-tee.jpg?camera_label=back",
        "variantIds": [
          103465,
          103464,
          103462,
          103460,
          103463,
          103461
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103462/98645/footballer-player-tee.jpg?camera_label=person-front",
        "variantIds": [
          103465,
          103464,
          103462,
          103460,
          103463,
          103461
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68f11fff6108cebe5008d50e/103462/98723/footballer-player-tee.jpg?camera_label=person-back",
        "variantIds": [
          103465,
          103464,
          103462,
          103460,
          103463,
          103461
        ]
      }
    ],
    "category": "tees",
    "printifyVariantId": "103432",
    "sku": "28513569401159313996",
    "costCents": 2721,
    "variants": [
      {
        "id": "102267",
        "title": "3XL / Black",
        "sku": "31257191567669666709",
        "priceCents": 3899,
        "color": "3XL / Black"
      },
      {
        "id": "103447",
        "title": "3XL / Midnight Blue",
        "sku": "32781907813375013890",
        "priceCents": 3899,
        "color": "3XL / Midnight Blue"
      },
      {
        "id": "103459",
        "title": "3XL / Pistachio",
        "sku": "24844293394045656481",
        "priceCents": 3899,
        "color": "3XL / Pistachio"
      },
      {
        "id": "103453",
        "title": "3XL / Pine Green",
        "sku": "11376288375391857955",
        "priceCents": 3899,
        "color": "3XL / Pine Green"
      },
      {
        "id": "102285",
        "title": "3XL / Orchid",
        "sku": "53208654176376460611",
        "priceCents": 3899,
        "color": "3XL / Orchid"
      },
      {
        "id": "103441",
        "title": "3XL / Eucalyptus",
        "sku": "38404613573647790123",
        "priceCents": 3899,
        "color": "3XL / Eucalyptus"
      },
      {
        "id": "102279",
        "title": "3XL / White",
        "sku": "77425846389634256133",
        "priceCents": 3899,
        "color": "3XL / White"
      },
      {
        "id": "103423",
        "title": "3XL / Butter",
        "sku": "11000432037891365885",
        "priceCents": 3899,
        "color": "3XL / Butter"
      },
      {
        "id": "103411",
        "title": "3XL / Navy",
        "sku": "19234162470620993582",
        "priceCents": 3899,
        "color": "3XL / Navy"
      },
      {
        "id": "103465",
        "title": "3XL / Plum",
        "sku": "31583683122317521788",
        "priceCents": 3899,
        "color": "3XL / Plum"
      },
      {
        "id": "103405",
        "title": "3XL / Athletic Heather",
        "sku": "22912372384437729224",
        "priceCents": 3899,
        "color": "3XL / Athletic Heather"
      },
      {
        "id": "103435",
        "title": "3XL / Cypress",
        "sku": "24999971044152386524",
        "priceCents": 3899,
        "color": "3XL / Cypress"
      },
      {
        "id": "102273",
        "title": "3XL / Ecru",
        "sku": "27886188548931067770",
        "priceCents": 3899,
        "color": "3XL / Ecru"
      },
      {
        "id": "103429",
        "title": "3XL / Clay",
        "sku": "20370680124673763899",
        "priceCents": 3899,
        "color": "3XL / Clay"
      },
      {
        "id": "103404",
        "title": "2XL / Athletic Heather",
        "sku": "30008406059755000820",
        "priceCents": 3899,
        "color": "2XL / Athletic Heather"
      },
      {
        "id": "102278",
        "title": "2XL / White",
        "sku": "29755815440228955466",
        "priceCents": 3899,
        "color": "2XL / White"
      },
      {
        "id": "103434",
        "title": "2XL / Cypress",
        "sku": "61716831812367439930",
        "priceCents": 3899,
        "color": "2XL / Cypress"
      },
      {
        "id": "102272",
        "title": "2XL / Ecru",
        "sku": "28674328291776779356",
        "priceCents": 3899,
        "color": "2XL / Ecru"
      },
      {
        "id": "103440",
        "title": "2XL / Eucalyptus",
        "sku": "36654293558409029238",
        "priceCents": 3899,
        "color": "2XL / Eucalyptus"
      },
      {
        "id": "103410",
        "title": "2XL / Navy",
        "sku": "10723128247024171251",
        "priceCents": 3899,
        "color": "2XL / Navy"
      },
      {
        "id": "102284",
        "title": "2XL / Orchid",
        "sku": "28140222580566003542",
        "priceCents": 3899,
        "color": "2XL / Orchid"
      },
      {
        "id": "103446",
        "title": "2XL / Midnight Blue",
        "sku": "31151938449060711960",
        "priceCents": 3899,
        "color": "2XL / Midnight Blue"
      },
      {
        "id": "103452",
        "title": "2XL / Pine Green",
        "sku": "12009973022756585012",
        "priceCents": 3899,
        "color": "2XL / Pine Green"
      },
      {
        "id": "102266",
        "title": "2XL / Black",
        "sku": "24290402568021820752",
        "priceCents": 3899,
        "color": "2XL / Black"
      },
      {
        "id": "103458",
        "title": "2XL / Pistachio",
        "sku": "33482618703084954629",
        "priceCents": 3899,
        "color": "2XL / Pistachio"
      },
      {
        "id": "103464",
        "title": "2XL / Plum",
        "sku": "21406793327938974062",
        "priceCents": 3899,
        "color": "2XL / Plum"
      },
      {
        "id": "103422",
        "title": "2XL / Butter",
        "sku": "19737275603267366900",
        "priceCents": 3899,
        "color": "2XL / Butter"
      },
      {
        "id": "103428",
        "title": "2XL / Clay",
        "sku": "14296771758058584387",
        "priceCents": 3899,
        "color": "2XL / Clay"
      },
      {
        "id": "102277",
        "title": "XL / White",
        "sku": "27810943733792331040",
        "priceCents": 3899,
        "color": "XL / White"
      },
      {
        "id": "103439",
        "title": "XL / Eucalyptus",
        "sku": "33882327913947846408",
        "priceCents": 3899,
        "color": "XL / Eucalyptus"
      },
      {
        "id": "102282",
        "title": "L / Orchid",
        "sku": "65824168190311369355",
        "priceCents": 3899,
        "color": "L / Orchid"
      },
      {
        "id": "103408",
        "title": "L / Navy",
        "sku": "34019640755693178887",
        "priceCents": 3899,
        "color": "L / Navy"
      },
      {
        "id": "102265",
        "title": "XL / Black",
        "sku": "76811888282519585145",
        "priceCents": 3899,
        "color": "XL / Black"
      },
      {
        "id": "103406",
        "title": "S / Navy",
        "sku": "25712678156367504906",
        "priceCents": 3899,
        "color": "S / Navy"
      },
      {
        "id": "103462",
        "title": "L / Plum",
        "sku": "40157816178213203742",
        "priceCents": 3899,
        "color": "L / Plum"
      },
      {
        "id": "103454",
        "title": "S / Pistachio",
        "sku": "26340659963681443125",
        "priceCents": 3899,
        "color": "S / Pistachio"
      },
      {
        "id": "103409",
        "title": "XL / Navy",
        "sku": "13542428815207032341",
        "priceCents": 3899,
        "color": "XL / Navy"
      },
      {
        "id": "103430",
        "title": "S / Cypress",
        "sku": "23544963930842360091",
        "priceCents": 3899,
        "color": "S / Cypress"
      },
      {
        "id": "103442",
        "title": "S / Midnight Blue",
        "sku": "26995864734101583257",
        "priceCents": 3899,
        "color": "S / Midnight Blue"
      },
      {
        "id": "102281",
        "title": "M / Orchid",
        "sku": "14212922430129913068",
        "priceCents": 3899,
        "color": "M / Orchid"
      },
      {
        "id": "103402",
        "title": "L / Athletic Heather",
        "sku": "22141482868020697202",
        "priceCents": 3899,
        "color": "L / Athletic Heather"
      },
      {
        "id": "103420",
        "title": "L / Butter",
        "sku": "14672586034202872114",
        "priceCents": 3899,
        "color": "L / Butter"
      },
      {
        "id": "103438",
        "title": "L / Eucalyptus",
        "sku": "91658744821721233636",
        "priceCents": 3899,
        "color": "L / Eucalyptus"
      },
      {
        "id": "102263",
        "title": "M / Black",
        "sku": "26357189125434944399",
        "priceCents": 3899,
        "color": "M / Black"
      },
      {
        "id": "103424",
        "title": "S / Clay",
        "sku": "33359259341516616666",
        "priceCents": 3899,
        "color": "S / Clay"
      },
      {
        "id": "103450",
        "title": "L / Pine Green",
        "sku": "11065037651053596097",
        "priceCents": 3899,
        "color": "L / Pine Green"
      },
      {
        "id": "103451",
        "title": "XL / Pine Green",
        "sku": "22811174863253557168",
        "priceCents": 3899,
        "color": "XL / Pine Green"
      },
      {
        "id": "103436",
        "title": "S / Eucalyptus",
        "sku": "14872520708506177305",
        "priceCents": 3899,
        "color": "S / Eucalyptus"
      },
      {
        "id": "103425",
        "title": "M / Clay",
        "sku": "25169898182556750244",
        "priceCents": 3899,
        "color": "M / Clay"
      },
      {
        "id": "103449",
        "title": "M / Pine Green",
        "sku": "25078600274503618532",
        "priceCents": 3899,
        "color": "M / Pine Green"
      },
      {
        "id": "102275",
        "title": "M / White",
        "sku": "75011068689288948965",
        "priceCents": 3899,
        "color": "M / White"
      },
      {
        "id": "103437",
        "title": "M / Eucalyptus",
        "sku": "46263204681758223713",
        "priceCents": 3899,
        "color": "M / Eucalyptus"
      },
      {
        "id": "103460",
        "title": "S / Plum",
        "sku": "18595874410014454812",
        "priceCents": 3899,
        "color": "S / Plum"
      },
      {
        "id": "103431",
        "title": "M / Cypress",
        "sku": "12021480483466719500",
        "priceCents": 3899,
        "color": "M / Cypress"
      },
      {
        "id": "103455",
        "title": "M / Pistachio",
        "sku": "22471951899666884879",
        "priceCents": 3899,
        "color": "M / Pistachio"
      },
      {
        "id": "103457",
        "title": "XL / Pistachio",
        "sku": "27591181018582783295",
        "priceCents": 3899,
        "color": "XL / Pistachio"
      },
      {
        "id": "103463",
        "title": "XL / Plum",
        "sku": "88980742240783376215",
        "priceCents": 3899,
        "color": "XL / Plum"
      },
      {
        "id": "103407",
        "title": "M / Navy",
        "sku": "18336864729616917538",
        "priceCents": 3899,
        "color": "M / Navy"
      },
      {
        "id": "103444",
        "title": "L / Midnight Blue",
        "sku": "26817576421053452144",
        "priceCents": 3899,
        "color": "L / Midnight Blue"
      },
      {
        "id": "102264",
        "title": "L / Black",
        "sku": "20075492917268985827",
        "priceCents": 3899,
        "color": "L / Black"
      },
      {
        "id": "103403",
        "title": "XL / Athletic Heather",
        "sku": "61113152656409248495",
        "priceCents": 3899,
        "color": "XL / Athletic Heather"
      },
      {
        "id": "103418",
        "title": "S / Butter",
        "sku": "90001384580346088693",
        "priceCents": 3899,
        "color": "S / Butter"
      },
      {
        "id": "102270",
        "title": "L / Ecru",
        "sku": "10198712874721920342",
        "priceCents": 3899,
        "color": "L / Ecru"
      },
      {
        "id": "103445",
        "title": "XL / Midnight Blue",
        "sku": "12552991480429156328",
        "priceCents": 3899,
        "color": "XL / Midnight Blue"
      },
      {
        "id": "102268",
        "title": "S / Ecru",
        "sku": "58549958217401395268",
        "priceCents": 3899,
        "color": "S / Ecru"
      },
      {
        "id": "103432",
        "title": "L / Cypress",
        "sku": "28513569401159313996",
        "priceCents": 3899,
        "color": "L / Cypress"
      },
      {
        "id": "102269",
        "title": "M / Ecru",
        "sku": "29813596775115036398",
        "priceCents": 3899,
        "color": "M / Ecru"
      },
      {
        "id": "103426",
        "title": "L / Clay",
        "sku": "29758713309476642307",
        "priceCents": 3899,
        "color": "L / Clay"
      },
      {
        "id": "102274",
        "title": "S / White",
        "sku": "14264533772738309450",
        "priceCents": 3899,
        "color": "S / White"
      },
      {
        "id": "103427",
        "title": "XL / Clay",
        "sku": "91034657067177439733",
        "priceCents": 3899,
        "color": "XL / Clay"
      },
      {
        "id": "103400",
        "title": "S / Athletic Heather",
        "sku": "35067347286074981056",
        "priceCents": 3899,
        "color": "S / Athletic Heather"
      },
      {
        "id": "103401",
        "title": "M / Athletic Heather",
        "sku": "12887814989442363732",
        "priceCents": 3899,
        "color": "M / Athletic Heather"
      },
      {
        "id": "103433",
        "title": "XL / Cypress",
        "sku": "70975761221986570760",
        "priceCents": 3899,
        "color": "XL / Cypress"
      },
      {
        "id": "103461",
        "title": "M / Plum",
        "sku": "15839626903723750175",
        "priceCents": 3899,
        "color": "M / Plum"
      },
      {
        "id": "102271",
        "title": "XL / Ecru",
        "sku": "21525332145889107957",
        "priceCents": 3899,
        "color": "XL / Ecru"
      },
      {
        "id": "103421",
        "title": "XL / Butter",
        "sku": "65373035187106379423",
        "priceCents": 3899,
        "color": "XL / Butter"
      },
      {
        "id": "103448",
        "title": "S / Pine Green",
        "sku": "32806289217302810314",
        "priceCents": 3899,
        "color": "S / Pine Green"
      },
      {
        "id": "102280",
        "title": "S / Orchid",
        "sku": "14847125301953957433",
        "priceCents": 3899,
        "color": "S / Orchid"
      },
      {
        "id": "103443",
        "title": "M / Midnight Blue",
        "sku": "33524960835417036786",
        "priceCents": 3899,
        "color": "M / Midnight Blue"
      },
      {
        "id": "103419",
        "title": "M / Butter",
        "sku": "32832376058055646752",
        "priceCents": 3899,
        "color": "M / Butter"
      },
      {
        "id": "102283",
        "title": "XL / Orchid",
        "sku": "66333464063827727902",
        "priceCents": 3899,
        "color": "XL / Orchid"
      },
      {
        "id": "102262",
        "title": "S / Black",
        "sku": "12086726877688998576",
        "priceCents": 3899,
        "color": "S / Black"
      },
      {
        "id": "103456",
        "title": "L / Pistachio",
        "sku": "25890221945802836900",
        "priceCents": 3899,
        "color": "L / Pistachio"
      },
      {
        "id": "102276",
        "title": "L / White",
        "sku": "23574154028541429980",
        "priceCents": 3899,
        "color": "L / White"
      }
    ]
  },
  {
    "printifyId": "68ce1e546d18a047f20632be",
    "name": "Dinger Don Hat",
    "tagline": "Dinger Don Hat",
    "description": "This cap features an embroidered design of golfing dinger Don the gopher, perfect for those who love golf and quirky characters. It adds a fun and playful vibe to any outfit, making it a great accessory for casual outings or sports events. Ideal for golf enthusiasts, sports fans, and those who appreciate unique headwear. Perfect for Father's Day, birthdays, or golf-themed parties.<br/><br/>Product features<br/>- Six-panel structured design with eyelets and curved visor<br/>- One size fits most with stretchy band<br/>- Made of polyester, cotton, and spandex twill<br/>- Mid-profile with low-profile embroidery area<br/>- Six embroidered eyelets for ventilation<br/>- Great for head size 22”–2...",
    "priceCents": 2999,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "One Size"
    ],
    "image": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118701/109496/dinger-don-hat.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118701/109496/dinger-don-hat.jpg?camera_label=front",
        "variantIds": [
          118700,
          118701
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118701/109531/dinger-don-hat.jpg?camera_label=back",
        "variantIds": [
          118700,
          118701
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118701/110061/dinger-don-hat.jpg?camera_label=person-1-front",
        "variantIds": [
          118700,
          118701
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118701/110152/dinger-don-hat.jpg?camera_label=person-1-back",
        "variantIds": [
          118700,
          118701
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118709/109496/dinger-don-hat.jpg?camera_label=front",
        "variantIds": [
          118708,
          118709
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118709/109531/dinger-don-hat.jpg?camera_label=back",
        "variantIds": [
          118708,
          118709
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118709/110061/dinger-don-hat.jpg?camera_label=person-1-front",
        "variantIds": [
          118708,
          118709
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118709/110152/dinger-don-hat.jpg?camera_label=person-1-back",
        "variantIds": [
          118708,
          118709
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118715/109496/dinger-don-hat.jpg?camera_label=front",
        "variantIds": [
          118714,
          118715
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118715/109531/dinger-don-hat.jpg?camera_label=back",
        "variantIds": [
          118714,
          118715
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118715/110061/dinger-don-hat.jpg?camera_label=person-1-front",
        "variantIds": [
          118714,
          118715
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118715/110152/dinger-don-hat.jpg?camera_label=person-1-back",
        "variantIds": [
          118714,
          118715
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118721/109496/dinger-don-hat.jpg?camera_label=front",
        "variantIds": [
          118720,
          118721
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118721/109531/dinger-don-hat.jpg?camera_label=back",
        "variantIds": [
          118720,
          118721
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118721/110061/dinger-don-hat.jpg?camera_label=person-1-front",
        "variantIds": [
          118720,
          118721
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118721/110152/dinger-don-hat.jpg?camera_label=person-1-back",
        "variantIds": [
          118720,
          118721
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118705/109496/dinger-don-hat.jpg?camera_label=front",
        "variantIds": [
          118704,
          118705
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118705/109531/dinger-don-hat.jpg?camera_label=back",
        "variantIds": [
          118704,
          118705
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118705/110061/dinger-don-hat.jpg?camera_label=person-1-front",
        "variantIds": [
          118704,
          118705
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1e546d18a047f20632be/118705/110152/dinger-don-hat.jpg?camera_label=person-1-back",
        "variantIds": [
          118704,
          118705
        ]
      }
    ],
    "category": "hats",
    "printifyVariantId": "118701",
    "sku": "12972188858629161347",
    "costCents": 2356,
    "variants": [
      {
        "id": "118700",
        "title": "S/M / White",
        "sku": "22510394947737671546",
        "priceCents": 2999,
        "color": "S/M / White"
      },
      {
        "id": "118701",
        "title": "L/XL / White",
        "sku": "12972188858629161347",
        "priceCents": 2999,
        "color": "L/XL / White"
      },
      {
        "id": "118704",
        "title": "S/M / Dark Navy",
        "sku": "27276133298311452260",
        "priceCents": 2999,
        "color": "S/M / Dark Navy"
      },
      {
        "id": "118705",
        "title": "L/XL / Dark Navy",
        "sku": "17207549737700305602",
        "priceCents": 2999,
        "color": "L/XL / Dark Navy"
      },
      {
        "id": "118708",
        "title": "S/M / Grey",
        "sku": "22209288919371668123",
        "priceCents": 2999,
        "color": "S/M / Grey"
      },
      {
        "id": "118709",
        "title": "L/XL / Grey",
        "sku": "32724248917478873724",
        "priceCents": 2999,
        "color": "L/XL / Grey"
      },
      {
        "id": "118714",
        "title": "S/M / Khaki",
        "sku": "25691932432888279907",
        "priceCents": 2999,
        "color": "S/M / Khaki"
      },
      {
        "id": "118715",
        "title": "L/XL / Khaki",
        "sku": "12485907286593264066",
        "priceCents": 2999,
        "color": "L/XL / Khaki"
      },
      {
        "id": "118720",
        "title": "S/M / Olive",
        "sku": "75341867153442384122",
        "priceCents": 2999,
        "color": "S/M / Olive"
      },
      {
        "id": "118721",
        "title": "L/XL / Olive",
        "sku": "50919981383012773257",
        "priceCents": 2999,
        "color": "L/XL / Olive"
      }
    ]
  },
  {
    "printifyId": "68ce1b930b3d660c3a0534d0",
    "name": "Dingersville Classic Dad Cap, Casual Hat for Golf Lovers, Gift for Fathers' Day, Embroidered Dad Hat, Unisex Summer Cap",
    "tagline": "Dingersville Classic Dad Cap, Casual Hat for Golf Lovers, Gift for Fathers' Day, Embroidered Dad Hat, Unisex Summer Cap",
    "description": "Elevate your everyday style with this Classic Dad Cap, designed for comfort and versatility. Ideal for casual outings, it effortlessly blends with a variety of outfits, from beachwear to weekend casual. Its relaxed fit provides a laid-back vibe, making it perfect for outdoor activities or simply lounging on a sunny day. This cap is great for anyone who appreciates simple yet functional accessories, making it a thoughtful gift for fathers, friends, or anyone who loves a classic look. It's an excellent choice for Father’s Day, birthdays, or just because!<br/><br/>Product features<br/>- Comfortable fit for all-day wear<br/>- 6-panel structure with eyelets for breathability<br/>- Precurved vi...",
    "priceCents": 3347,
    "currency": "usd",
    "color": "White",
    "colors": [
      "White",
      "Stone",
      "Khaki",
      "Green Camo",
      "Spruce",
      "Light Blue",
      "Navy",
      "Black",
      "Dark Grey",
      "Pink",
      "Cranberry"
    ],
    "sizes": [],
    "image": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105381/102724/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=back",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105381/102724/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=back",
        "variantIds": [
          105381
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105381/102740/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=person-1-front",
        "variantIds": [
          105381
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105381/102743/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=person-1-back",
        "variantIds": [
          105381
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105381/102307/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=front",
        "variantIds": [
          105381
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105381/110918/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=size-chart",
        "variantIds": [
          105381
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105380/102724/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=back",
        "variantIds": [
          105380
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105380/102740/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=person-1-front",
        "variantIds": [
          105380
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105380/102743/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=person-1-back",
        "variantIds": [
          105380
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105380/102307/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=front",
        "variantIds": [
          105380
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105380/110918/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=size-chart",
        "variantIds": [
          105380
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105375/102724/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=back",
        "variantIds": [
          105375
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105375/102740/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=person-1-front",
        "variantIds": [
          105375
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105375/102743/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=person-1-back",
        "variantIds": [
          105375
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105375/102307/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=front",
        "variantIds": [
          105375
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce1b930b3d660c3a0534d0/105375/110918/dingersville-classic-dad-cap-casual-hat-for-golf-lovers-gift-for-fathers-day-embroidered-dad-hat-unisex-summer-cap.jpg?camera_label=size-chart",
        "variantIds": [
          105375
        ]
      }
    ],
    "category": "hats",
    "printifyVariantId": "105381",
    "sku": "12750256314713147069",
    "costCents": 2095,
    "variants": [
      {
        "id": "105375",
        "title": "Khaki / One size",
        "sku": "14554673769339133124",
        "priceCents": 3347,
        "color": "Khaki / One size"
      },
      {
        "id": "105381",
        "title": "White / One size",
        "sku": "12750256314713147069",
        "priceCents": 3347,
        "color": "White / One size"
      },
      {
        "id": "105380",
        "title": "Stone / One size",
        "sku": "26286635524028325011",
        "priceCents": 3347,
        "color": "Stone / One size"
      }
    ]
  },
  {
    "printifyId": "68ce192cc2eb10522b011c98",
    "name": "Golf Cart Dinger Don",
    "tagline": "Golf Cart Dinger Don",
    "description": "This Polo Shirt features a fun pattern with Dinger Don the gopher driving a golf cart, giving off a playful and casual vibe. Perfect for golf enthusiasts or those who enjoy quirky designs. Ideal for casual outings, golf games, Father's Day, or leisure activities.<br/><br/>Product features<br/>- 100% Polyester for durability and quick drying<br/>- 3 button placket with black or white buttons<br/>- Choose between white or black thread color<br/>- Extra light fabric for comfort (4.13 oz/yd²)<br/>- Pointed collar for a classic look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max 30C or 90F), gentle cycle<br/>",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68ce192cc2eb10522b011c98/112163/106286/golf-cart-dinger-don.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68ce192cc2eb10522b011c98/112163/106286/golf-cart-dinger-don.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce192cc2eb10522b011c98/112163/106288/golf-cart-dinger-don.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce192cc2eb10522b011c98/112163/106290/golf-cart-dinger-don.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "63399205702171107985",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "78411889922063753898",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "71520338937504682915",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "63399205702171107985",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "44979326198603110379",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "32582136211200395137",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "12464099126613519809",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68ce17f56d18a047f206316d",
    "name": "Stylish AOP Unisex Polo Shirt | Vibrant Patterned Shirt for Casual Outings, Summer Vacations, Gifts, Parties, Tropical Vibes",
    "tagline": "Stylish AOP Unisex Polo Shirt | Vibrant Patterned Shirt for Casual Outings, Summer Vacations, Gifts, Parties, Tropical Vibes",
    "description": "Elevate your wardrobe with this stylish Unisex Polo Shirt, designed for comfort and flair. Crafted from 100% polyester, it feels lightweight and breathable, ideal for warm days or casual outings. The striking pattern brings a vibrant touch, making it perfect for those who embrace uniqueness in their attire. Whether you're at a picnic, attending a summer party, or just enjoying a laid-back weekend, this polo shirt fits seamlessly into any relaxed yet trendy ensemble. Perfect for fashion-forward individuals who appreciate quality and style, this shirt makes an excellent gift for birthdays, anniversaries, or just to brighten someone's day.<br/><br/>Product features<br/>- 100% polyester for d...",
    "priceCents": 7247,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68ce17f56d18a047f206316d/112163/106286/stylish-aop-unisex-polo-shirt-vibrant-patterned-shirt-for-casual-outings-summer-vacations-gifts-parties-tropical-vibes.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68ce17f56d18a047f206316d/112163/106286/stylish-aop-unisex-polo-shirt-vibrant-patterned-shirt-for-casual-outings-summer-vacations-gifts-parties-tropical-vibes.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce17f56d18a047f206316d/112163/106288/stylish-aop-unisex-polo-shirt-vibrant-patterned-shirt-for-casual-outings-summer-vacations-gifts-parties-tropical-vibes.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce17f56d18a047f206316d/112163/106290/stylish-aop-unisex-polo-shirt-vibrant-patterned-shirt-for-casual-outings-summer-vacations-gifts-parties-tropical-vibes.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "polos",
    "printifyVariantId": "112163",
    "sku": "16601521559431485188",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "27182206729919240178",
        "priceCents": 6825,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "12841039202250276603",
        "priceCents": 6878,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "16601521559431485188",
        "priceCents": 7247,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "18396008871426404987",
        "priceCents": 7440,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "10415019502574285291",
        "priceCents": 8317,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "12634659723066394367",
        "priceCents": 8790,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68ce147899d4ee898b0427f9",
    "name": "Cream Color Dinger Don",
    "tagline": "Cream Color Dinger Don",
    "description": "This cream color shirt features Dinger Don, a golfing gopher from Dingersville. Perfect for golf enthusiasts or anyone who loves cute animal characters. Great for casual wear or a day on the golf course. Ideal for gifting on Father's Day, birthdays, or golfing events.<br/><br/>Product features<br/>- 100% Polyester fabric for durability and quick drying<br/>- 3 button placket with black or white buttons<br/>- Choose between white or black thread color<br/>- Extra light fabric for comfort (4.13 oz/yd² (140g/m²))<br/>- Pointed collar for a classic look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max 30C or 90F), gentle...",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68ce147899d4ee898b0427f9/112163/106286/cream-color-dinger-don.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68ce147899d4ee898b0427f9/112163/106286/cream-color-dinger-don.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce147899d4ee898b0427f9/112163/106288/cream-color-dinger-don.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ce147899d4ee898b0427f9/112163/106290/cream-color-dinger-don.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "24790009021292640543",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "54878518519387055127",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "26235930638039581304",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "24790009021292640543",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "76885157425902843268",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "11246263268065733847",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "19037114944740843836",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68c373b5e14be45566002950",
    "name": "Navy Dinger Don",
    "tagline": "Navy Dinger Don",
    "description": "This Polo Shirt from Dingersville Golf Apparel features our beloved character Dinger Don the Gopher, giving off a fun and sporty vibe. Perfect for golf enthusiasts and those who appreciate quirky designs. Ideal for golf events, casual outings, and everyday wear.<br/><br/>Product features<br/>- 100% Polyester fabric for durability and quick drying<br/>- 3 button placket with black or white buttons<br/>- Choice of white or black thread color<br/>- Lightweight fabric at 4.13 oz/yd² (140g/m²)<br/>- Pointed collar for a polished look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max 30C or 90F), gentle cycle<br/>",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68c373b5e14be45566002950/112163/106286/navy-dinger-don.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68c373b5e14be45566002950/112163/106286/navy-dinger-don.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68c373b5e14be45566002950/112163/106288/navy-dinger-don.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68c373b5e14be45566002950/112163/106290/navy-dinger-don.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "18464535367870694933",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "29408270706792802330",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "25361490939026811733",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "18464535367870694933",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "76321665784751616437",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "20558764012641487751",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "11012099798094101975",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68c3549ce4858a0b710566db",
    "name": "Dinger Can Cooler",
    "tagline": "Dinger Can Cooler",
    "description": "Stay cool and stylish with this fun dingersville can cooler. Perfect for keeping your drinks cold while adding a touch of personality to your gatherings. Ideal for those who enjoy outdoor events, barbecues, parties, and tailgating. Great for summer celebrations, picnics, and sports events.<br/><br/>Product features<br/>- 100% Polyester exterior for durability<br/>- 100% Foam liner interior for stability and grip<br/>- Vibrant colors for a bright and crisp design<br/>- Lightweight and smooth material for easy handling<br/>- Available in Regular Can and Slim Can sizes<br/><br/>Care instructions<br/>- Wipe with a damp cloth, air dry or use a soft, non-abrasive cloth\t\t\t\t\t<br/>",
    "priceCents": 753,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "One Size"
    ],
    "image": "https://images-api.printify.com/mockup/68c3549ce4858a0b710566db/78460/38485/dinger-can-cooler.jpg?camera_label=flat-front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68c3549ce4858a0b710566db/78460/38485/dinger-can-cooler.jpg?camera_label=flat-front",
        "variantIds": [
          78460
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68c3549ce4858a0b710566db/78460/38487/dinger-can-cooler.jpg?camera_label=flat-back",
        "variantIds": [
          78460
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68c3549ce4858a0b710566db/78460/39184/dinger-can-cooler.jpg?camera_label=front",
        "variantIds": [
          78460
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68c3549ce4858a0b710566db/78460/39201/dinger-can-cooler.jpg?camera_label=back",
        "variantIds": [
          78460
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "78460",
    "sku": "25642353941259804495",
    "costCents": 452,
    "variants": [
      {
        "id": "78460",
        "title": "Regular Can",
        "sku": "25642353941259804495",
        "priceCents": 753,
        "color": "Regular Can"
      }
    ]
  },
  {
    "printifyId": "68b8e20091ccadd32e08bfca",
    "name": "Fun Golf Vibes Dinger",
    "tagline": "Fun Golf Vibes Dinger",
    "description": "A vibrant polo shirt featuring the fun vibes of golf, perfect for those who enjoy the sport or want to add a playful touch to their wardrobe. This polo can be worn casually or on the golf course, making it a versatile addition to any golf lover's closet. Ideal for golf enthusiasts, Father's Day, and casual outings.<br/><br/>Product features<br/>- 100% Polyester fabric for durability and quick drying<br/>- 3 button placket with black or white buttons<br/>- Choice of white or black thread color<br/>- Extra light fabric for comfort (4.13 oz/yd²)<br/>- Pointed collar for a polished look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine w...",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68b8e20091ccadd32e08bfca/112163/106286/fun-golf-vibes-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68b8e20091ccadd32e08bfca/112163/106286/fun-golf-vibes-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68b8e20091ccadd32e08bfca/112163/106288/fun-golf-vibes-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68b8e20091ccadd32e08bfca/112163/106290/fun-golf-vibes-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "33886382232840970994",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "47855441774693005796",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "21049040765903883435",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "33886382232840970994",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "17947855953556687411",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "25684630854352902784",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "13674495487962737162",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68b0ae4f7ce593f16804be9b",
    "name": "adidas® Quarter-Zip Pullover (Embroidery)",
    "tagline": "adidas® Quarter-Zip Pullover (Embroidery)",
    "description": "<p>Gear up for performance with the adidas® Quarter-Zip Pullover, a must-have for activewear enthusiasts. Made from 100% recycled polyester, this lightweight, moisture-wicking pullover keeps you cool, dry, and protected from the sun with its UPF 50+ rating.&nbsp;<br><br>Featuring a relaxed fit, self-mock collar, and contrast adidas logo on the left sleeve, it’s both stylish and functional. Ideal for workouts or casual wear, this eco-friendly piece is perfect for custom embroidery, allowing you to personalize your athletic gear while supporting sustainability.</p><br/><p>.: Fabric weight: 6.1 oz./yd.² (206.8 g/m²)<br/>.: Relaxed fit<br/>.: Self-mock collar, bottom hem, and cuffs<br/>.: UPF...",
    "priceCents": 10533,
    "currency": "usd",
    "color": "White",
    "colors": [
      "White",
      "Black Heather",
      "Collegiate Navy",
      "Black"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL",
      "4XL"
    ],
    "image": "https://images-api.printify.com/mockup/68b0ae4f7ce593f16804be9b/118444/109474/adidas-quarter-zip-pullover-embroidery.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68b0ae4f7ce593f16804be9b/118444/109474/adidas-quarter-zip-pullover-embroidery.jpg?camera_label=front",
        "variantIds": [
          118436,
          118440,
          118444,
          118448,
          118452,
          118456,
          118460
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68b0ae4f7ce593f16804be9b/118444/109476/adidas-quarter-zip-pullover-embroidery.jpg?camera_label=back",
        "variantIds": [
          118436,
          118440,
          118444,
          118448,
          118452,
          118456,
          118460
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68b0ae4f7ce593f16804be9b/118444/110466/adidas-quarter-zip-pullover-embroidery.jpg?camera_label=front-2",
        "variantIds": [
          118436,
          118440,
          118444,
          118448,
          118452,
          118456,
          118460
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68b0ae4f7ce593f16804be9b/118444/110467/adidas-quarter-zip-pullover-embroidery.jpg?camera_label=back-2",
        "variantIds": [
          118436,
          118440,
          118444,
          118448,
          118452,
          118456,
          118460
        ]
      }
    ],
    "category": "hoodies",
    "printifyVariantId": "118444",
    "sku": "32633084292450909792",
    "costCents": 6320,
    "variants": [
      {
        "id": "118436",
        "title": "Collegiate Navy / S",
        "sku": "25596965575093126073",
        "priceCents": 10533,
        "color": "Collegiate Navy / S"
      },
      {
        "id": "118440",
        "title": "Collegiate Navy / M",
        "sku": "32750051797598878399",
        "priceCents": 10533,
        "color": "Collegiate Navy / M"
      },
      {
        "id": "118444",
        "title": "Collegiate Navy / L",
        "sku": "32633084292450909792",
        "priceCents": 10533,
        "color": "Collegiate Navy / L"
      },
      {
        "id": "118448",
        "title": "Collegiate Navy / XL",
        "sku": "18576308327533751879",
        "priceCents": 10533,
        "color": "Collegiate Navy / XL"
      },
      {
        "id": "118452",
        "title": "Collegiate Navy / 2XL",
        "sku": "27027618467741606585",
        "priceCents": 10840,
        "color": "Collegiate Navy / 2XL"
      },
      {
        "id": "118456",
        "title": "Collegiate Navy / 3XL",
        "sku": "13313223967083923866",
        "priceCents": 11143,
        "color": "Collegiate Navy / 3XL"
      },
      {
        "id": "118460",
        "title": "Collegiate Navy / 4XL",
        "sku": "23532541674093522182",
        "priceCents": 11447,
        "color": "Collegiate Navy / 4XL"
      }
    ]
  },
  {
    "printifyId": "68acb16ceb5eab1df5096758",
    "name": "Golfing Animal Dinger",
    "tagline": "Golfing Animal Dinger",
    "description": "This Polo Shirt features a fun design with lions, tigers, horses, and squids golfing, perfect for those who enjoy a quirky and playful style. It is great for casual outings or sports activities. Ideal for animal lovers and golf enthusiasts. Perfect for birthdays, Father's Day, or a unique gift for a golfing buddy.<br/><br/>Product features<br/>- 100% Polyester for durability<br/>- 3 button placket with black or white buttons<br/>- Choice of white or black thread color<br/>- Lightweight fabric for comfort (4.13 oz/yd² (140g/m²))<br/>- Pointed collar for a classic look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max 3...",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68acb16ceb5eab1df5096758/112163/106286/golfing-animal-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68acb16ceb5eab1df5096758/112163/106286/golfing-animal-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68acb16ceb5eab1df5096758/112163/106288/golfing-animal-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68acb16ceb5eab1df5096758/112163/106290/golfing-animal-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "12964613204734954717",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "31626365103390230673",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "77281503304799494530",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "12964613204734954717",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "32838968384641094288",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "24124731677219825201",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "18503309623427666141",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68ac919bdf952351270e60af",
    "name": "Detroit Style Pizza Dinger",
    "tagline": "Detroit Style Pizza Dinger",
    "description": "This Polo Shirt features a graphic of a detroit style pizza, perfect for food lovers and casual wear. It gives a fun and relaxed vibe, suitable for everyday wear or pizza-themed events and gatherings. Ideal for both men and women.<br/><br/>Product features<br/>- 100% Polyester fabric for strength and durability<br/>- 3 button placket with black or white buttons<br/>- Choose between white or black thread color<br/>- Extra light fabric for comfort (4.13 oz/yd² (140g/m²))<br/>- Pointed collar for a polished look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max 30C or 90F), gentle cycle<br/>",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68ac919bdf952351270e60af/112163/106286/detroit-style-pizza-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68ac919bdf952351270e60af/112163/106286/detroit-style-pizza-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ac919bdf952351270e60af/112163/106288/detroit-style-pizza-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68ac919bdf952351270e60af/112163/106290/detroit-style-pizza-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "21131299028738641437",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "23143715200359790876",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "52136210160847558502",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "21131299028738641437",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "14202307931241936806",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "18150012686525390261",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "17225863231078421758",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a679eeab64b4f2fe04563f",
    "name": "Golf Grief Dinger",
    "tagline": "Golf Grief Dinger",
    "description": "This Polo Shirt features stages of grief related to golf, perfect for golf enthusiasts looking for a unique and humorous piece to add to their wardrobe. It can be a great conversation starter on the golf course or a fun gift for a golf lover's birthday or Father's Day.<br/><br/>Product features<br/>- 100% Polyester and extra light fabric for durability and comfort<br/>- 3 button placket with black or white buttons for a customizable look<br/>- Choose between white or black thread color for a personalized touch<br/>- Pointed collar for a classic polo shirt style<br/>- Ideal for golf enthusiasts and as a gift for golf-themed occasions<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumbl...",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a679eeab64b4f2fe04563f/112163/106286/golf-grief-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a679eeab64b4f2fe04563f/112163/106286/golf-grief-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a679eeab64b4f2fe04563f/112163/106288/golf-grief-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a679eeab64b4f2fe04563f/112163/106290/golf-grief-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "74454488184575459609",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "15575044386350772781",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "17679184330132905674",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "74454488184575459609",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "24442700544096896180",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "25396172784200896852",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "19155409629168816498",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a66c5bfe78bf3d8e06c7df",
    "name": "Green and White Mascot Dinger",
    "tagline": "Green and White Mascot Dinger",
    "description": "This Polo Shirt features our dingersville mascot in a ready-to-fight stance, perfect for golf enthusiasts looking to add a touch of fun to their outfit. The shirt is made of 100% polyester, making it strong, durable, and quick-drying, with a pointed collar and a 3 button placket available in black or white.<br/><br/>Product features<br/>- 100% Polyester fabric for strength and durability<br/>- 3 button placket with black or white buttons<br/>- Choice of white or black thread color<br/>- Lightweight fabric at 4.13 oz/yd² (140g/m²)<br/>- Pointed collar for a classic look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max...",
    "priceCents": 7247,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a66c5bfe78bf3d8e06c7df/112163/106286/green-and-white-mascot-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a66c5bfe78bf3d8e06c7df/112163/106286/green-and-white-mascot-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a66c5bfe78bf3d8e06c7df/112163/106288/green-and-white-mascot-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a66c5bfe78bf3d8e06c7df/112163/106290/green-and-white-mascot-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "16814103502374113787",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "23727944444320363213",
        "priceCents": 6825,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "48318507823131653385",
        "priceCents": 6878,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "16814103502374113787",
        "priceCents": 7247,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "12120063481059195279",
        "priceCents": 7440,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "16581025055524585529",
        "priceCents": 8317,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "78834261417248690572",
        "priceCents": 8790,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a61128a4bf2d8c400f4376",
    "name": "Red Mascot Dinger",
    "tagline": "Red Mascot Dinger",
    "description": "This Polo Shirt features the dingersville mascot rocking red pants, giving off a fun and quirky vibe. Perfect for casual wear or sporty events, ideal for those who love unique and playful design. Great for gift-giving during birthdays, holidays, or team celebrations.<br/><br/>Product features<br/>- 100% Polyester fabric for strength and durability<br/>- 3 button placket with black or white buttons<br/>- Choice of white or black thread color<br/>- Extra light fabric for comfort (4.13 oz/yd² (140g/m²))<br/>- Pointed collar for a classic look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max 30C or 90F), gentle cycle<br/>",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a61128a4bf2d8c400f4376/112163/106286/red-mascot-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a61128a4bf2d8c400f4376/112163/106286/red-mascot-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a61128a4bf2d8c400f4376/112163/106288/red-mascot-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a61128a4bf2d8c400f4376/112163/106290/red-mascot-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "11409081806100880657",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "11076292018674672603",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "31730339348762167435",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "11409081806100880657",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "12806086850205943388",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "13999350840559835795",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "11562713051310977872",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a60d0851a3573a7406aa46",
    "name": "Blue and Yellow Mascot Dinger",
    "tagline": "Blue and Yellow Mascot Dinger",
    "description": "A unisex polo shirt featuring the dingersville mascot golfing in blue and yellow attire. Perfect for golf enthusiasts or sports lovers, this shirt brings a fun and casual vibe. Ideal for casual wear or a day out at the golf course.<br/><br/>Product features<br/>- 100% Polyester fabric for durability and quick drying<br/>- 3 button placket with black or white buttons<br/>- Choose between white or black thread color<br/>- Lightweight fabric for comfort (4.13 oz/yd²)<br/>- Pointed collar for a polished look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max 30C or 90F), gentle cycle<br/>",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a60d0851a3573a7406aa46/112163/106286/blue-and-yellow-mascot-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a60d0851a3573a7406aa46/112163/106286/blue-and-yellow-mascot-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a60d0851a3573a7406aa46/112163/106288/blue-and-yellow-mascot-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a60d0851a3573a7406aa46/112163/106290/blue-and-yellow-mascot-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "24579782374744447273",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "16274836508645819465",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "27464137362168496947",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "24579782374744447273",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "23249975996014300216",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "55385309750313218068",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "12447157418331998890",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a5f9335fa46329be019778",
    "name": "Champagne Golf Bike Shorts",
    "tagline": "Champagne Golf Bike Shorts",
    "description": "These are women's bike shorts designed for golfing, featuring a champagne and elegant print to match a bra top. Perfect for active women looking for stylish and comfortable workout wear. Ideal for golfing and other outdoor activities.<br/><br/>Product features<br/>- 88% polyester, 12% elastane for strength, stretch, and softness<br/>- Without side seams for a smooth, form-fitting look<br/>- All over print for a stylish design<br/>- Thin elastic waistband for a casual look<br/>- Above knee-length shorts for comfort and mobility<br/><br/>Care instructions<br/>- Do not dryclean<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max 30C or 90F)<br/>",
    "priceCents": 3757,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "One Size"
    ],
    "image": "https://images-api.printify.com/mockup/68a5f9335fa46329be019778/73152/22558/champagne-golf-bike-shorts.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a5f9335fa46329be019778/73152/22558/champagne-golf-bike-shorts.jpg?camera_label=front",
        "variantIds": [
          73152
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a5f9335fa46329be019778/73152/22579/champagne-golf-bike-shorts.jpg?camera_label=back",
        "variantIds": [
          73152
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a5f9335fa46329be019778/73152/22701/champagne-golf-bike-shorts.jpg?camera_label=on-person-front",
        "variantIds": [
          73152
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a5f9335fa46329be019778/73152/22703/champagne-golf-bike-shorts.jpg?camera_label=on-person-back",
        "variantIds": [
          73152
        ]
      }
    ],
    "category": "shorts",
    "printifyVariantId": "73152",
    "sku": "32796172035097309188",
    "costCents": 2254,
    "variants": [
      {
        "id": "73152",
        "title": "L / Seam thread color automatically matched to design",
        "sku": "32796172035097309188",
        "priceCents": 3757,
        "color": "L / Seam thread color automatically matched to design"
      }
    ]
  },
  {
    "printifyId": "68a528ec763c24fc850e9c0d",
    "name": "Champaign Dinger Bra",
    "tagline": "Champaign Dinger Bra",
    "description": "This sports bra is perfect for active individuals looking for a comfortable and supportive fit. The moisture-wicking material keeps you cool and dry during any physical activity. The dingersville design adds a fun and playful vibe to your workout wardrobe. Ideal for fitness enthusiasts and sports lovers. Great for gym sessions, yoga classes, and jogging in the park.<br/><br/>Product features<br/>- Moisture-wicking material keeps you cool and dry<br/>- Double-layer front and wide elastic band for support and fit<br/>- All over print for a unique look<br/>- 83% polyester, 17% spandex for strength and stretch<br/>- Assembled in the USA from globally sourced parts<br/><br/>Care instructions<b...",
    "priceCents": 3499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a528ec763c24fc850e9c0d/73138/18078/champaign-dinger-bra.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a528ec763c24fc850e9c0d/73138/18078/champaign-dinger-bra.jpg?camera_label=front",
        "variantIds": [
          73136,
          73137,
          73138,
          73139,
          73140
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a528ec763c24fc850e9c0d/73138/18081/champaign-dinger-bra.jpg?camera_label=back",
        "variantIds": [
          73136,
          73137,
          73138,
          73139,
          73140
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a528ec763c24fc850e9c0d/73138/18282/champaign-dinger-bra.jpg?camera_label=on-person-front",
        "variantIds": [
          73136,
          73137,
          73138,
          73139,
          73140
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a528ec763c24fc850e9c0d/73138/18284/champaign-dinger-bra.jpg?camera_label=on-person-back",
        "variantIds": [
          73136,
          73137,
          73138,
          73139,
          73140
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "73138",
    "sku": "16163271156156636233",
    "costCents": 2536,
    "variants": [
      {
        "id": "73136",
        "title": "S / White stitching",
        "sku": "32068564837599757040",
        "priceCents": 3499,
        "color": "S / White stitching"
      },
      {
        "id": "73137",
        "title": "M / White stitching",
        "sku": "20241748573787874544",
        "priceCents": 3499,
        "color": "M / White stitching"
      },
      {
        "id": "73138",
        "title": "L / White stitching",
        "sku": "16163271156156636233",
        "priceCents": 3499,
        "color": "L / White stitching"
      },
      {
        "id": "73139",
        "title": "XL / White stitching",
        "sku": "22260298660498184810",
        "priceCents": 3499,
        "color": "XL / White stitching"
      },
      {
        "id": "73140",
        "title": "2XL / White stitching",
        "sku": "42662349140967072921",
        "priceCents": 3699,
        "color": "2XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a4da7fd8c4d1e37407c866",
    "name": "Good Vibes Dinger",
    "tagline": "Good Vibes Dinger",
    "description": "A vibrant, all-over print polo shirt featuring a cheerful Dingersville golf theme, including the mascot swinging a club, golf carts, flags, balls, and tropical foliage. Perfect for golf enthusiasts looking to add a pop of color and energy to their wardrobe. Ideal for golf tournaments, Father's Day gifts, and summer occasions.<br/><br/>Product features<br/>- 100% Polyester fabric for durability and quick drying<br/>- 3 button placket with black or white buttons<br/>- Choose between white or black thread color<br/>- Extra light fabric for comfort (4.13 oz/yd² (140g/m²))<br/>- Pointed collar for a classic look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do n...",
    "priceCents": 7247,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a4da7fd8c4d1e37407c866/112163/106286/good-vibes-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a4da7fd8c4d1e37407c866/112163/106286/good-vibes-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a4da7fd8c4d1e37407c866/112163/106288/good-vibes-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a4da7fd8c4d1e37407c866/112163/106290/good-vibes-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "74931803055380268154",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "16581631659645485526",
        "priceCents": 6825,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "13549933105065059869",
        "priceCents": 6878,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "74931803055380268154",
        "priceCents": 7247,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "31674033791059658128",
        "priceCents": 7440,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "18319397137643013362",
        "priceCents": 8317,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "23424824412266753650",
        "priceCents": 8790,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a3f28efa216056080bcd7a",
    "name": "Red Coney Dinger",
    "tagline": "Red Coney Dinger",
    "description": "This funny coney dog inspired polo shirt from the golf brand Dingersville is perfect for those looking to add some humor to their golf attire. The unisex design is relevant for golf lovers and anyone who appreciates a good laugh. Ideal for casual wear on the golf course or for a fun day out with friends. Perfect for Father's Day, birthdays, or any golf-related celebrations.<br/><br/>Product features<br/>- 100% Polyester fabric for durability and quick drying<br/>- 3 button placket with black or white buttons<br/>- Option to choose between white or black thread color<br/>- Extra light fabric for comfort (4.13 oz/yd² (140g/m²))<br/>- Pointed collar for a classic look<br/><br/>Care instructi...",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a3f28efa216056080bcd7a/112163/106286/red-coney-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a3f28efa216056080bcd7a/112163/106286/red-coney-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a3f28efa216056080bcd7a/112163/106288/red-coney-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a3f28efa216056080bcd7a/112163/106290/red-coney-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "12896678969807390568",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "23462981371937730956",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "19392314080015016962",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "12896678969807390568",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "31422915464781214144",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "17856472368438446974",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "20899764437059096665",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a3f04c865f34cdd60984dc",
    "name": "White Coney Dinger",
    "tagline": "White Coney Dinger",
    "description": "This Polo Shirt features a fun coney dog design, perfect for dog lovers who enjoy a playful and unique style. It can be worn casually or dressed up for a fun outing. Ideal for dog owners, animal lovers, and those who appreciate quirky fashion. Relevant for casual wear, dog-themed events, and everyday outings.<br/><br/>Product features<br/>- 100% Polyester for strength and quick drying<br/>- 3 button placket with black or white buttons<br/>- Choose between white or black thread color<br/>- Ultra-light fabric for comfort (4.13 oz/yd²)<br/>- Pointed collar for a classic look<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (...",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a3f04c865f34cdd60984dc/112163/106286/white-coney-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a3f04c865f34cdd60984dc/112163/106286/white-coney-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a3f04c865f34cdd60984dc/112163/106288/white-coney-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a3f04c865f34cdd60984dc/112163/106290/white-coney-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "23101486354205518151",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "33688173964906877002",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "81925428742700368764",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "23101486354205518151",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "29401220953233534391",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "23516814477644985558",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "33991846528169465129",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a3ea0a58993f6b4a0539b7",
    "name": "Hotdog Dinger",
    "tagline": "Hotdog Dinger",
    "description": "A hot dog inspired polo shirt designed for golf enthusiasts from the company Dingersville. This shirt exudes a fun and casual vibe, perfect for a day out on the golf course. Ideal for those who appreciate quirky and unique designs. Perfect for golf tournaments, casual Fridays, BBQs, and summer outings.<br/><br/>Product features<br/>- 100% Polyester fabric for strength and quick drying<br/>- 3 button placket with black or white buttons<br/>- Choose between white or black thread color<br/>- Lightweight fabric for comfort (4.13 oz/yd²)<br/>- Features pointed collar and a fun golf-inspired design<br/><br/>Care instructions<br/>- Do not iron<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>-...",
    "priceCents": 5499,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a3ea0a58993f6b4a0539b7/112163/106286/hotdog-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a3ea0a58993f6b4a0539b7/112163/106286/hotdog-dinger.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a3ea0a58993f6b4a0539b7/112163/106288/hotdog-dinger.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a3ea0a58993f6b4a0539b7/112163/106290/hotdog-dinger.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112163",
    "sku": "17583052203475864024",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "12676789535186555177",
        "priceCents": 5499,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "12717868371729071158",
        "priceCents": 5499,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "17583052203475864024",
        "priceCents": 5499,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "14094676182861360396",
        "priceCents": 5499,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "30750803381115008506",
        "priceCents": 5799,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "20121432044047500352",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a3e324865f34cdd60981d4",
    "name": "Aloha Dinger",
    "tagline": "Aloha Dinger",
    "description": "This Hawaiian Shirt features a fun golf pattern, perfect for the casual yet stylish look. It is ideal for golf enthusiasts or anyone looking for a laid-back and creative outfit. Perfect for summer gatherings, beach parties, golf outings, and vacations.<br/><br/>Product features<br/>- Full-color 360-degree print for unmatched creativity<br/>- Made with breathable material for comfort<br/>- Structured collar and placket for a polished look<br/>- Available in black or white button options<br/>- Assembled in the USA<br/><br/>Care instructions<br/>- Tumble dry: low heat<br/>- Do not bleach<br/>- Machine wash: cold (max 30C or 90F)<br/>",
    "priceCents": 5999,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a3e324865f34cdd60981d4/113123/108681/aloha-dinger.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a3e324865f34cdd60981d4/113123/108681/aloha-dinger.jpg?camera_label=front",
        "variantIds": [
          113121,
          113122,
          113123,
          113124,
          113125,
          113126
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a3e324865f34cdd60981d4/113123/108683/aloha-dinger.jpg?camera_label=back",
        "variantIds": [
          113121,
          113122,
          113123,
          113124,
          113125,
          113126
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "113123",
    "sku": "12063371859308704290",
    "costCents": 3865,
    "variants": [
      {
        "id": "113121",
        "title": "S / White stitching",
        "sku": "31572410326412327741",
        "priceCents": 5999,
        "color": "S / White stitching"
      },
      {
        "id": "113122",
        "title": "M / White stitching",
        "sku": "25099245156791404890",
        "priceCents": 5999,
        "color": "M / White stitching"
      },
      {
        "id": "113123",
        "title": "L / White stitching",
        "sku": "12063371859308704290",
        "priceCents": 5999,
        "color": "L / White stitching"
      },
      {
        "id": "113124",
        "title": "XL / White stitching",
        "sku": "72972352476967314325",
        "priceCents": 5999,
        "color": "XL / White stitching"
      },
      {
        "id": "113125",
        "title": "2XL / White stitching",
        "sku": "19105303687824063080",
        "priceCents": 5999,
        "color": "2XL / White stitching"
      },
      {
        "id": "113126",
        "title": "3XL / White stitching",
        "sku": "23454559958991451359",
        "priceCents": 5999,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68a39d400c30e46c2309ca55",
    "name": "Dinger Course Polo",
    "tagline": "Dinger Course Polo",
    "description": "Introducing our vibrant Unisex Polo Shirt, perfect for adding a unique flair to your casual wardrobe. This polo brings a cheerful vibe with its playful design, making it an ideal choice for golf outings, casual Fridays, or weekend brunches. Crafted for comfort and style, it effortlessly blends into any setting, whether you're on the course or relaxing with friends. Ideal for both men and women, this shirt is a great gift for golf enthusiasts, adventurers, or anyone who loves to stand out. It's a fantastic choice for birthdays, holidays, and celebrations, ensuring the wearer always looks and feels their best.<br/><br/>Product features<br/>- 100% Polyester for durability and shape retention...",
    "priceCents": 7247,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "2XL",
      "3XL"
    ],
    "image": "https://images-api.printify.com/mockup/68a39d400c30e46c2309ca55/112163/106286/dinger-course-polo.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68a39d400c30e46c2309ca55/112163/106286/dinger-course-polo.jpg?camera_label=front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a39d400c30e46c2309ca55/112163/106288/dinger-course-polo.jpg?camera_label=model-front",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68a39d400c30e46c2309ca55/112163/106290/dinger-course-polo.jpg?camera_label=model-back",
        "variantIds": [
          112159,
          112161,
          112163,
          112165,
          112167,
          112169
        ]
      }
    ],
    "category": "polos",
    "printifyVariantId": "112163",
    "sku": "20385777946570306396",
    "costCents": 4478,
    "variants": [
      {
        "id": "112159",
        "title": "S / White stitching",
        "sku": "32403032235339138833",
        "priceCents": 6825,
        "color": "S / White stitching"
      },
      {
        "id": "112161",
        "title": "M / White stitching",
        "sku": "15947094244100157951",
        "priceCents": 6878,
        "color": "M / White stitching"
      },
      {
        "id": "112163",
        "title": "L / White stitching",
        "sku": "20385777946570306396",
        "priceCents": 7247,
        "color": "L / White stitching"
      },
      {
        "id": "112165",
        "title": "XL / White stitching",
        "sku": "30052605677031514752",
        "priceCents": 7440,
        "color": "XL / White stitching"
      },
      {
        "id": "112167",
        "title": "2XL / White stitching",
        "sku": "16946859771583168569",
        "priceCents": 8317,
        "color": "2XL / White stitching"
      },
      {
        "id": "112169",
        "title": "3XL / White stitching",
        "sku": "21134579444117608427",
        "priceCents": 8790,
        "color": "3XL / White stitching"
      }
    ]
  },
  {
    "printifyId": "68914adde13a4265840c0b5a",
    "name": "Whimsical Beer-Themed Crew Socks for Fun Days, Perfect Gift for Beer Lovers, Cozy Socks, Unique Party Accessory, Fun Holiday Gift",
    "tagline": "Whimsical Beer-Themed Crew Socks for Fun Days, Perfect Gift for Beer Lovers, Cozy Socks, Unique Party Accessory, Fun Holiday Gift",
    "description": "Step into comfort and style with these unique crew socks. Featuring a playful design that adds a touch of fun to any outfit, these socks are perfect for casual wear or lounging at home. Made with a blend of durable materials, they ensure a snug fit while keeping your feet cozy. Ideal for anyone who enjoys a blend of comfort and personality in their wardrobe, these socks make a great gift for friends and family during holidays like Christmas, birthdays, or any celebration that calls for a touch of whimsy. Whether you're at a party or just relaxing, these socks will brighten your day!<br/><br/>Product features<br/>- Made from a durable blend of polyester, acrylic, nylon, and spandex.<br/>- ...",
    "priceCents": 1368,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "One Size"
    ],
    "image": "https://images-api.printify.com/mockup/68914adde13a4265840c0b5a/104469/101489/whimsical-beer-themed-crew-socks-for-fun-days-perfect-gift-for-beer-lovers-cozy-socks-unique-party-accessory-fun-holiday-gift.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68914adde13a4265840c0b5a/104469/101489/whimsical-beer-themed-crew-socks-for-fun-days-perfect-gift-for-beer-lovers-cozy-socks-unique-party-accessory-fun-holiday-gift.jpg?camera_label=front",
        "variantIds": [
          104469
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68914adde13a4265840c0b5a/104469/101490/whimsical-beer-themed-crew-socks-for-fun-days-perfect-gift-for-beer-lovers-cozy-socks-unique-party-accessory-fun-holiday-gift.jpg?camera_label=back",
        "variantIds": [
          104469
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68914adde13a4265840c0b5a/104469/102244/whimsical-beer-themed-crew-socks-for-fun-days-perfect-gift-for-beer-lovers-cozy-socks-unique-party-accessory-fun-holiday-gift.jpg?camera_label=woman-right",
        "variantIds": [
          104469
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68914adde13a4265840c0b5a/104469/102245/whimsical-beer-themed-crew-socks-for-fun-days-perfect-gift-for-beer-lovers-cozy-socks-unique-party-accessory-fun-holiday-gift.jpg?camera_label=woman-back",
        "variantIds": [
          104469
        ]
      }
    ],
    "category": "tees",
    "printifyVariantId": "104469",
    "sku": "18205903373970955178",
    "costCents": 733,
    "variants": [
      {
        "id": "104469",
        "title": "One Size",
        "sku": "18205903373970955178",
        "priceCents": 1368,
        "color": "One Size"
      }
    ]
  },
  {
    "printifyId": "68450b52abde4a754e0c6fcb",
    "name": "Dingersville Golf Balls - Perfect for Gifts, Golf Lovers, Tournaments, Casual Play, and Holiday Fun!",
    "tagline": "Dingersville Golf Balls - Perfect for Gifts, Golf Lovers, Tournaments, Casual Play, and Holiday Fun!",
    "description": "Elevate your golfing experience with these top-quality golf balls. Crafted from durable Surlyn material, they promise remarkable performance on the course. Each set of six features a cohesive design, making them perfect for team outings, corporate events, or casual play with friends. Their sleek, professional appearance is sure to impress other golfers and enhance your game. Ideal for golf enthusiasts, these balls are not just sports equipment; they are also a unique gift choice for holidays like Father’s Day, or special occasions such as birthdays and tournaments. Gear up and make every swing count with these reliable and stylish golf balls!<br/><br/>Product features<br/>- Made from dura...",
    "priceCents": 2200,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "One Size"
    ],
    "image": "https://images-api.printify.com/mockup/68450b52abde4a754e0c6fcb/91860/60899/dingersville-golf-balls-perfect-for-gifts-golf-lovers-tournaments-casual-play-and-holiday-fun.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/68450b52abde4a754e0c6fcb/91860/60899/dingersville-golf-balls-perfect-for-gifts-golf-lovers-tournaments-casual-play-and-holiday-fun.jpg?camera_label=front",
        "variantIds": [
          91860
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68450b52abde4a754e0c6fcb/91860/63176/dingersville-golf-balls-perfect-for-gifts-golf-lovers-tournaments-casual-play-and-holiday-fun.jpg?camera_label=inside",
        "variantIds": [
          91860
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68450b52abde4a754e0c6fcb/91860/63174/dingersville-golf-balls-perfect-for-gifts-golf-lovers-tournaments-casual-play-and-holiday-fun.jpg?camera_label=context-1",
        "variantIds": [
          91860
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/68450b52abde4a754e0c6fcb/91860/63175/dingersville-golf-balls-perfect-for-gifts-golf-lovers-tournaments-casual-play-and-holiday-fun.jpg?camera_label=context-2",
        "variantIds": [
          91860
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "91860",
    "sku": "44183017513645333630",
    "costCents": 2134,
    "variants": [
      {
        "id": "91860",
        "title": "1.7\" / 6 pcs",
        "sku": "44183017513645333630",
        "priceCents": 2200,
        "color": "1.7\" / 6 pcs"
      }
    ]
  },
  {
    "printifyId": "6844ffc442b468025605b7ed",
    "name": "Stylish Golf Towels for Enthusiasts, Perfect Gift for Golf Lovers, Personalized Golf Gift, Unique Golf Course Accessories, Sports [...]",
    "tagline": "Stylish Golf Towels for Enthusiasts, Perfect Gift for Golf Lovers, Personalized Golf Gift, Unique Golf Course Accessories, Sports [...]",
    "description": "<p>Elevate your golf game with our stylish Golf Towels, designed for enthusiasts who appreciate both functionality and flair. Made from a high-quality microfiber blend, these towels are not only ultra-soft but also incredibly absorbent, ensuring your hands and equipment stay dry on the course. The striking print on one side adds a touch of personality, making it a fun accessory for players of all ages. Whether you're out on the greens or enjoying a day at the beach, this towel seamlessly fits into your active lifestyle. Perfect as a gift for golf lovers during holidays, birthdays, or special celebrations, it&rsquo;s an essential item for anyone passionate about the sport or outdoor advent...",
    "priceCents": 1640,
    "currency": "usd",
    "color": "Multi",
    "colors": [
      "Multi"
    ],
    "sizes": [
      "One Size"
    ],
    "image": "https://images-api.printify.com/mockup/6844ffc442b468025605b7ed/112488/109916/stylish-golf-towels-for-enthusiasts-perfect-gift-for-golf-lovers-personalized-golf-gift-unique-golf-course-accessories-sports.jpg?camera_label=front",
    "images": [
      {
        "src": "https://images-api.printify.com/mockup/6844ffc442b468025605b7ed/112488/109916/stylish-golf-towels-for-enthusiasts-perfect-gift-for-golf-lovers-personalized-golf-gift-unique-golf-course-accessories-sports.jpg?camera_label=front",
        "variantIds": [
          112488
        ]
      },
      {
        "src": "https://images-api.printify.com/mockup/6844ffc442b468025605b7ed/112488/109918/stylish-golf-towels-for-enthusiasts-perfect-gift-for-golf-lovers-personalized-golf-gift-unique-golf-course-accessories-sports.jpg?camera_label=back",
        "variantIds": [
          112488
        ]
      }
    ],
    "category": "accessories",
    "printifyVariantId": "112488",
    "sku": "10486973722694964515",
    "costCents": 1061,
    "variants": [
      {
        "id": "112488",
        "title": "16'' × 24''",
        "sku": "10486973722694964515",
        "priceCents": 1640,
        "color": "16'' × 24''"
      }
    ]
  }
]
;

export const byPrintifyId = (id: string) => PRINTIFY_PRODUCTS.find(p => p.printifyId === id);
// Synced 31 published golf-relevant products from Printify shop 22767091