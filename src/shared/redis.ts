import { createClient } from "redis";
import logger from "./logger";
import config from "../config";

let redisClient = createClient({
  url: config.redis.url
});


const connect = async(): Promise<void> =>{
    await redisClient.connect();
}

redisClient.on('error', (err) => logger.error('Redis error: ', err));
redisClient.on('connect', (err) => logger.info('Redis connected'));


export const RedisClient ={
    connect
}