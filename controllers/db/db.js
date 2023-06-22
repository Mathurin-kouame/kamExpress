//importer le package pour utiliser les variables
const dotenv = require("dotenv");
dotenv.config();

//importer mongoose

const mongoose.connect(
  `mongodb+srv://kouame16yao:<password>@cluster0.slxpkob.mongodb.net/?retryWrites=true&w=majority`  
)