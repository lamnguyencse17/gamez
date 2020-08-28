import { storeTokenDto } from './dto/storeToken.dto';
import { Injectable } from '@nestjs/common';
import { RedisService } from 'nestjs-redis';
import { REDIS_NAME } from '../constants';

@Injectable()
export class TestService {
  constructor(private readonly redisService: RedisService) {}
  private redis = this.redisService.getClient(REDIS_NAME);

  storeToken = (storeValues: storeTokenDto): Promise<string> => {
    const { hash, token } = storeValues;
    return new Promise((resolve, reject) => {
      this.redis.set(hash, token, 'EX', 3600, (err, reply) => {
        if (err) {
          reject(err);
        }
        resolve(reply);
      });
    });
  };

  findToken = async (hash: string): Promise<string> => {
    return new Promise((resolve, reject) => {
      this.redis.get(hash, (err, reply) => {
        if (err) {
          reject(err);
        }
        resolve(reply);
      });
    });
  };
}
