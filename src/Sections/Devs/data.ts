import magicfileds from "~/images/magicfileds.png";
import nomigrations from "~/images/nomigrations.png";
import noschema from "~/images/noschema.png";
import queryfree from "~/images/queryfree.png";
import datanesting from "~/images/datanesting.png";
import instantendpoints from "~/images/instantendpoints.png";
import { StaticImageData } from "next/image";

export type TData = {
  title: string;
  text: string;
  image: StaticImageData;
  code: string;
  link?: string;
};

const MagicFieldsCode = `
const person = await CollectSDK.save({
  Name: "John Galt",               // Magic Field "Name"     [String]
  Age: 42,                         // Magic Field "Age"      [Number]
  Born: "1935-10-11T06:00:00Z",    // Magic Field "Born"     [DateTime]
  Location: "37.5162,-77.5133",    // Magic Field "Location" [Geo]
  Verified: false                  // Magic Field "Verified" [Boolean]
})

const vehicle = await CollectSDK.save({
  Name: "Packard",                 // Existing Magic Field "Name"
  Model: "400 2-Door Hardtop",
  Location: "30.1348,-95.1055",    // Existing Magic Field "Location"
  "Year Make": 1955,
  Color: ["Turquoise blue", "Packard ivory"]
})
`;

const NoMigrationsCode = `
const person = await CollectSDK.update({
    Name: "John Galt",
    Age: 42,
    Born: "1935-10-11T06:00:00Z",
    Location: "37.5162,-77.5133",
    Verified: false 
 +  Status: "unemployed",    // Add new property instantly
})
`;

const DataNestingCode = `
// Creates 3 Records
const order = await CollectSDK.save({ 
    id: "2139823", 
    date: "2022-01-12T12:00:00Z",
    products: [{ 
        Name: "GeForce RTX 4090",               // Nested Record #1
        Price: 1599
    },{
        Name: "Heroes of Might and Magic III",  // Nested Record #2
        Price: 15
    }]
})
`;

const QueryFreeCode = `
const person = await CollectSDK.find({
    Body: "Coupe",                          // EXACT MATCH
    Color: ["yellow", "orange", "!black"],  // AND
    HP: ">180, <365",                       // RANGE
    Price: "1900|2400",                     // RANGE
    Transmission: "!Automatic",             // NOT
    Interior: "Leather|Rag",                // OR
    Make: "~Chev",                          // PARTIAL MATCH
},{
    sortBy: "HP,desc"
})
`;

const NoSchemaCode = `
const item = await CollectSDK.save({
    Name: "Carnival Monster Boots", 
    Color: {
      value: "green, gray, black, brown",
      valueSeparator: ",", 
    }, // Resulted as ["green", "gray", "black", "brown"]
    Size: [5.5,6,6.5,7,7.5,8,8.5,9,9.5,10,10.5,10.11,11.5],
    Weight: {  
      units: "lbs",
      value: 3.3
    }, // 👆 shorthand: '3.3 [lbs]'
    Material: ["leather", "cotton", "foam rubber", "silicone"]
})
`;

const AutoEndpoints = `
// Job you do
const record = await CollectSDK.save('user', { 
    name: "John Galt", 
    email: "john.galt@example.com",
    password: "p@ssword"
})

// What you get
// 1. Endpoint to work with: 
const userEndpoint = "/api/v1/records/user"

// 2. Recognition of record type "user":
const user = await CollectSDK.get('user', { 
    email: "john.galt@example.com"
})
`;

export const data: TData[] = [
  {
    title: "Magic Fields",
    text: "Magic Fields automatically interconnect data entities with common properties like color or size. This facilitates efficient searching and filtering of data across your store, even if the entities are diverse in nature.",
    image: magicfileds,
    code: MagicFieldsCode,
    link: "/features/magic-fields",
  },
  {
    title: "No Migrations, Ever",
    text: "Modify your data models in real-time. Effortlessly add, modify, or delete fields without lengthy deployments, and free up senior developers for more critical tasks.",
    image: nomigrations,
    code: NoMigrationsCode,
    link: "/features/no-migrations",
  },
  {
    title: "No Predefined Schema Needed",
    text: "Collect adapts to your needs, from simple structures to more complex requirements. Seamlessly add complexity to your data models with ease, achieving your goals quickly and efficiently.",
    image: noschema,
    code: NoSchemaCode,
    link: "/features/no-predefined-schema",
  },
  {
    title: "Query-Free Database Experience",
    text: "Focus on the data you need, not on how to get it. Collect platform offers handy querying experience and helps retrieve data with ease not worrying about queries complexity any more.",
    image: queryfree,
    code: QueryFreeCode,
    link: "/features/query-free",
  },
  {
    title: "Data Nesting",
    text: "By using the Collect storage engine, you can work with your data effortlessly and intuitively, without having to worry about relational entropy. This will give you peace of mind and allow your apps to operate seamlessly.",
    image: datanesting,
    code: DataNestingCode,
    link: "/features/data-nesting",
  },
  {
    title: "Instant Endpoints",
    text: "With Collect, you can create dynamic APIs without writing a single line of code. This enables you to quickly build applications and services that are tailored to your unique needs, without spending hours on manual coding.",
    image: instantendpoints,
    code: AutoEndpoints,
    link: "/features/dynamically-generated-endpoints",
  },
];
