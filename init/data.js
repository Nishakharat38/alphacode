const sampleListings = [
    {
      title: "Cozy Beachfront Cottage",
      description:
        "Escape to this charming beachfront cottage for a relaxing getaway. Enjoy stunning ocean views and easy access to the beach.",
      imageURL: {
        filename: "listingimage",
        URL: "https://unsplash.com/photos/3d-render-of-building-exterior-L5nd7rPrEic",
      },
      price: 1500,
      location: "Malibu",
      country: "United States",
    },

    {
      title: "Modern Loft in Downtown",
      description:
        "Stay in the heart of the city in this stylish loft apartment. Perfect for urban explorers!",
      imageURL: {
        filename: "listingimage",
        URL:"https://unsplash.com/photos/wooden-house-near-pine-trees-and-pond-coated-with-snow-during-daytime-OgcJIKRnRC8"
        },
      price: 1200,
      location: "New York City",
      country: "United States",
    },

    {
      title: "Mountain Retreat",
      description:
        "Unplug and unwind in this peaceful mountain cabin. Surrounded by nature, it's a perfect place to recharge.",
      imageURL: {
        filename: "listingimage",
        URL:"https://unsplash.com/photos/modern-living-interior-design-3d-concept-illustration-rfabslV3BD8" 
       },
      price: 1000,
      location: "Aspen",
      country: "United States",
    },

    {
      title: "Historic Villa in Tuscany",
      description:
        "Experience the charm of Tuscany in this beautifully restored villa. Explore the rolling hills and vineyards.",
      imageURL: {
        filename: "listingimage",
        URL: "https://unsplash.com/photos/white-and-red-house-near-lake-iAkAhmq0bvA"   
      },
      price: 2500,
      location: "Florence",
      country: "Italy",
    },

    {
      title: "Secluded Treehouse Getaway",
      description:
        "Live among the treetops in this unique treehouse retreat. A true nature lover's paradise.",
      imageURL: {
        filename: "listingimage",
        URL: "https://unsplash.com/photos/brown-house-covered-and-surrounded-by-snow-wHUFmZRMpLc",
      },
      price: 800,
      location: "Portland",
      country: "United States",
    },

    {
      title: "Beachfront Paradise",
      description:
        "Step out of your door onto the sandy beach. This beachfront condo offers the ultimate relaxation.",
      imageURL: {
        filename: "listingimage",
        URL: "https://unsplash.com/photos/white-and-brown-concrete-building-under-blue-sky-during-daytime-_TPTXZd9mOo",
      },
      price: 2000,
      location: "Cancun",
      country: "Mexico",
    },

    {
      title: "Rustic Cabin by the Lake",
      description:
        "Spend your days fishing and kayaking on the serene lake. This cozy cabin is perfect for outdoor enthusiasts.",
      imageURL: {
        filename: "listingimage",
        URL: "https://unsplash.com/photos/3d-render-house-balcony-terrace-at-night-zzZJkvrzfP4",
      },
      price: 900,
      location: "Lake Tahoe",
      country: "United States",
    },

    {
      title: "Luxury Penthouse with City Views",
      description:
        "Indulge in luxury living with panoramic city views from this stunning penthouse apartment.",
      imageURL: {
        filename: "listingimage",
        URL: "https://unsplash.com/photos/gray-wooden-house-178j8tJrNlc",
      },
      price: 3500,
      location: "Los Angeles",
      country: "United States",
    },

    {
      title: "Ski-In/Ski-Out Chalet",
      description:
        "Hit the slopes right from your doorstep in this ski-in/ski-out chalet in the Swiss Alps.",
      imageURL: {
        filename: "listingimage",
        URL: "https://unsplash.com/photos/a-modern-house-with-a-swimming-pool-in-front-of-it-t9eECWSCCXM",
      },
      price: 3000,
      location: "Verbier",
      country: "Switzerland",
    },

    {
      title: "Safari Lodge in the Serengeti",
      description:
        "Experience the thrill of the wild in a comfortable safari lodge. Witness the Great Migration up close.",
      imageURL: {
        filename: "listingimage",
        URL:"https://unsplash.com/photos/living-room-L7EwHkq1B2s",
      },
      price: 4000,
      location: "Serengeti National Park",
      country: "Tanzania",
    },

    {
      title: "Historic Canal House",
      description:
        "Stay in a piece of history in this beautifully preserved canal house in Amsterdam's iconic district.",
      imageURL: {
        filename: "listingimage",
        URL:"https://unsplash.com/photos/red-and-white-wooden-house-in-front-of-body-of-water-XOEAHbE_vO8"   
      },
      price: 1800,
      location: "Amsterdam",
      country: "Netherlands",
    },

    {
      title: "Private Island Retreat",
      description:
        "Have an entire island to yourself for a truly exclusive and unforgettable vacation experience.",
      imageURL: {
        filename: "listingimage",
        URL: "https://unsplash.com/photos/brown-and-gray-hose-near-green-leafed-tree-under-sky-sGblr5yVXiM",
      },
      price: 10000,
      location: "Fiji",
      country: "Fiji",
    },

    {
      title: "Charming Cottage in the Cotswolds",
      description:
        "Escape to the picturesque Cotswolds in this quaint and charming cottage with a thatched roof.",
      imageURL: {
        filename: "listingimage",
        URL: "https://images.unsplash.com/photo-1602088113235-229c19758e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8YmVhY2glMjB2YWNhdGlvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "Cotswolds",
      country: "United Kingdom",
    },

    {
      title: "Historic Brownstone in Boston",
      description:
        "Step back in time in this elegant historic brownstone located in the heart of Boston.",
      imageURL: {
        filename: "listingimage",
        URL:"https://images.unsplash.com/photo-1533619239233-6280475a633a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHNreSUyMHZhY2F0aW9ufGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2200,
      location: "Boston",
      country: "United States",
    },

    {
      title: "Beachfront Bungalow in Bali",
      description:
        "Relax on the sandy shores of Bali in this beautiful beachfront bungalow with a private pool.",
      imageURL: {
        filename: "listingimage",
        URL:"https://images.unsplash.com/photo-1602391833977-358a52198938?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Bali",
      country: "Indonesia",
    },

    {
      title: "Mountain View Cabin in Banff",
      description:
        "Enjoy breathtaking mountain views from this cozy cabin in the Canadian Rockies.",
      imageURL: {
        filename: "listingimage",
        URL:"https://images.unsplash.com/photo-1521401830884-6c03c1c87ebb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1500,
      location: "Banff",
      country: "Canada",
    },

    {
      title: "Art Deco Apartment in Miami",
      description:
        "Step into the glamour of the 1920s in this stylish Art Deco apartment in South Beach.",
      imageURL: {
        filename: "listingimage",
        URL: "https://plus.unsplash.com/premium_photo-1670963964797-942df1804579?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Miami",
      country: "United States",
    },

    {
      title: "Tropical Villa in Phuket",
      description:
        "Escape to a tropical paradise in this luxurious villa with a private infinity pool in Phuket.",
      imageURL: {
        filename: "listingimage",
        URL:"https://images.unsplash.com/photo-1470165301023-58dab8118cc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 3000,
      location: "Phuket",
      country: "Thailand",
    },

    {
      title: "Historic Castle in Scotland",
      description:
        "Live like royalty in this historic castle in the Scottish Highlands. Explore the rugged beauty of the area.",
      imageURL: {
        filename: "listingimage",
        URL: "https://images.unsplash.com/photo-1585543805890-6051f7829f98?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGJlYWNoJTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Scottish Highlands",
      country: "United Kingdom",
    },

    {
      title: "Desert Oasis in Dubai",
      description:
        "Experience luxury in the middle of the desert in this opulent oasis in Dubai with a private pool.",
      imageURL: {
        filename: "listingimage",
        URL: "https://images.unsplash.com/photo-1518684079-3c830dcef090?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZHViYWl8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 5000,
      location: "Dubai",
      country: "United Arab Emirates",
    },

    {
      title: "Rustic Log Cabin in Montana",
      description:
        "Unplug and unwind in this cozy log cabin surrounded by the natural beauty of Montana.",
      imageURL: {
        filename: "listingimage",
        URL: "https://images.unsplash.com/photo-1586375300773-8384e3e4916f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1100,
      location: "Montana",
      country: "United States",
    },

    {
      title: "Beachfront Villa in Greece",
      description:
        "Enjoy the crystal-clear waters of the Mediterranean in this beautiful beachfront villa on a Greek island.",
      imageURL: {
        filename: "listingimage",
        URL:"https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dmlsbGF8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 2500,
      location: "Mykonos",
      country: "Greece",
    },

    {
      title: "Eco-Friendly Treehouse Retreat",
      description:
        "Stay in an eco-friendly treehouse nestled in the forest. It's the perfect escape for nature lovers.",
      imageURL: {
        filename: "listingimage",
        URL: "https://images.unsplash.com/photo-1488462237308-ecaa28b729d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8c2t5JTIwdmFjYXRpb258ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 750,
      location: "Costa Rica",
      country: "Costa Rica",
    },

    {
      title: "Historic Cottage in Charleston",
      description:
        "Experience the charm of historic Charleston in this beautifully restored cottage with a private garden.",
      imageURL: {
        filename: "listingimage",
        URL: "https://images.unsplash.com/photo-1587381420270-3e1a5b9e6904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxvZGdlfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 1600,
      location: "Charleston",
      country: "United States",
    },

    {
      title: "Modern Apartment in Tokyo",
      description:
        "Explore the vibrant city of Tokyo from this modern and centrally located apartment.",
      imageURL: {
        filename: "listingimage",
        URL: "https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHRva3lvfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
      },
      price: 2000,
      location: "Tokyo",
      country: "Japan",
    },

    {
      title: "Lakefront Cabin in New Hampshire",
      description:
        "Spend your days by the lake in this cozy cabin in the scenic White Mountains of New Hampshire.",
      imageURL: {
        filename: "listingimage",
        URL: "https://images.unsplash.com/photo-1578645510447-e20b4311e3ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDF8fGNhbXBpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1200,
      location: "New Hampshire",
      country: "United States",
    },

    {
      title: "Luxury Villa in the Maldives",
      description:
        "Indulge in luxury in this overwater villa in the Maldives with stunning views of the Indian Ocean.",
      imageURL: {
        filename: "listingimage",
        URL:"https://images.unsplash.com/photo-1439066615861-d1af74d74000?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFrZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 6000,
      location: "Maldives",
      country: "Maldives",
    },

    {
      title: "Ski Chalet in Aspen",
      description:
        "Hit the slopes in style with this luxurious ski chalet in the world-famous Aspen ski resort.",
      imageURL: {
        filename: "listingimage",
        URL: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxha2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 4000,
      location: "Aspen",
      country: "United States",
    },

    {
      title: "Secluded Beach House in Costa Rica",
      description:
        "Escape to a secluded beach house on the Pacific coast of Costa Rica. Surf, relax, and unwind.",
      imageURL: {
        filename: "listingimage",
        URL: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmVhY2glMjBob3VzZXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
      },
      price: 1800,
      location: "Costa Rica",
      country: "Costa Rica",
    },
  ];
  
  module.exports = { data: sampleListings };