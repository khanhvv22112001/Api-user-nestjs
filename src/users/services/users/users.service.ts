import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../../dtos/create-user.dto';
import { UpdateUserDto } from '../../dtos/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../../../typeorm/entities/user.entity';
import { Repository } from 'typeorm';
import { CreateUserParams, UpdateUserParams } from 'src/utils/types';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}


  async findAll(type?: "CLIENT" | "CMS") {
    if (type) {
      const typesArray = await this.usersRepository.find({ where: { type } });
  
      if (typesArray.length === 0) {
        throw new NotFoundException("User type not found");
      }
      return typesArray;
    }
  
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
  
    if (!user) {
      throw new NotFoundException("User not found");
    }
  
    return user;
  }
  

  async create(userDetails: CreateUserParams) {

    const newUser = this.usersRepository.create({...userDetails}); 
    await this.usersRepository.save(newUser); 
    return newUser;
  }
  

  async update(id: number, updateUserDetails: UpdateUserParams) {
    const user = await this.usersRepository.findOne({ where: { id } });
  
    if (!user) {
      throw new NotFoundException("User not found");
    }
  
    await this.usersRepository.update({ id }, {...updateUserDetails});
    return this.findOne(id);
  }
  async remove(id: number) {
    const user = await this.findOne(id);
  
    if (!user) {
      throw new NotFoundException("User not found");
    }
  
    await this.usersRepository.delete(id); 
    return user;
  }


}
