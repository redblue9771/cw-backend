create schema sandbox;

alter schema sandbox owner to postgres;

create table if not exists roles
(
    id serial not null
        constraint roles_pk
        primary key,
    name varchar,
    description text
);

alter table roles owner to postgres;

create unique index if not exists roles_id_uindex
    on roles (id);

create table if not exists scenarios
(
    id serial not null
        constraint scenarios_pk
        primary key,
    name varchar not null,
    description text not null
);

alter table scenarios owner to postgres;

create unique index if not exists scenarios_id_uindex
    on scenarios (id);

create table if not exists users
(
    primaryemail varchar not null
        constraint users_pk
        primary key,
    password varchar not null,
    fullname varchar,
    info text,
    phonenumber varchar,
    role integer not null
        constraint roles_fk
        references roles
);

alter table users owner to postgres;

create table if not exists offices
(
    id serial not null
        constraint office_pk
        primary key,
    name varchar not null,
    owner varchar not null
        constraint owner_fk
        references users
);

alter table offices owner to postgres;

create table if not exists devices
(
    id serial not null
        constraint devices_pk
        primary key,
    description varchar,
    office integer
        constraint office__fk
        references offices
);

alter table devices owner to postgres;

create unique index if not exists devices_id_uindex
    on devices (id);

create table if not exists office_has_users
(
    officeid integer not null
        constraint office_fk
        references offices,
    useremail varchar
        constraint user_fk
        references users,
    id serial not null
        constraint office_has_users_pk
        primary key
);

alter table office_has_users owner to postgres;

create unique index if not exists office_has_users_id_uindex
    on office_has_users (id);

create unique index if not exists office_id_uindex
    on offices (id);

create unique index if not exists office_name_uindex
    on offices (name);

create table if not exists personalspace
(
    id serial not null
        constraint personalspace_pk
        primary key,
    "User" varchar
        constraint user_fk
        references users
);

alter table personalspace owner to postgres;

create unique index if not exists personalspace_id_uindex
    on personalspace (id);

create table if not exists scenario_has_devices
(
    scenario integer not null
        constraint scenario_fk
        references scenarios,
    device integer not null
        constraint device__fk
        references devices,
    id serial not null
        constraint scenario_has_devices_pk
        primary key
);

alter table scenario_has_devices owner to postgres;

create unique index if not exists scenario_has_devices_id_uindex
    on scenario_has_devices (id);

create table if not exists user_has_scenarios
(
    "user" varchar not null
        constraint user_fk
        references users,
    scenario integer not null
        constraint scenario__fk
        references scenarios,
    id serial not null
        constraint user_has_scenarios_pk
        primary key
);

alter table user_has_scenarios owner to postgres;

create unique index if not exists user_has_scenarios_id_uindex
    on user_has_scenarios (id);

create unique index if not exists users_primaryemail_uindex
    on users (primaryemail);

create table if not exists widgets
(
    id serial not null
        constraint widgets_pk
        primary key,
    name varchar,
    description varchar
);

alter table widgets owner to postgres;

create table if not exists pspace_has_widgets
(
    widget integer
        constraint widget___fk
        references widgets,
    pspace integer
        constraint pspace__fk
        references personalspace,
    id serial not null
        constraint pspace_has_widgets_pk
        primary key
);

alter table pspace_has_widgets owner to postgres;

create unique index if not exists pspace_has_widgets_id_uindex
    on pspace_has_widgets (id);

create unique index if not exists widgets_id_uindex
    on widgets (id);

