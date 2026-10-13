import ofertas_01 from "@/assets/images/01.webp";
import ofertas_02 from "@/assets/images/02.webp";
import ofertas_03 from "@/assets/images/03.webp";
import ofertas_04 from "@/assets/images/04.webp";
import ofertas_05 from "@/assets/images/05.webp";
import ofertas_06 from "@/assets/images/06.webp";
import ofertas_07 from "@/assets/images/07.webp";
import ofertas_08 from "@/assets/images/08.webp";
import ofertas_09 from "@/assets/images/09.webp";
import ofertas_10 from "@/assets/images/10.webp";
import mes2 from "@/assets/images/mes2.webp";
import emb1 from "@assets/images/emb1.webp";
import emb2 from "@assets/images/emb2.webp";
import emb3 from "@assets/images/emb3.webp";
import fa from "@assets/images/fa.webp";
import fb2 from "@assets/images/fb-2.webp";
import fb1 from "@assets/images/fb1.webp";
import fb3 from "@assets/images/fb3.webp";
import fb4 from "@assets/images/fb4.webp";
import mes1 from "@assets/images/mes-a-mes-1.webp";
import mes3 from "@assets/images/mes3.webp";


const pricingData = [
    {
        name: "Mes a Mes 5x7",
        type: "Mes a Mes",
        featured: false,
        price: 5.50,
        features: ["3 Fotos 5x7", "4 Postalitas", "Descuento 8 %"],
        image: mes1
    },
    {
        name: "Mes a Mes 6x8",
        type: "Mes a Mes",
        featured: true,
        price: 8,
        features: ["3 Fotos 6x8", "4 Postalitas", "Descuento 4,8 %"],
        image: mes2
    },
    {
        name: "Mes a Mes 8x10",
        type: "Mes a Mes",
        featured: false,
        price: 7.5,
        features: ["2 Fotos 8x10", "4 Postalitas", "Descuento 7,5 %"],
        image: mes3
    },
    {
        name: "Fotobook 5x7",
        type: "Fotobooks",
        featured: false,
        price: 65,
        features: ["10 Páginas", "Encuadernación", "Composición fotográfica", "1 Foto 12x18", "Descuento 7,5 %"],
        image: fb1
    },
    {
        name: "Fotobook 6x8",
        type: "Fotobooks",
        featured: false,
        price: 75,
        features: ["10 Páginas", "Encuadernación", "Composición fotográfica", "1 Foto 12x18", "Descuento 6 %"],
        image: fb3
    },
    {
        name: "Fotobook 8x10",
        type: "Fotobooks",
        featured: true,
        price: 85,
        features: ["10 Páginas", "Encuadernación", "Composición fotográfica", "1 Foto 12x18", "Descuento 5,5 %"],
        image: fb2
    },
    {
        name: "Fotobook 8x12",
        type: "Fotobooks",
        featured: false,
        price: 65,
        features: ["10 Páginas", "Encuadernación", "Composición fotográfica", "1 Foto 12x18", "Descuento 7,5 %"],
        image: fb4
    },
    {
        name: "Fotoálbum 8x10",
        type: "Fotoálbum",
        featured: true,
        price: 50,
        features: ["6 Páginas", "Terminación laminada", "Composición fotográfica"],
        image: fa
    },
    {
        name: "Dulce Espera Estándar 5x7",
        type: "Dulce Espera",
        featured: false,
        price: 18,
        features: ["6 Fotos 5x7", "1 Foto 12x18", "1 Vestuario", "Descuento 5 %"],
        image: emb1
    },
    {
        name: "Dulce Espera Estándar 6x8",
        type: "Dulce Espera",
        featured: true,
        price: 22,
        features: ["6 Fotos 6x8", "1 Foto 12x18", "1 Vestuario", "Descuento 7,5 %"],
        image: emb2
    },
    {
        name: "Dulce Espera Premium 8x10",
        type: "Dulce Espera",
        featured: false,
        price: 34,
        features: ["6 Fotos 8x10", "1 Foto 20x24", "2 Vestuarios", "Descuento 5 %"],
        image: emb3
    },
    {
        name: "Oferta 5x7 Básica",
        type: "5x7",
        featured: false,
        price: 14,
        features: ["6 Fotos 5x7", "1 Foto 8x10", "4 Postalitas", "1 Llavero plasticado", "Descuento 8,5 %"],
        image: ofertas_01
    },
    {
        name: "Oferta 5x7 Estándar",
        type: "5x7",
        featured: true,
        price: 30,
        features: ["14 Fotos 5x7", "1 Foto 12x18", "2 Llaveros plasticados", "Descuento 12 %"],
        image: ofertas_02
    },
    {
        name: "Oferta 5x7 Premium",
        type: "5x7",
        featured: false,
        price: 50,
        features: ["20 Fotos 5x7", "1 Foto 16x24", "1 Álbum temático", "4 Postalitas", "Descuento 9 %"],
        image: ofertas_03
    },
    {
        name: "Oferta 6x8 Básica",
        type: "6x8",
        featured: false,
        price: 18,
        features: ["6 Fotos 6x8", "1 Foto 8x10", "4 Postalitas", "Descuento 3 %"],
        image: ofertas_04
    },
    {
        name: "Oferta 6x8 Estándar",
        type: "6x8",
        featured: true,
        price: 38,
        features: ["12 Fotos 6x8", "1 Foto 12x18", "4 Postalitas", "1 Llavero plasticado", "Descuento 7 %"],
        image: ofertas_05
    },
    {
        name: "Oferta 6x8 Premium",
        type: "6x8",
        featured: false,
        price: 60,
        features: ["20 Fotos 6x8", "1 Foto 20x24", "1 Álbum temático", "1 Llavero acrílico"],
        image: ofertas_06
    },
    {
        name: "Oferta 8x10 Básica",
        type: "8x10",
        featured: false,
        price: 31,
        features: ["6 Fotos 8x10", "1 Foto 12x18", "4 Postalitas", "1 Llavero plasticado", "Descuento 5,5 %"],
        image: ofertas_07
    },
    {
        name: "Oferta 8x10 Estándar A",
        type: "8x10",
        featured: true,
        price: 62,
        features: ["15 Fotos 8x10", "1 Foto 16x24", "4 Postalitas", "1 Llavero acrílico", "Descuento 5,5 %"],
        image: ofertas_08
    },
    {
        name: "Oferta 8x10 Estándar B",
        type: "8x10",
        featured: true,
        price: 69,
        features: ["12 Fotos 8x10", "1 Foto 24x39", "4 Postalitas", "1 Llavero acrílico", "Descuento 6 %"],
        image: ofertas_09
    },
    {
        name: "Oferta 8x10 Premium",
        type: "8x10",
        featured: false,
        price: 105,
        features: ["20 Fotos 8x10", "1 Foto 24x39", "4 Postalitas", "1 Álbum temático", "Descuento 2,3 %"],
        image: ofertas_10
    }
];

export default pricingData;
