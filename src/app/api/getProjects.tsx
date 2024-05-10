import { GetObjectCommand, S3Client } from '@aws-sdk/client-s3'

const S3 = new S3Client({
    region: process.env.BUCKET_REGION,
    credentials: {
        accessKeyId: process.env.S3_MANAGER_KEY,
        secretAccessKey: process.env.S3_MANAGER_SECRET_KEY
    }
});

export const getProjects = async () => {
    const command = new GetObjectCommand({
        Bucket: process.env.BUCKET_NAME,
        Key: process.env.PROJECT_KEY
    })

    try {
        const response = await S3.send(command);
        const str = await response.Body?.transformToString();
        if (str) return JSON.parse(str);
    } catch (err) {
        console.error(err);
    }
};