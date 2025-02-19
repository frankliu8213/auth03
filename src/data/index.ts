import { SpecialRoute, Destination, Testimonial } from '@/types';

export const specialRoutes: SpecialRoute[] = [
  {
    id: 'airportExpress',
    title: "机场快线",
    from: "市中心",
    to: "国际机场",
    originalPrice: 299,
    discountPrice: 199,
    image: "https://picsum.photos/400/300?random=30",
    savings: "33%",
    features: ["24/7服务", "专业司机", "行李协助"],
  },
  {
    id: 'cityTour',
    title: "城市观光",
    from: "酒店区",
    to: "旅游景点",
    originalPrice: 399,
    discountPrice: 299,
    image: "https://picsum.photos/400/300?random=31",
    savings: "25%",
    features: ["专业导游", "舒适车辆", "灵活行程"],
  },
  {
    id: 'businessLine',
    title: "商务专线",
    from: "商务区",
    to: "会展中心",
    originalPrice: 199,
    discountPrice: 149,
    image: "https://picsum.photos/400/300?random=32",
    savings: "25%",
    features: ["准时保障", "高端车型", "专业司机"],
  },
];

export const popularDestinations: Destination[] = [
  {
    id: 'museum',
    name: "历史博物馆",
    description: "探索城市丰富的历史文化遗产",
    image: "https://picsum.photos/400/300?random=33",
    rating: 4.8,
    price: 299,
    duration: "3-4小时",
  },
  {
    id: 'seaPark',
    name: "海滨公园",
    description: "享受美丽的海景和休闲活动",
    image: "https://picsum.photos/400/300?random=34",
    rating: 4.9,
    price: 199,
    duration: "2-3小时",
  },
  {
    id: 'artDistrict',
    name: "艺术区",
    description: "体验现代艺术和文化氛围",
    image: "https://picsum.photos/400/300?random=35",
    rating: 4.7,
    price: 249,
    duration: "2-3小时",
  },
  {
    id: 'shoppingMall',
    name: "购物中心",
    description: "享受一站式购物和娱乐体验",
    image: "https://picsum.photos/400/300?random=36",
    rating: 4.6,
    price: 179,
    duration: "4-5小时",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "张先生",
    avatar: "https://picsum.photos/100/100?random=40",
    comment: "服务非常专业，司机准时且友善，非常推荐！",
    rating: 5,
    type: "business",
  },
  {
    id: 2,
    name: "李女士",
    avatar: "https://picsum.photos/100/100?random=41",
    comment: "预订流程简单，价格合理，很满意的体验。",
    rating: 5,
    type: "airport",
  },
  {
    id: 3,
    name: "王先生",
    avatar: "https://picsum.photos/100/100?random=42",
    comment: "车辆很新，司机专业，行程很舒适。",
    rating: 4,
    type: "cityTour",
  },
]; 