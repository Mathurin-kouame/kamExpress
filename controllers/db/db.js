//importer le package pour utiliser les variables
const dotenv = require("dotenv");
dotenv.config();

//importer mongoose

const mongoose.connect(
  `${process.env.DB_PROTOCOLE}://kouame16yao:kouame16.@cluster0.slxpkob.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,`{uneNewUrIParser: true}`

)