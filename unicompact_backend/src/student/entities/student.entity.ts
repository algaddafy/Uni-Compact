import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    title: string;

    @Column()
    category: string;

    @Column()
    subcategory: string;

    @Column()
    description: string;

    @Column()
    status : string;
}
