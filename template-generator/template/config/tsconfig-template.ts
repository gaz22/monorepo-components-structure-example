export const TSconfigTemplate = () => {
    return `
    {
        "compilerOptions": {
          // Default
          "target": "es5", 
          "esModuleInterop": true, 
          "forceConsistentCasingInFileNames": true,
          "strict": true, 
          "skipLibCheck": true,
          
          // Added
          "jsx": "react", 
          "module": "ESNext",  
          "declaration": true,
          "declarationDir": "types",
          "sourceMap": true,
          "outDir": "dist",
          "moduleResolution": "node",
          "allowSyntheticDefaultImports": true,
          "emitDeclarationOnly": true,
        }
      }
      `;
}