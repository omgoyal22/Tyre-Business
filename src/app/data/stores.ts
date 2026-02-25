export interface Store {
  id: string;
  name: string;
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
    name: "Downtown Store",
    shortDescription: "Our flagship location in the heart of the city",
    fullDescription: "Our Downtown Store has been serving the community since 2011. This flagship location offers the complete range of New Gold Star Tyres products with a fully equipped service bay for tyre fitting, balancing, and alignment. Our experienced team provides personalized recommendations and same-day service for most requests.",
    images: [
      "https://images.unsplash.com/photo-1583773113662-aa9af3d874c3?w=800&q=80",
      "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
    ],
    address: "123 Main Street",
    city: "Downtown",
    state: "NY",
    zip: "10001",
    phone: "(555) 123-4567",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133329931!2d-74.00601592349023!3d40.71277597139085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin",
  },
  {
    id: "midtown",
    name: "Midtown Store",
    shortDescription: "Convenient midtown location with extended hours",
    fullDescription: "The Midtown Store caters to busy professionals with extended weekday hours and weekend availability. We specialize in premium passenger and SUV tyres, with a focus on quick turnaround times. Our team maintains the same high standards of quality and customer service found at all New Gold Star locations.",
    images: [
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80",
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&q=80",
    ],
    address: "456 Avenue of the Americas",
    city: "Midtown",
    state: "NY",
    zip: "10011",
    phone: "(555) 234-5678",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133329931!2d-73.996155!3d40.7484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin",
  },
  {
    id: "westside",
    name: "West Side Store",
    shortDescription: "Premium service for luxury and performance vehicles",
    fullDescription: "Our West Side Store is known for expertise in luxury and performance tyres. We stock an extensive selection of high-end brands and offer specialized services including run-flat installation and TPMS programming. The store features a comfortable waiting area and complimentary refreshments while you wait.",
    images: [
      "https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=800&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
      "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800&q=80",
    ],
    address: "789 West 57th Street",
    city: "Manhattan",
    state: "NY",
    zip: "10019",
    phone: "(555) 345-6789",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133329931!2d-73.9725!3d40.7654!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258f4e70c1e5d%3A0x2e3c8e7d8f9a0b1c!2sColumbus%20Circle!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin",
  },
  {
    id: "brooklyn",
    name: "Brooklyn Store",
    shortDescription: "Family-owned service with neighborhood charm",
    fullDescription: "The Brooklyn Store brings New Gold Star Tyres' commitment to quality to the borough. This location combines the warmth of a neighborhood shop with the full range of our tyre inventory. We're proud to support local families, commuters, and businesses with dependable tyres and honest advice.",
    images: [
      "https://images.unsplash.com/photo-1625047509168-a7026f36de04?w=800&q=80",
      "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&q=80",
      "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800&q=80",
    ],
    address: "321 Flatbush Avenue",
    city: "Brooklyn",
    state: "NY",
    zip: "11217",
    phone: "(555) 456-7890",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.0036!2d-73.9797!3d40.6782!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b0e4d671785%3A0x539647a46e41a01b!2sBrooklyn%20Bridge!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin",
  },
  {
    id: "queens",
    name: "Queens Store",
    shortDescription: "Full-service centre with warehouse stock",
    fullDescription: "Our Queens location serves as both a retail store and regional warehouse, ensuring fast availability of even rare tyre sizes. The large showroom displays our full product range, and the attached service bays handle everything from basic tyre changes to complex wheel repairs. Open seven days a week for your convenience.",
    images: [
      "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800&q=80",
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=800&q=80",
      "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=800&q=80",
    ],
    address: "555 Queens Boulevard",
    city: "Queens",
    state: "NY",
    zip: "11374",
    phone: "(555) 567-8901",
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.184133329931!2d-73.87!3d40.7282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c2606d06eb0a65%3A0x5c1e5d5e5e5e5e5e!2sQueens%20Center!5e0!3m2!1sen!2sin!4v1708000000000!5m2!1sen!2sin",
  },
];
