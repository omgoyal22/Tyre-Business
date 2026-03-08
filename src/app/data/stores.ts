import shop1Img from "../../assets/shops/shop1.png";
import shop2Img from "../../assets/shops/shop2.png";
import shop3Img from "../../assets/shops/shop3.png";
import shop4Img from "../../assets/shops/shop4.png";
import shop5Img from "../../assets/shops/shop5.png";

export interface Store {
  id: string;
  name: string;
  gst: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  address: string;
  city: string;
  state: string;
  zip: string;
  phone: string;
  mapEmbedUrl: string;
}

export const stores: Store[] = [
  {
    id: "downtown",
    name: "New Gold Star Tyre",
    gst: "13AUQPS712L2Z5",
    shortDescription: "Our flagship location for premium tyres",
    fullDescription: "New Gold Star Tyre has been serving the community with the complete range of premium tyres. This location offers a fully equipped service bay for tyre fitting, balancing, and alignment. Our experienced team provides personalized recommendations and same-day service for most requests.",
    images: [shop1Img, shop2Img, shop4Img],
    address: "I Vikheshe Sumi Road",
    city: "Dimapur",
    state: "Nagaland",
    zip: "797112",
    phone: "7005996467",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133329931!2d-74.00601592349023!3d40.71277597139085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin",
  },
  {
    id: "midtown",
    name: "Tyre Plaza",
    gst: "13AKKPB7198Q2ZH",
    shortDescription: "Your trusted tyre destination",
    fullDescription: "Tyre Plaza caters to customers with an extensive selection of premium passenger and SUV tyres. We focus on quick turnaround times and maintain high standards of quality and customer service. Visit us for expert advice and competitive pricing.",
    images: [shop2Img, shop1Img, shop5Img],
    address: "Khermahal, Dimapur",
    city: "Dimapur",
    state: "Nagaland",
    zip: "797112",
    phone: "6909318281",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133329931!2d-73.996155!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin",
  },
  {
    id: "westside",
    name: "New Gold Star Tyres",
    gst: "13AUQPS7121L3Z4",
    shortDescription: "Premium tyres and expert service",
    fullDescription: "This New Gold Star Tyres location offers the full range of our products with specialized services including fitting, balancing, and alignment. Our team is dedicated to helping you find the right tyres for your vehicle and driving needs.",
    images: [shop3Img, shop2Img, shop5Img],
    address: "5, Kohima",
    city: "Kohima",
    state: "Nagaland",
    zip: "797121",
    phone: "6909318805",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133329931!2d-73.9725!3d40.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4e70c1e5d%3A0x2e3c8e7d8f9a0b1c!2sColumbus%20Circle!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin",
  },
  {
    id: "brooklyn",
    name: "New Gold Star Tyres",
    gst: "13AUQPS7121L3Z4",
    shortDescription: "Quality tyres and honest advice",
    fullDescription: "This New Gold Star Tyres location brings our commitment to quality and customer satisfaction. We offer the full range of our tyre inventory with dependable service and expert advice for families, commuters, and businesses.",
    images: [shop4Img, shop1Img, shop3Img],
    address: "Upper Bayavü Hill",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "6909318805",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0036!2d-73.9797!3d40.6782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0e4d671785%3A0x539647a46e41a01b!2sBrooklyn%20Bridge!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin",
  },
  {
    id: "queens",
    name: "Kohima Tyres",
    gst: "13ATGPT0101J1Z3",
    shortDescription: "Full-service tyre centre",
    fullDescription: "Kohima Tyres serves as a full-service retail store with a wide selection of premium tyres. Our showroom displays the complete product range, and our service bays handle everything from basic tyre changes to wheel repairs. Open for your convenience.",
    images: [shop5Img, shop3Img, shop4Img],
    address: "Hospital Colony, Opp Bhat Entrance Gate NH-2, Naga Hospital Rd",
    city: "Kohima",
    state: "Nagaland",
    zip: "797001",
    phone: "6909318959",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133329931!2d-73.87!3d40.7282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2606d06eb0a65%3A0x5c1e5d5e5e5e5e5e!2sQueens%20Center!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin",
  },
];
