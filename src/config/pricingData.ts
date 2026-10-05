import pricingEngagementImage from "@assets/images/couple-1-square.jpg";
import pricingElopementImage from "@assets/images/couple-5-min.jpg";
import pricingWeddingImage from "@assets/images/couple-6-crop.jpg";

const pricingData = [
    {
        name: "Mes a Mes 5x7",
        type: "Mes a Mes",
        featured: false,
        price: 5.50,
        features: ["3 Fotos 5x7", "4 Postalitas", "Descuento 8 %"],
        image: pricingElopementImage
    },
    {
        name: "Mes a Mes 6x8",
        type: "Mes a Mes",
        featured: true,
        price: 8,
        features: ["3 Fotos 6x8", "4 Postalitas", "Descuento 4,8 %"],
        image: pricingWeddingImage
    },
    {
        name: "Mes a Mes 8x10",
        type: "Mes a Mes",
        featured: false,
        price: 7.5,
        features: ["2 Fotos 8x10", "4 Postalitas", "Descuento 7,5 %"],
        image: pricingEngagementImage
    },
    {
        name: "Fotobook 5x7",
        type: "Fotobooks",
        featured: false,
        price: 65,
        features: ["10 Páginas", "Encuadernación", "Composición fotográfica", "1 Foto 12x18", "Descuento 7,5 %"],
        image: pricingElopementImage
    },
    {
        name: "Fotobook 6x8",
        type: "Fotobooks",
        featured: false,
        price: 75,
        features: ["10 Páginas", "Encuadernación", "Composición fotográfica", "1 Foto 12x18", "Descuento 6 %"],
        image: pricingWeddingImage
    },
    {
        name: "Fotobook 8x10",
        type: "Fotobooks",
        featured: true,
        price: 85,
        features: ["10 Páginas", "Encuadernación", "Composición fotográfica", "1 Foto 12x18", "Descuento 5,5 %"],
        image: pricingEngagementImage
    },
    {
        name: "Fotobook 8x12",
        type: "Fotobooks",
        featured: false,
        price: 65,
        features: ["10 Páginas", "Encuadernación", "Composición fotográfica", "1 Foto 12x18", "Descuento 7,5 %"],
        image: pricingElopementImage
    },
    {
        name: "Fotoálbum 8x10",
        type: "Fotoálbum",
        featured: true,
        price: 50,
        features: ["6 Páginas", "Terminación laminada", "Composición fotográfica"],
        image: pricingWeddingImage
    },
    {
        name: "Dulce Espera Estándar 5x7",
        type: "Dulce Espera",
        featured: false,
        price: 18,
        features: ["6 Fotos 5x7", "1 Foto 12x18", "1 Vestuario", "Descuento 5 %"],
        image: pricingEngagementImage
    },
    {
        name: "Dulce Espera Estándar 6x8",
        type: "Dulce Espera",
        featured: true,
        price: 22,
        features: ["6 Fotos 6x8", "1 Foto 12x18", "1 Vestuario", "Descuento 7,5 %"],
        image: pricingElopementImage
    },
    {
        name: "Dulce Espera Premium 8x10",
        type: "Dulce Espera",
        featured: false,
        price: 34,
        features: ["6 Fotos 8x10", "1 Foto 20x24", "2 Vestuarios", "Descuento 5 %"],
        image: pricingWeddingImage
    },
    {
        name: "Oferta 5x7 Básica",
        type: "5x7",
        featured: false,
        price: 14,
        features: ["6 Fotos 5x7", "1 Foto 8x10", "4 Postalitas", "1 Llavero plasticado", "Descuento 8,5 %"],
        image: pricingElopementImage
    },
    {
        name: "Oferta 5x7 Estándar",
        type: "5x7",
        featured: true,
        price: 30,
        features: ["14 Fotos 5x7", "1 Foto 12x18", "2 Llaveros plasticados", "Descuento 12 %"],
        image: pricingWeddingImage
    },
    {
        name: "Oferta 5x7 Premium",
        type: "5x7",
        featured: false,
        price: 50,
        features: ["20 Fotos 5x7", "1 Foto 16x24", "1 Álbum temático", "4 Postalitas", "Descuento 9 %"],
        image: pricingEngagementImage
    },
    {
        name: "Oferta 6x8 Básica",
        type: "6x8",
        featured: false,
        price: 18,
        features: ["6 Fotos 6x8", "1 Foto 8x10", "4 Postalitas", "Descuento 3 %"],
        image: pricingElopementImage
    },
    {
        name: "Oferta 6x8 Estándar",
        type: "6x8",
        featured: true,
        price: 38,
        features: ["12 Fotos 6x8", "1 Foto 12x18", "4 Postalitas", "1 Llavero plasticado", "Descuento 7 %"],
        image: pricingWeddingImage
    },
    {
        name: "Oferta 6x8 Premium",
        type: "6x8",
        featured: false,
        price: 60,
        features: ["20 Fotos 6x8", "1 Foto 20x24", "1 Álbum temático", "1 Llavero acrílico"],
        image: pricingEngagementImage
    },
    {
        name: "Oferta 8x10 Básica",
        type: "8x10",
        featured: false,
        price: 31,
        features: ["6 Fotos 8x10", "1 Foto 12x18", "4 Postalitas", "1 Llavero plasticado", "Descuento 5,5 %"],
        image: pricingElopementImage
    },
    {
        name: "Oferta 8x10 Estándar A",
        type: "8x10",
        featured: true,
        price: 62,
        features: ["15 Fotos 8x10", "1 Foto 16x24", "4 Postalitas", "1 Llavero acrílico", "Descuento 5,5 %"],
        image: pricingWeddingImage
    },
    {
        name: "Oferta 8x10 Estándar B",
        type: "8x10",
        featured: true,
        price: 69,
        features: ["12 Fotos 8x10", "1 Foto 24x39", "4 Postalitas", "1 Llavero acrílico", "Descuento 6 %"],
        image: pricingEngagementImage
    },
    {
        name: "Oferta 8x10 Premium",
        type: "8x10",
        featured: false,
        price: 105,
        features: ["20 Fotos 8x10", "1 Foto 24x39", "4 Postalitas", "1 Álbum temático", "Descuento 2,3 %"],
        image: pricingEngagementImage
    }
];

export default pricingData;
