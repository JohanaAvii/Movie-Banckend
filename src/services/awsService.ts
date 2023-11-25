import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import { fromEnv } from "@aws-sdk/credential-providers";

const s3Client = new S3Client({
  credentials: fromEnv(),
  region: "us-west-2",
});

const uploadToS3 = async (fileName: string, file: Buffer) => {
  return await s3Client.send(
    new PutObjectCommand({
      Bucket: process.env.BUCKET_NAME,
      Key: fileName,
      Body: file,
    })
  );
};

export { uploadToS3 };
