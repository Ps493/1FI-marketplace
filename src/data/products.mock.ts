import { ProductDetail, ProductSummary } from '../types';

/**
 * Mock catalogue standing in for a real product/catalogue service.
 * Product line-up mirrors 1Fi's actual marketplace positioning
 * (LAMF-backed, no-cost EMI on premium electronics).
 *
 * Placeholder images use placehold.co so the project runs with zero
 * external asset dependencies — swap `imageUrl`/`galleryUrls` for real
 * CDN URLs when wiring up the production catalogue API.
 */

const img = (label: string, w = 600, h = 600) =>
  `https://placehold.co/${w}x${h}/F4EEFC/6C28D9?font=roboto&text=${encodeURIComponent(label)}`;

export const PRODUCTS: ProductDetail[] = [
  {
    id: 'iphone-17-pro-max',
    name: 'iPhone 17 Pro Max',
    brand: 'Apple',
    category: 'phones',
    imageUrl: img('iPhone 17\\nPro Max'),
    basePrice: 164900,
    startingEmi: 6871,
    badge: 'Best Seller',
    rating: 4.8,
    description:
      'The most capable iPhone yet, with a titanium frame, the A19 Pro chip, and a pro camera system built for low light and long zoom.',
    highlights: [
      'A19 Pro chip with 6-core GPU',
      '48MP Fusion camera + 5x telephoto',
      'Up to 29 hours video playback',
      'Titanium design, IP68 rated',
    ],
    variantGroups: [
      {
        id: 'storage',
        name: 'Storage',
        options: [
          { id: '256gb', label: '256GB', priceDelta: 0 },
          { id: '512gb', label: '512GB', priceDelta: 20000 },
          { id: '1tb', label: '1TB', priceDelta: 40000 },
        ],
      },
      {
        id: 'color',
        name: 'Colour',
        options: [
          { id: 'titanium-black', label: 'Titanium Black', priceDelta: 0 },
          { id: 'desert-titanium', label: 'Desert Titanium', priceDelta: 0 },
          { id: 'titanium-white', label: 'Titanium White', priceDelta: 0 },
        ],
      },
    ],
    galleryUrls: [img('Front'), img('Back'), img('Side')],
  },
  {
    id: 'iphone-17',
    name: 'iPhone 17',
    brand: 'Apple',
    category: 'phones',
    imageUrl: img('iPhone 17'),
    basePrice: 82900,
    startingEmi: 3454,
    badge: '0% interest',
    rating: 4.7,
    description:
      'A big leap for the standard iPhone: brighter display, faster chip, and all-day battery life in a lighter aluminium body.',
    highlights: [
      'A19 chip',
      '48MP dual camera system',
      '6.3" Super Retina XDR display',
      'All-day battery life',
    ],
    variantGroups: [
      {
        id: 'storage',
        name: 'Storage',
        options: [
          { id: '128gb', label: '128GB', priceDelta: 0 },
          { id: '256gb', label: '256GB', priceDelta: 10000 },
        ],
      },
      {
        id: 'color',
        name: 'Colour',
        options: [
          { id: 'lavender', label: 'Lavender', priceDelta: 0 },
          { id: 'sage', label: 'Sage', priceDelta: 0 },
          { id: 'black', label: 'Black', priceDelta: 0 },
        ],
      },
    ],
    galleryUrls: [img('Front'), img('Back')],
  },
  {
    id: 'galaxy-s25-ultra',
    name: 'Galaxy S25 Ultra',
    brand: 'Samsung',
    category: 'phones',
    imageUrl: img('Galaxy S25\\nUltra'),
    basePrice: 129999,
    startingEmi: 5417,
    badge: 'Instant approval',
    rating: 4.6,
    description:
      'Samsung\u2019s flagship with a built-in S Pen, a 200MP main sensor, and Galaxy AI features tuned for productivity on the go.',
    highlights: [
      'Snapdragon 8 Elite for Galaxy',
      '200MP main camera with S Pen',
      '5000mAh battery',
      '12GB RAM',
    ],
    variantGroups: [
      {
        id: 'storage',
        name: 'Storage',
        options: [
          { id: '256gb', label: '256GB', priceDelta: 0 },
          { id: '512gb', label: '512GB', priceDelta: 15000 },
        ],
      },
      {
        id: 'color',
        name: 'Colour',
        options: [
          { id: 'titanium-gray', label: 'Titanium Gray', priceDelta: 0 },
          { id: 'titanium-black', label: 'Titanium Black', priceDelta: 0 },
        ],
      },
    ],
    galleryUrls: [img('Front'), img('S Pen')],
  },
  {
    id: 'oneplus-15',
    name: 'OnePlus 15',
    brand: 'OnePlus',
    category: 'phones',
    imageUrl: img('OnePlus 15'),
    basePrice: 64999,
    startingEmi: 2709,
    badge: 'Instant approval',
    rating: 4.5,
    description:
      'Flagship-grade performance with 100W fast charging and a Hasselblad-tuned camera system, at a sharper price point.',
    highlights: [
      'Snapdragon 8 Gen 5',
      'Hasselblad camera system',
      '100W SUPERVOOC charging',
      '120Hz LTPO display',
    ],
    variantGroups: [
      {
        id: 'storage',
        name: 'Storage',
        options: [
          { id: '256gb', label: '256GB', priceDelta: 0 },
          { id: '512gb', label: '512GB', priceDelta: 8000 },
        ],
      },
      {
        id: 'color',
        name: 'Colour',
        options: [
          { id: 'sand-storm', label: 'Sand Storm', priceDelta: 0 },
          { id: 'jade-shadow', label: 'Jade Shadow', priceDelta: 0 },
        ],
      },
    ],
    galleryUrls: [img('Front'), img('Back')],
  },
  {
    id: 'macbook-pro-14',
    name: 'MacBook Pro 14"',
    brand: 'Apple',
    category: 'laptops',
    imageUrl: img('MacBook Pro'),
    basePrice: 169900,
    startingEmi: 7079,
    rating: 4.9,
    description:
      'The M4 Pro chip brings pro-level performance to a portable 14-inch body, built for on-the-go video, code, and design work.',
    highlights: [
      'Apple M4 Pro chip',
      '14.2" Liquid Retina XDR display',
      'Up to 18 hours battery life',
      '16GB unified memory',
    ],
    variantGroups: [
      {
        id: 'storage',
        name: 'Storage',
        options: [
          { id: '512gb', label: '512GB SSD', priceDelta: 0 },
          { id: '1tb', label: '1TB SSD', priceDelta: 20000 },
        ],
      },
      {
        id: 'color',
        name: 'Colour',
        options: [
          { id: 'space-black', label: 'Space Black', priceDelta: 0 },
          { id: 'silver', label: 'Silver', priceDelta: 0 },
        ],
      },
    ],
    galleryUrls: [img('Open'), img('Side')],
  },
  {
    id: 'watch-ultra-3',
    name: 'Watch Ultra 3',
    brand: 'Apple',
    category: 'wearables',
    imageUrl: img('Watch\\nUltra 3'),
    basePrice: 89900,
    startingEmi: 3746,
    badge: 'New',
    rating: 4.7,
    description:
      'Built for the outer limits: satellite connectivity, dual-frequency GPS, and a battery that lasts through multi-day adventures.',
    highlights: [
      '49mm titanium case',
      'Satellite connectivity',
      'Up to 42 hours battery life',
      'Water rated to 100m',
    ],
    variantGroups: [
      {
        id: 'band',
        name: 'Band',
        options: [
          { id: 'ocean', label: 'Ocean Band', priceDelta: 0 },
          { id: 'trail', label: 'Trail Loop', priceDelta: 3000 },
        ],
      },
    ],
    galleryUrls: [img('Front')],
  },
];

export const getProductSummaries = (): ProductSummary[] =>
  PRODUCTS.map(
    ({ id, name, brand, category, imageUrl, basePrice, startingEmi, badge, rating }) => ({
      id,
      name,
      brand,
      category,
      imageUrl,
      basePrice,
      startingEmi,
      badge,
      rating,
    })
  );

export const getProductById = (id: string): ProductDetail | undefined =>
  PRODUCTS.find((p) => p.id === id);
