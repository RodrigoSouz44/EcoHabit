const dicas = [
    "Use sacolas reutilizáveis ao fazer compras.",
    "Descarte corretamente os eletrônicos antigos.",
    "Reduza o consumo de carne.",
    "Evite desperdício de água.",
    "Plante uma árvore.",
    "Reduza o consumo de produtos descartáveis.",
    "Prefira alimentos orgânicos, que são cultivados sem o uso de agrotóxicos.",
    "Não financie empresas que apoiam praticas que aumentam o desmatamento.",
    "Apoie produtores locais para reduzir a pegada de carbono associada ao transporte de alimentos.",
    "Mantenha plantas em casa para purificar o ar interno e melhorar o bem-estar.",
    "Planeje suas refeições e compre apenas o que for necessário.",
    "Opte por produtos de limpeza biodegradáveis e livres de substâncias tóxicas.",
    "Plante árvores, flores e hortas para melhorar a qualidade do ar e incentivar a biodiversidade."
];

function mostrarDica() {
    const dicaDia = document.getElementById("dica-dia");
    const indiceAleatorio = Math.floor(Math.random() * dicas.length);
    dicaDia.innerText = dicas[indiceAleatorio];
}

mostrarDica();
