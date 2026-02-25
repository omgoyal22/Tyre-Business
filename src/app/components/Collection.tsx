import { useState } from "react";
import { Search, Filter, Star } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { TyreInquiryForm, Tyre } from "./TyreInquiryForm";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const tyres: Tyre[] = [
  {
    id: "1",
    brand: "Michelin",
    model: "Pilot Sport 4",
    size: "225/45R17",
    type: "Performance",
    price: 189.99,
    season: "Summer",
    speedRating: "Y",
    loadIndex: "94",
    image: "https://images.unsplash.com/photo-1562671798-f6695f7c146f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwdGlyZXMlMjBkaXNwbGF5fGVufDF8fHx8MTc3MDg3NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "2",
    brand: "Continental",
    model: "ContiWinterContact TS 860",
    size: "205/55R16",
    type: "Winter",
    price: 145.99,
    season: "Winter",
    speedRating: "H",
    loadIndex: "91",
    image: "https://images.unsplash.com/photo-1755398311235-7efdef896a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjB3aGVlbHN8ZW58MXx8fHwxNzcwODc1MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "3",
    brand: "Bridgestone",
    model: "Turanza T005",
    size: "215/60R16",
    type: "Touring",
    price: 129.99,
    season: "All-Season",
    speedRating: "V",
    loadIndex: "95",
    image: "https://images.unsplash.com/photo-1562671798-f6695f7c146f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwdGlyZXMlMjBkaXNwbGF5fGVufDF8fHx8MTc3MDg3NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "4",
    brand: "Pirelli",
    model: "P Zero",
    size: "245/40R18",
    type: "Performance",
    price: 249.99,
    season: "Summer",
    speedRating: "Y",
    loadIndex: "97",
    image: "https://images.unsplash.com/photo-1755398311235-7efdef896a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjB3aGVlbHN8ZW58MXx8fHwxNzcwODc1MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "5",
    brand: "Goodyear",
    model: "Eagle F1 Asymmetric 5",
    size: "225/50R17",
    type: "Performance",
    price: 169.99,
    season: "Summer",
    speedRating: "W",
    loadIndex: "94",
    image: "https://images.unsplash.com/photo-1562671798-f6695f7c146f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwdGlyZXMlMjBkaXNwbGF5fGVufDF8fHx8MTc3MDg3NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "6",
    brand: "Hankook",
    model: "Ventus V12 evo2",
    size: "235/45R17",
    type: "Performance",
    price: 139.99,
    season: "Summer",
    speedRating: "Y",
    loadIndex: "94",
    image: "https://images.unsplash.com/photo-1755398311235-7efdef896a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjB3aGVlbHN8ZW58MXx8fHwxNzcwODc1MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "7",
    brand: "Dunlop",
    model: "Sport Maxx RT2",
    size: "225/45R18",
    type: "Performance",
    price: 179.99,
    season: "Summer",
    speedRating: "Y",
    loadIndex: "95",
    image: "https://images.unsplash.com/photo-1562671798-f6695f7c146f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwdGlyZXMlMjBkaXNwbGF5fGVufDF8fHx8MTc3MDg3NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "8",
    brand: "Yokohama",
    model: "BluEarth-GT AE51",
    size: "195/65R15",
    type: "Touring",
    price: 99.99,
    season: "All-Season",
    speedRating: "H",
    loadIndex: "91",
    image: "https://images.unsplash.com/photo-1755398311235-7efdef896a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjB3aGVlbHN8ZW58MXx8fHwxNzcwODc1MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "9",
    brand: "Michelin",
    model: "CrossClimate 2",
    size: "205/55R16",
    type: "All-Season",
    price: 159.99,
    season: "All-Season",
    speedRating: "V",
    loadIndex: "94",
    image: "https://images.unsplash.com/photo-1562671798-f6695f7c146f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwdGlyZXMlMjBkaXNwbGF5fGVufDF8fHx8MTc3MDg3NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "10",
    brand: "Continental",
    model: "PremiumContact 6",
    size: "225/50R17",
    type: "Touring",
    price: 149.99,
    season: "Summer",
    speedRating: "W",
    loadIndex: "94",
    image: "https://images.unsplash.com/photo-1755398311235-7efdef896a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjB3aGVlbHN8ZW58MXx8fHwxNzcwODc1MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "11",
    brand: "Bridgestone",
    model: "Blizzak LM005",
    size: "205/60R16",
    type: "Winter",
    price: 139.99,
    season: "Winter",
    speedRating: "H",
    loadIndex: "92",
    image: "https://images.unsplash.com/photo-1562671798-f6695f7c146f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwY2FyJTIwdGlyZXMlMjBkaXNwbGF5fGVufDF8fHx8MTc3MDg3NTA4Nnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: "12",
    brand: "Pirelli",
    model: "Cinturato P7",
    size: "215/55R17",
    type: "Touring",
    price: 154.99,
    season: "All-Season",
    speedRating: "W",
    loadIndex: "94",
    image: "https://images.unsplash.com/photo-1755398311235-7efdef896a9d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcG9ydHMlMjBjYXIlMjB3aGVlbHN8ZW58MXx8fHwxNzcwODc1MDg3fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function Collection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedSeason, setSelectedSeason] = useState<string>("all");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedTyre, setSelectedTyre] = useState<Tyre | null>(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const filteredTyres = tyres.filter((tyre) => {
    const matchesSearch =
      tyre.brand.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tyre.model.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tyre.size.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesSeason =
      selectedSeason === "all" || tyre.season === selectedSeason;

    const matchesType = selectedType === "all" || tyre.type === selectedType;

    return matchesSearch && matchesSeason && matchesType;
  });

  const handleInquire = (tyre: Tyre) => {
    setSelectedTyre(tyre);
    setIsFormOpen(true);
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Our <span className="text-orange-500">Collection</span>
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Browse our extensive range of premium tyres from world-leading brands
          </p>
        </div>

        {/* Filters */}
        <div className="bg-zinc-900/50 rounded-2xl p-6 mb-12 border border-zinc-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-zinc-400" />
              <Input
                type="text"
                placeholder="Search by brand, model, or size..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-zinc-800 border-zinc-700 text-white"
              />
            </div>

            {/* Season Filter */}
            <Select value={selectedSeason} onValueChange={setSelectedSeason}>
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                <SelectValue placeholder="All Seasons" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem value="all">All Seasons</SelectItem>
                <SelectItem value="Summer">Summer</SelectItem>
                <SelectItem value="Winter">Winter</SelectItem>
                <SelectItem value="All-Season">All-Season</SelectItem>
              </SelectContent>
            </Select>

            {/* Type Filter */}
            <Select value={selectedType} onValueChange={setSelectedType}>
              <SelectTrigger className="bg-zinc-800 border-zinc-700 text-white">
                <SelectValue placeholder="All Types" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-800 border-zinc-700 text-white">
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Performance">Performance</SelectItem>
                <SelectItem value="Touring">Touring</SelectItem>
                <SelectItem value="Winter">Winter</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-400">
            <Filter className="size-4" />
            <span>
              Showing {filteredTyres.length} of {tyres.length} tyres
            </span>
          </div>
        </div>

        {/* Tyres Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredTyres.map((tyre) => (
            <div
              key={tyre.id}
              className="group bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 rounded-2xl border border-zinc-700 overflow-hidden hover:border-orange-500/50 transition-all duration-300 hover:transform hover:scale-105"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <ImageWithFallback
                  src={tyre.image}
                  alt={`${tyre.brand} ${tyre.model}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className="px-3 py-1 bg-orange-500 rounded-full text-sm font-semibold">
                    {tyre.season}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold text-orange-500">
                      {tyre.brand}
                    </h3>
                    <p className="text-zinc-300">{tyre.model}</p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="size-4 text-yellow-500 fill-yellow-500" />
                    <span className="text-sm text-zinc-400">4.8</span>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Size:</span>
                    <span className="text-white font-semibold">{tyre.size}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Type:</span>
                    <span className="text-white">{tyre.type}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Speed Rating:</span>
                    <span className="text-white">{tyre.speedRating}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-zinc-400">Load Index:</span>
                    <span className="text-white">{tyre.loadIndex}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-700">
                  <div>
                    <span className="text-2xl font-bold text-orange-500">
                      ${tyre.price}
                    </span>
                    <span className="text-zinc-400 text-sm">/each</span>
                  </div>
                  <Button
                    onClick={() => handleInquire(tyre)}
                    className="bg-gradient-to-r from-orange-500 to-red-500 hover:shadow-lg hover:shadow-orange-500/50"
                  >
                    Inquire
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredTyres.length === 0 && (
          <div className="text-center py-20">
            <p className="text-xl text-zinc-400">
              No tyres found matching your criteria. Try adjusting your filters.
            </p>
          </div>
        )}
      </div>

      {/* Inquiry Form Dialog */}
      {selectedTyre && (
        <TyreInquiryForm
          tyre={selectedTyre}
          isOpen={isFormOpen}
          onClose={() => {
            setIsFormOpen(false);
            setSelectedTyre(null);
          }}
        />
      )}
    </div>
  );
}
