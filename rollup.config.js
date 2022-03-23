import babel,{getBabelOutputPlugin} from "@rollup/plugin-babel";
import resolve from "@rollup/plugin-node-resolve";
import external from "rollup-plugin-peer-deps-external"
import typescript2 from "rollup-plugin-typescript2";
import sourceMaps from 'rollup-plugin-sourcemaps';

const packageJson = require("./package.json");

export default [
    {
        input:'./src/components/index.ts',
        output:[
         {
            file:'dist/index.js',
            format:'cjs',
         },
         {
             file:'dist/index.es.js',
             format:'es',
             exports:'named'
         }
        ],
        plugins:[
            babel({ presets: ["module:metro-react-native-babel-preset"] }),
            
            external(),
            resolve(),
            typescript2({require: require('typescript'),tsconfig:'tsconfig.json'}),
            sourceMaps(),
            
        ]
    }
]

