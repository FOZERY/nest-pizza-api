export interface IEntityMapper<DomainEntity, OrmEntity> {
    toDomain(ormEntity: OrmEntity): DomainEntity;
    toDomains(ormEntity: OrmEntity[]): DomainEntity[];
    toOrm(DomainEntity: DomainEntity): OrmEntity;
    toOrms(DomainEntity: DomainEntity[]): OrmEntity[];
}
