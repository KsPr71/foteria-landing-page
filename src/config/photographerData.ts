import daimiImage from "@assets/images/daimi1.png";
import jorgeJeidy from "@assets/images/jorgeJeidy.png";
import rosyImage from "@assets/images/rosy.png";

const photographers = [
	{
		name: "Rosy",
		description: "Cada niño tiene una belleza y una alegría que merecen quedarse para siempre. Me apasiona contar su historia a través de la cámara y tengo un ojo especial para esos pequeños detalles que hacen única a cada familia. Mi misión es crear imágenes que perduren y que muestren su personalidad tal como es. Ya sea una sesión en la playa, un paseo por el parque o una tarde en casa, me entrego por completo para darte una fotografía excepcional.",
		signature: "- Rosemary Ramírez",
		image: rosyImage,
		imageAlt: "Rosy",
	},
	{
		name: "Daimy",
		description: "Hay instantes que se escapan demasiado rápido, y en ellos vive lo más valioso: la risa de un hijo, la complicidad de unos padres, la magia de lo cotidiano. Por eso elegí la fotografía, para detener lo que el tiempo no debería llevarse. No busco poses perfectas, sino verdad: esa chispa que hace que una familia sea irrepetible. Esté donde esté la sesión —entre las olas, bajo los árboles o en la calma del hogar—, pongo el alma entera en cada disparo, porque tu historia merece quedarse contigo para siempre.",
		signature: "- Daimí Rodríguez",
		image: daimiImage,
		imageAlt: "Daimy",
	},
	{
		name: "Jeidy & Jorge",
		description: "Somos dos, y entre los dos aprendimos a mirar distinto. Detrás de cada imagen que llega a nuestras manos hay algo que no se ve a simple vista: la paciencia de un padre, la timidez de un hermano, esa luz que solo aparece cuando nadie está posando. Nos apasiona editar, sí, pero sobre todo nos apasiona cuidar lo que otros confiaron a una cámara. Retocamos colores, sí, pero también protegemos emociones. Cada familia nos deja su historia y nosotros la trabajamos como si fuera nuestra, porque creemos que hay recuerdos que no deberían perderse en un archivo olvidado. Ya sea una sesión en la playa, una tarde en el parque o un instante cualquiera en casa, le ponemos los dos el alma para que esa fotografía se sienta viva, verdadera, eterna.",
		signature: "- Jeidy y Jorge ",
		image: jorgeJeidy,
		imageAlt: "JorgeJeidy",
	},
] as const;

export default photographers;
