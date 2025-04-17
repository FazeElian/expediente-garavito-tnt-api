import {
    Table,
    Column,
    Model,
    DataType,
    AllowNull
} from "sequelize-typescript";

@Table ({
    tableName: "stories"
})

class Story extends Model {
    @AllowNull(false)
    @Column({
        type: DataType.STRING(150)
    })
    declare title: string

    @Column({
        type: DataType.STRING
    })
    declare author: string

    @AllowNull(false)
    @Column({
        type: DataType.TEXT
    })
    declare content: string

    @AllowNull(false)
    @Column({
        type: DataType.STRING
    })
    declare image: string
}

export default Story;