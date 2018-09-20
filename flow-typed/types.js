declare type Person = {
    status: string,
    gender: "male" | "female",
    name: Name,
    location: Location,
    email: string,
    login: Login,
    dob: Dob,
    registered: Registered,
    phone: string,
    cell: string,
    id: Id,
    picture: Picture,
    nat: string,
}

declare type Name = {
    first: string,
    last: string,
    title: string,
}

declare type Location = {
    street: string,
    city: string,
    state: string,
    postcode: string,
    coordinates: Coordinates,
}

declare type Coordinates = {
    latitude: string,
    longitude: string,
}

declare type Login = {
    uuid: string,
    username: string,
    password: string,
    salt: string,
    md5: string,
    sha1: string,
    sha256: string,
}

declare type Dob = {
    date: string,
    age: number,
}

declare type Registered = Dob;

declare type Id = {
    name: string,
    value: string,
}

declare type Picture = {
    large: string,
    medium: string,
    thumbnail: string,
}

declare type PersonFilters = {
    name: string,
    city: string,
}

declare type Action = {
    type: string,
    filters: PersonFilters,
    person: Person,
    direction: number,
    crew: Person[],
}

declare module SCSSModule {
    declare var exports: { [key: string]: string };
}
