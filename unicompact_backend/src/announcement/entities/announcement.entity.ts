import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Announcement {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    description: string;
}
