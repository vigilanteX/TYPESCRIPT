interface PCComponent
{
    SSD: string;
    RAM: string;
    powerSupply: string;
}

interface PCComponent
{
    motherboard: string;
    processor: string;
    graphicsCard: string;
}

const mypc: PCComponent = {
    SSD: "1TB",
    RAM: "32GB",
    powerSupply: "600W",
    motherboard: "ASUS ROG STRIX B550-F",
    processor: "AMD Ryzen 7 5800X",
    graphicsCard: "NVIDIA GeForce RTX 3080"
};

console.log(mypc);

interface PCComponent2 extends PCComponent
{
    coolingSystem: string;
}

const mypc2: PCComponent2 = {
    SSD: "2TB",
    RAM: "64GB",
    powerSupply: "750W",
    motherboard: "MSI MEG X570 GODLIKE",
    processor: "Intel Core i9-11900K",
    graphicsCard: "NVIDIA GeForce RTX 3090",
    coolingSystem: "Liquid Cooling"
};

console.log(mypc2);


interface PCComponent3 extends PCComponent2 , PCComponent
{
    caseType: string;
}

const mypc3: PCComponent3 = {
    SSD: "4TB",
    RAM: "128GB",
    powerSupply: "850W",
    motherboard: "Gigabyte Z590 AORUS XTREME",
    processor: "AMD Ryzen 9 5950X",
    graphicsCard: "NVIDIA GeForce RTX 4090",
    coolingSystem: "Custom Loop Liquid Cooling",
    caseType: "Full Tower"
};

console.log(mypc3);