import { UserEntity } from 'src/users/entities/user.entity';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    DeleteDateColumn,
    ManyToOne,
} from 'typeorm';

@Entity('files')
export class FileEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    filename: string;

    @Column()
    originName: string;

    @Column()
    size: number;

    @Column()
    mimtype: string;

    @ManyToOne(() => UserEntity, (user) => user.files)
    user: UserEntity;

    @DeleteDateColumn()
    deleteAt?: Date;
}
