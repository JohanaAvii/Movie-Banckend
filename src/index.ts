import { Hono } from 'hono'
import * as AWS from 'aws-sdk';
import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';

const app = new Hono()

app.post('/upload', (c) => {
    
    const s3 = new AWS.S3({
        accessKeyId:'AKIAQ5BLAXK3K6C7YL2S',
        secretAccessKey:'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',

        
    })
const bucketName = 'vod-watchfolder-marinesfilms';
const fileName = '2_manuel_un_pedazo_de_felicidad (240p).mp4';

//const __dirname = fileURLToPath(import.meta.url);
const filePath = path.resolve(__dirname, fileName);

//const filePath = path.basename(__dirname,"2_manuel_un_pedazo_de_felicidad (1080p).mp4");



// Lee el archivo local
const fileContent = fs.readFileSync(filePath);

// Configura los parámetros para la operación de carga
const params: AWS.S3.PutObjectRequest = {
  Bucket: bucketName,
  Key: fileName,
  Body: fileContent,
};

// Sube el archivo a S3
s3.upload(params, (err, data) => {
  if (err) {
    console.error('Error al subir el archivo a S3:', err);
  } else {
    console.log('Archivo subido exitosamente a S3. URL:', data.Location);
  }
});
    
   
    return c.text('Hello Hono!')
})

export default app
