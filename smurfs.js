import { Farspeak } from "farspeak";

const app = "";
const env = "";
const backendToken = "";
const publicKey = "";
const secretKey = "";
const vectorIndexName = "";

const farspeak = new Farspeak({
  app,
  env,
  backendToken,
  publicKey,
  secretKey,
  vectorIndexName,
});

const smurfs = [
  {
    name: "Brainy Smurf",
    description: "Brainy is the most intelligent and educated Smurf.",
    image: "https://www.smurf.com/assets/images/brainy.png",
  },
  {
    name: "Clumsy Smurf",
    description: "Clumsy is the klutz of the Smurf village.",
    image: "https://www.smurf.com/assets/images/clumsy.png",
  },
  {
    name: "Hefty Smurf",
    description: "Hefty is the strongest and bravest Smurf.",
    image: "https://www.smurf.com/assets/images/hefty.png",
  },
];

(async () => {
  const docs = await farspeak.entity("smurfs").write(smurfs);
  console.log(docs);
  const inquiry = await farspeak
    .entity("smurfs")
    .inquire("Which smurf is a strongest?");
  console.log(inquiry);
  await farspeak.entity("smurfs").deleteAll();
  console.log("All smurfs deleted.");
})();
