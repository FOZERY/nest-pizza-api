export interface IEntityMapper<OrmEntity, DomainEntity> {
    toDomain(ormEntity: OrmEntity): DomainEntity;
    toOrm(domainEntity: DomainEntity): OrmEntity;
    toDomains(ormEntities: OrmEntity[]): DomainEntity[];
    toOrms(domainEntities: DomainEntity[]): OrmEntity[];
}
