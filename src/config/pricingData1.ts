import pricingEngagementImage from "@assets/images/couple-1-square.jpg";
import pricingElopementImage from "@assets/images/couple-5-min.jpg";
import pricingWeddingImage from "@assets/images/couple-6-crop.jpg";

const pricingData = [
    { 
        name: "Oferta 5x7 Básica", 
        type: "5x7", 
        featured: false, 
        price: 14, 
        features: ["6 Fotos 5x7 editadas profesionalmente", "1 Foto 8x10", "4 postales", "1 Llavero plasticado", "Descuento 8,5 %"], 
        image: pricingElopementImage 
    },
		{ 
            name: "Oferta 5x7 Estándar", 
            type: "5x7", 
            featured: true, 
            price: 30, 
            features: ["14 Fotos 5x7 editadas profesionalmente", "1 Foto 12x18", "2 Llaveros plasticados", "Descuento 12 %"], 
            image: pricingWeddingImage 
        },
		{ 
            name: "Engagement", 
            type: "6x8", 
            featured: false, 
            price: 799, 
            features: [
                "100+ Professionally Edited Photos", 
                "Private Online Gallery", 
                "*Additional Charge Based On Travel Distance"
            ], 
            image: pricingEngagementImage 
        },
		{ 
            name: "Engagement", 
            type: "engagement", 
            featured: false, 
            price: 799, 
            features: [
                "100+ Professionally Edited Photos", 
                "Private Online Gallery", 
                "*Additional Charge Based On Travel Distance"], 
                image: pricingEngagementImage 
            },
]

export default pricingData;